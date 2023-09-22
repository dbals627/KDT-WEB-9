import { useState } from "react";
import LifePrac1 from "../../react_practice/src/08Lifecycle/LifePrac1";
import LifeCycleFunc from "./08Lifecycle/LifeCycleFunc";
import UseEffectPrac1 from "./08Lifecycle/UseEffectPrac1"

function App() {
    const [status, setStatus] = useState(true);
    const removeComp = () => {
        setStatus(!status);
    };

    return <>
        <button onClick={removeComp}>연결해제</button>
        {/* <LifeCycleFunc /> */}
        {/* <UseEffectPrac1 /> */}
        <LifePrac1 />
    </>;
}

export default App;
