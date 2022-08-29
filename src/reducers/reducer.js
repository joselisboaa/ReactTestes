import { actions } from "../actions/actions";

export const reducer = (state, action) => {
    switch(action.type) {
        case actions.CHANGE_TITLE:  {
            console.log('Mudar título');
            return {...state, title: action.payload};
        }
        case actions.CHANGE_COLOR: {
            console.log('Mudar cor');
            return {...state, title: action.payload};
        }
        case actions.CHANGE_COUNTER: {
            console.log('Counter mudou');
            const {counter} = state
            return {...state, counter: counter + 1}
        }
    }
}