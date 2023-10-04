import { useState } from 'react'
import styled from 'styled-components'

const _Input = styled.input`
padding: 10px;
margin-right: 10px;
`;

const _Button = styled.button`
padding: 10px 15px;
background-color: skyblue;
border: none;
border-radius: 4px;
font-weight: 700;
cursor: pointer;
`;

const _Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const _List = styled.ul`
width: 300px;
height: 200px;
overflow-y: scroll;
padding: 0px;
`

const _Comment = styled.li`
padding: 5px;
border-bottom: 1px solid gray;
`

export default function StylePrac4() {

    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);


    const onClick = () => {
        //["1", "2", "3"...........]
        if (inputValue !== '') {
            setList([...list, inputValue]);
            setInputValue('');
        }
    }

    return (
        <_Container>
            <div>
                <_Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <_Button onClick={onClick}>Add</_Button>
            </div>

            <_List>
                {list.map((value, idx) => {
                    return <_Comment key={idx}>{value}</_Comment>
                })}
            </_List>
        </_Container>
    )
} 