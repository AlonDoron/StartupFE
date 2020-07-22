import * as authTypes from "../actions/authTypes";
import authReducer from "../reducers/authReducer";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual({
      userId: null,
      isUserExists: null,
      isFetching: false,
    });
  });

  it("should handle SET_IS_USER_EXISTS", () => {
    expect(
      authReducer(undefined, {
        type: authTypes.SET_IS_USER_EXISTS,
        payload: true,
      })
    ).toEqual({
      userId: null,
      isUserExists: true,
      isFetching: false,
    });
  });

  it("should handle SET_USER_ID", () => {
    expect(
      authReducer(undefined, {
        type: authTypes.SET_USER_ID,
        payload: 1,
      })
    ).toEqual({
      userId: 1,
      isUserExists: null,
      isFetching: false,
    });
  });

  it("should handle FETCH_ERROR", () => {
    expect(
      authReducer(undefined, {
        type: authTypes.FETCH_ERROR,
        payload: { userId: "userId does not exists!" },
      })
    ).toEqual({
      userId: null,
      isUserExists: null,
      isFetching: false,
      errors: {
        userId: "userId does not exists!",
      },
    });
  });
});
