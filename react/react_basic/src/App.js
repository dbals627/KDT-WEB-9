import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Event from './Event';


// import Larva from './Larva';


// import './Larva.css';
import Test from './Test';
import Test2 from './Test2';
import EventClass from './EventClass';

function App() {
  return (
    <>
      {/* <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>

      <Test></Test>
      <Test2></Test2> */}

      {/* <ClassComponent name="yumin" age={10}></ClassComponent> */}
      {/* <ClassComponent food="고기" ></ClassComponent > */}

      {/* 문자열일때만 따옴표로 보냄, 숫자나 함수는 중괄호 안에서 */}
      {/* < ClassComponent /> */}
      {/* 아무런 값을 보내지 않았기 때문에 기본값이 출력됨 (defaultProps) */}
      {/* <FunctionComponent myClass={'kdt9//'}>코딩</FunctionComponent> */}
      {/* 화면에 출력 */}
      {/* <FunctionComponent title='나의 하루는 4시 40분에 시작된다' author='김유진' price='13,500원' type='자기계발서'></FunctionComponent> */}
      {/* <FunctionComponent /> */}
      {/* <Event /> */}
      <EventClass message={'이벤트 핸들링 실습'}></EventClass >

    </>
  );
}

export default App;
