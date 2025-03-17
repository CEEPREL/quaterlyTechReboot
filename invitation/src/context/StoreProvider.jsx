import { useReducer, useRef } from "react";
import { storeContext } from "./store";

const StoreProvider = ({ children }) => {
  const initialState = {
    isSideBarOpen: false,
    isRegisterFormOpen: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_SIDE_BAR":
        return { ...state, isSideBarOpen: !state.isSideBarOpen };
      case "TOGGLE_REGISTER_FORM":
        return { ...state, isRegisterFormOpen: !state.isRegisterFormOpen };

      default:
        return state;
    }
  };

  const sectionsRef = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionsRef[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <storeContext.Provider
      value={{ dispatch, state, sectionsRef, scrollToSection }}
    >
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
