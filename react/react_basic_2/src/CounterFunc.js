import { useState } from "react";

export default function CounterFunc() {
    const [number, setNumber] = useState(0);
    //useState는 항상 배열로 두개를 보냄
    const [change, setChange] = useState('검정색 글씨')
    const [color, setColor] = useState('black')

    const [visible, setVisible] = useState(true);

    const handleIncrement = () => {
        setNumber(number + 1);
    };
    const handleDecrement = () => {
        setNumber(number - 1);
    };

    const redBtn = () => {
        setColor('red')
        setChange('빨간색 글씨')
    }

    const blueBtn = () => {
        setColor('blue')
        setChange('파란색 글씨')
    }

    const handleVisible = () => {
        setVisible(!visible);
    }




    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleIncrement}>증가</button>
            <button onClick={handleDecrement}>감소</button>

            <h1 style={{ color }}>{change}</h1>
            <button onClick={redBtn}>빨간색</button>
            <button onClick={blueBtn}>파란색</button>

            <br></br>
            <br></br>

            <button onClick={handleVisible}>{visible ? '사라져라' : '보여라'}</button>
            {visible && <h1>안녕하세요</h1>}


        </div>
    );
}

