export const initialState = {
  theme: true,
  imgSrc: "http://frank.com.s3-website-us-east-1.amazonaws.com",
  headerShow: true,
  menuShow: false,
  user: {
    id: undefined,
    name: undefined,
  },
};

export const globalReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "UPDATE_USER":
      return {
        ...state,
        user: actions.payload,
      };
    case "HEADER_SHOW":
      return {
        ...state,
        headerShow: actions.payload,
      };
    case "MENU_SHOW":
      return {
        ...state,
        menuShow: actions.payload,
      };

    default:
      return state;
  }
};
