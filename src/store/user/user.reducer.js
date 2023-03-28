const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: payload };
    case "SIGN_OUT_USER":
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
