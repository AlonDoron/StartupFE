import * as authTypes from "../actions/authTypes";
import * as authActions from "../actions/authAction";

describe("auth actions", () => {
  it("should create an action to set userId", () => {
    const userId = "248c63a0-82d2-4ae3-8dc8-8165350907c";
    const expectedAction = {
      type: authTypes.SET_USER_ID,
      payload: userId,
    };

    expect(authActions.setUserId(userId)).toEqual(expectedAction);
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
