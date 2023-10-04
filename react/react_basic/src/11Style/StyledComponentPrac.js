import { useState } from 'react';
import styled from 'styled-components';

export default function StyledComponentPrac() {

    const [text, setText] = useState('')
    const [todoList, setTodoList] = useState([])

    const addList = () => {
        setTodoList([...todoList, setText])
    }

    const _Text = styled.input`
    `

    const _Btn = styled.button`
     background-color: skyblue;
    `

    const button = () => {

    }

    return (
        <div>
            <_Text value={text} type="text" onChange={(event) => setText(event.target.value)} />
            <_Btn onClick={addList}>Add</_Btn>


        </div>
    )
}
