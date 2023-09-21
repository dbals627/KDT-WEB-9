import { useState } from 'react';

export default function TodoFunc() {

    const [todos, setTodos] = useState([]);   //할일목록 
    const [inputTodo, setInputTodo] = useState('');

    const addTodo = () => {
        if (todos.length > 9) {
            alert('할 일이 너무 많아요!')
        }

        if (inputTodo !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputTodo,
                checked: false, //완료된 상태가 아니기 때문에 false 

            };
            setTodos([...todos, newTodo]);
            setInputTodo('');
        }
    }

    const toggleTodo = (id) => {
        console.log(id);
        setTodos(todos.map((todo) => {
            console.log(todo);
            return todo.id === id ? { ...todo, checked: !todo.checked } : todo
        }))
    }


    const RemoveTodo = () => {
        const result = todos.filter(value => value.checked === false)
        setTodos(result);
    }

    return (
        <>
            <input type='text' value={inputTodo} onChange={e => setInputTodo(e.target.value)} placeholder='할 일 입력...' />
            <button onClick={addTodo}>추가</button>

            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id}>
                        <input type="checkbox" checked={todo.checked} onChange={() => { toggleTodo(todo.id) }} />
                        {todo.text}</li>;
                    // input태그는 중간에 값을 넣으면 안됨(애초에 한줄짜리)
                })}
            </ul>
            <button onClick={RemoveTodo}>완료된 할 일 삭제</button>
        </>
    )

}
