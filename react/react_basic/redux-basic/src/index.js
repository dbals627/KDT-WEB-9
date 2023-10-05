/// 리덕스를 이용한 숫자증가, 감소 코드
import { createStore } from 'redux';

const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

//상수의 변수
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

//reducer
const reducer = (state = [], action) => {
  console.log(action);

  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: '??', id: Date.now() };
      return [...state, newTodo];
    case DELETE_TODO:
      return state.filter((el) => el.id !== '??');
    default:
      return state;
  }
};
//store
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.subscribe(() => {
  const todos = store.getState();
  ul.innerHTML = '';

  todos.map((value) => {
    const li = document.createElement('li');
    li.id = value.id;
    li.innerText = value.text;
    ul.appendChlid(li);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('first');
  input.value = '';
  store.dispatch({ type: ADD_TODO });
});

// const add = document.querySelector('#add');
// const minus = document.querySelector('#minus');
// const num = document.querySelector('#num');

// const ADD = 'ADD';
// const MINUS = 'MINUS';

// //리듀서
// const countReducer = (state, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     case 'HAHAHA':
//       return 'ABC';
//     default:
//       return state;
//   }
// };

// //store는 데이터를 넣는곳
// //createStore: store생성, 리듀서 함수 필수
// const countStore = createStore(countReducer);
// console.log(countStore);
// // countStore.dispatch({ type: 'ADD' });
// // console.log(countStore.getState());

const countStore = createStore(countReducer);
console.log(countStore);
countStore.dispatch({ type: 'ADD_TODO' });
countStore.dispatch({ type: 'DELETE_TODO' });

console.log(countStore.getState());

// //subscribe()는 데이터와 저장소가 변경될때마다 콜백함수를 실행
// countStore.subscribe(() => {
//   //getState()는 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
//   num.textContent = countStore.getState();
// });

// add.addEventListener('click', () => {
//   countStore.dispatch({ type: 'ADD' });
// });

// minus.addEventListener('click', () => {
//   countStore.dispatch({ type: 'MINUS' });
// });

// /// 자바스크립트를 이용한 숫자증가, 감소 코드
// let count = 0;

// add.addEventListener('click', () => {
//   count = count + 1;
//   num.textContent = count;
// });

// minus.addEventListener('click', () => {
//   count = count - 1;
//   num.textContent = count;
// });
