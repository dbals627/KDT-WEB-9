import { Component } from 'react'
import App from './App';

class Counter extends Component {

    // constructor(props) {
    //     //부모 클래스인 Component의 생성자 호출
    //     super(props);


    //     this.state = {
    //         number: 0,
    //     };
    //     //바인딩
    //     this.handleIncrement = this.handleIncrement.bind(this);

    // }

    // handleIncrement() {
    //     this.setState({ number: this.state.number + 1 });
    //     //setState를 이용하여 숫자 증가(변경) -> onClick에서 다시 렌더링 
    //     console.log("증가함수", this);
    // }

    // 화살표 함수만 쓸 때는 생성자 함수 쓰지 않아도 됨
    // state 는 바꾸고 싶은 값을 객체 형태로 적으면 됨
    // state = {
    //     number: 0,
    // }

    state = {
        button: '사라져라',
        text: '',

    }




    //화살표 함수는 바인딩을 할 필요 없음!!
    handleDecrement = () => {
        //setState는 호출 직후에 상태가 바로 업데이트 되지 않는다.
        //리액트는 여러 setState 호출을 일괄 처리
        //2번의 setState가 1번의 setState의 결과를 기반으로 동작하지 않는다. 
        //this.setState({ number: this.state.number - 1 }); // ---1번
        //this.setState({ number: this.state.number - 1 }); // ---2번

        this.setState((prevState) => {
            return { number: prevState.number - 1 }
        })

        //return 없는 함수
        this.setState((prevState) => ({ number: prevState.number - 1 }));

        //console.log("감소함수", this);
    }

    redBtn = () => {
        this.setState({ text: '빨간색 글씨', color: "red" })
    }

    blueBtn = () => {
        this.setState({ text: '파란색 글씨', color: "blue" })
    }

    //실습2
    deleteBtn = () => {
        this.setState({ text: "보여라" })

        this.setState((prevState) => {
            return { text: prevState.text }
        })
    }




    render() {

        // const { number } = this.state
        // 객체분해구조할당

        return (
            <div>
                <h1>{this.state.number}</h1>
                {/* <h1>{number}</h1> */}

                {/* state는 쓰고 싶은 곳에다가 쓰면 됨 */}
                <button onClick={this.handleIncrement}>증가</button>
                <button onClick={this.handleDecrement}>감소</button>

                <br></br>
                <h1 style={{ color: this.state.color }}>{this.state.text}</h1>
                <button onClick={this.redBtn}>빨간색</button>
                <button onClick={this.blueBtn}>파란색</button>

                <br></br>
                <br></br>
                <h2>실습2</h2>
                <button onClick={this.deleteBtn}>사라져라</button>
                <h1>안녕하세요</h1>



            </div>
        )
    }

}

export default Counter;