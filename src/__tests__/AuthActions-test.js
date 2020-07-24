import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as authTypes from "../actions/authTypes";
import * as authActions from "../actions/authAction";
import { apiConfig } from "../config";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const token = "248c63a0-82d2-4ae3-8dc8-8165350907c";

describe("auth actions", () => {
  it("should create an action to set userId", () => {
    const expectedAction = {
      type: authTypes.SET_USER_ID,
      payload: token,
    };

    expect(authActions.setUserId(token)).toEqual(expectedAction);
  });

  it("should create an action to set isUserExists", () => {
    const isUserExists = true;
    const expectedAction = {
      type: authTypes.SET_IS_USER_EXISTS,
      payload: isUserExists,
    };

    expect(authActions.setIsUserExists(isUserExists)).toEqual(expectedAction);
  });
});

describe("auth async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_SUCCESS and SET_IS_USER_EXISTS when fetching isUserExistsByToken is done", () => {
    fetchMock.getOnce(`${apiConfig.IDENTITY_PORT}api/identity`, {
      body: {
        userId: token,
      },
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      { type: authTypes.FETCH_REQUEST },
      { type: authTypes.FETCH_SUCCESS },
      { type: authTypes.SET_IS_USER_EXISTS, payload: false },
    ];

    const store = mockStore({
      userId: null,
      isUserExists: null,
      isFetching: false,
    });

    return store.dispatch(authActions.isUserExistsByToken(token)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
