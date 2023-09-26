import { useState, useCallback } from 'react';

// function ChildComponent({ onClick }) {
//     // console.log("Child Componenet")
//     return (
//         <>
//             <button onClick={onClick}>PLUS</button>
//         </>
//     )
// }


export default function UseCallback() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('')


    //useCallback 미사용 
    const plusCount = () => {
        console.log('plusCount', count)
        setCount((prev) => prev + 1);
    }

    //useCallback 사용 
    //렌더링을 다시 하지 않음(count=0값으로 초기화되지 않음음)
    //한번 불러일으키면 끝..
    //반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주어서 함수를 메모이제이션 
    //
    const plusCountCallback = useCallback(() => {
        console.log('plusCountCallback', count);
        setCount((prev) => prev + 1);
    }, []);

    const onChange = (e) => {
        setInputValue(e.target.value);
        plusCountCallback();
    }


    return (
        <>
            {/* <input value={inputValue} onChange={(e) => onChange(e)} /> */}
            {/* <ChildComponent onClick={plusCountCallback} /> */}
            {/* onClick은 props명 */}
            <button onClick={plusCountCallback}>PLUS</button>
            <p>{count}</p>
        </>
    )

}