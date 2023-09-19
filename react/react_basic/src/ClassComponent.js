import { Component } from 'react'; //1번 방법  : import에서 객체로 가져오기
//import React from 'react'; //2번 방법 
import PropTypes from 'prop-types';


//class형 컴포넌트
//class 컴포넌트명 extends Component{} //1번 방법 
//class classComponent extends React.Component { } //2번 방법

class ClassComponent extends Component {

    //클래스형 컴포넌트에서는 render 함수는 필수 
    render() {
        // const name = "홍길동";
        // const { age } = this.props;
        // 객체분해구조할당 

        const style = { color: 'red' }

        return (
            <>
                {/* <h1>Hello {name}</h1>
                <h2>안녕하세요 {this.props.name}</h2>
                <h2>나이는 {age}살 입니다</h2>
                <p>여기는 클래스형 컴포넌트</p> */}

                <h2>제가 좋아하는 음식은 <span style={style}>{this.props.food}</span></h2>
            </>
        );
    }
}

// ClassComponent.defaultProps = {
//     name: "임꺽정",
//     age: 13,
// };

// ClassComponent.propTypes = {
//     // 소문자 
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number,
//     // 대문자
// };


ClassComponent.defaultProps = {
    food: "마라탕",
};

ClassComponent.propTypes = {
    food: PropTypes.string,
};



export default ClassComponent;  //외부에서 사용가능 (App.js)

