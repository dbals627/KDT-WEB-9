import { Component } from "react";

class EventClass extends Component {
    // constructor(props) {
    //     super(props);
    //     //super 는 위에 (react) 있는 컴포넌트를 참조받아서 사용한다는 뜻 
    //     //super는 부모의 값을 사용하기 위하여 넣은 키워드 

    //     //this 바인딩
    //     //일반형 함수일때만 사용 
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick() {
    //     alert('클래스형 컴포넌트');
    // }

    // //화살표함수(바인딩 필요 x)
    // handleClick2 = () => {
    //     alert("클래스형 컴포넌트 2번")
    // }

    handleClick = () => {
        alert(this.props.message)
    }

    render() {
        return (
            <>
                {/* <button onClick={this.handleClick}>클릭Class</button> */}
                {/* class형 컴포넌트에서는 this를 붙여야 함 */}
                {/* <button onClick={this.handleClick2}>클릭Class2번</button> */}
                <button onClick={this.handleClick}>Show Message</button>
            </>
        )
    }
}

export default EventClass;