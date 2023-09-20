import { Component } from "react";

class FontColor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '검정',
            color: 'black'
        }

        this.handleBlue = this.handleBlue.bind(this)
        this.handleRed = this.handleRed.bind(this)

    }

    handleRed() {
        this.setState(() => {
            return { text: '빨강', color: 'red' };
        });
    }
    handleBlue() {

    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <h1>{text}색 글씨</h1>
                <button onClick={this.handleRed}>빨간색</button>
                <button onClick={this.handleRed}>파란색</button>
            </div>
        );
    }

}

export default FontColor;