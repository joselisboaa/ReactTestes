import { useContext, useRef } from "react";
import { GlobalContext } from "../../contexts/App";

export const H1 = () => {

    const context = useContext(GlobalContext);
    const inputRef = useRef();


    return (
        <div>
            <h1 
            onMouseEnter={() => context.changeTitle(inputRef.current.value)}
            onMouseOut={() => context.changeTitle('O título')}
            >{context.state.title}</h1>
            <input type="text" ref={inputRef} />
        </div>
    )
};