import { useReducer } from "react";
import { storeContext } from "./store";

const StoreProvider = ({ children }) => {
  const initialState = {
    isSideBarOpen: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_SIDE_BAR":
        return { ...state, isSideBarOpen: !state.isSideBarOpen };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <storeContext.Provider value={{ dispatch, state }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
