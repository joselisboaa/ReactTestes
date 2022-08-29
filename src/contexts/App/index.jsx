import { createContext, useReducer } from "react";
import { globalState } from "./data";
import { actions } from "../../actions/actions";
import { reducer } from "../../reducers/reducer";

export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, globalState);

    const changeTitle = (payload) => {
        dispatch({ type: actions.CHANGE_TITLE, payload })
    };

    const changeColor = (payload) => {
        dispatch({ type: actions.CHANGE_COLOR, payload })
    };

    const addCounter = (payload) => {
        dispatch({ type: actions.CHANGE_COUNTER, payload })
    }

    return (
        <GlobalContext.Provider value={{ state, changeTitle, changeColor, addCounter }}>
            {children}
        </GlobalContext.Provider>
    )
}