import { Component } from 'react';


class Test extends Component {    // 파일이름

    render() {
        const name = '전유민';
        const my_style = {
            backgroundColor: 'blue',
            color: 'orange',
            fontSize: '40px',
            padding: '12px'
        }

        return (
            <>
                <div style={my_style}>{name}</div>

            </>
        );
    }
}

export default Test;  //파일이름