import React, { createContext, useReducer, useContext } from "react";

export const themeContxt = createContext();

const initial = { darkMode: false};

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initial);
    return (
        <themeContxt.Provider value={{ state, dispatch }}>
            {props.children}
        </themeContxt.Provider>
    );
};
