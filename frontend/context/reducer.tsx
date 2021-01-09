export const initialState = {
  theme: true,
  imgSrc: "http://frank.com.s3-website-us-east-1.amazonaws.com",
  search: "",
  user: {
    id: undefined,
    name: undefined,
  },
};

export const globalReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "UPDATE_SEARCH":
      return {
        ...state,
        search: actions.payload,
      };

    default:
      return state;
  }
};