import { useState } from 'react';
import PropsPrac1 from './04Props/PropsPrac1';
import PropsPrac2 from './04Props/PropsPrac2';
import Message from './05Event/Message';
import StatePrac1 from './06State/StatePrac1';
import StatePrac2 from './06State/StatePrac2';
import StatePrac3 from './06State/StatePrac3';
import StatePrac4 from './06State/StatePrac4';
import UseStatePrac1 from './07UseState/UseStatePrac1';
import UseStatePrac2 from './07UseState/UseStatePrac2';
import UseStatePrac3 from './07UseState/UseStatePrac3';
import UseStatePrac4 from './07UseState/UseStatePrac4';
import UseStatePrac5 from './07UseState/UseStatePrac5';
import LifePrac1 from './08Lifecycle/LifePrac1';
import LifePrac2 from './08Lifecycle/LifePrac2';

function App() {
    const [status, setStatus] = useState(true);
    const removeComp = () => {
        setStatus(!status);
    };

    return (
        <>
            <button onClick={removeComp}>연결해제</button>
            {status && <LifePrac2 />}
            {/* Prop 실습 */}
            {/* <PropsPrac1 food="치킨" />
            <PropsPrac1 />
            <PropsPrac2
                title={"나의하루는 4시40분에 시작된다"}
                author={"김유진"}
                price={"13,600원"}
                type={"자기개발서"}
            /> */}
            {/* 이벤트 핸들링 실습 */}
            {/* <Message message={"Hello React"} /> */}
            {/* state 실습 */}
            {/* <StatePrac1 />
            <StatePrac2 />
            <StatePrac3 />
            <StatePrac4 /> */}
            {/* useState 실습 */}
            {/* <UseStatePrac1 />
            <UseStatePrac2 />
            <UseStatePrac3 />
            <UseStatePrac4 />
            <UseStatePrac5 /> */}
        </>
    );
}

export default App;
