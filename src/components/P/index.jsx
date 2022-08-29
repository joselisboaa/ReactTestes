import { GlobalContext } from "../../contexts/App"
import { useContext, useRef } from "react"

export const P = () => {
    
    const context = useContext(GlobalContext);
    const pRef = useRef();


    return (
        <p onClick={(() => context.addCounter())}>{context.state.counter}</p>
    )
}