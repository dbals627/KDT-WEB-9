import React from 'react';
import desk from './desk.jpg'

class Test2 extends React.Component {

    render() {
        const style = {
            color: 'orange',
            fontSize: '40px',
            marginTop: '20px',
        }
        return (
            <>
                <div style={style}>
                    <h2>안녕하세요</h2>
                    <img src={desk}></img>
                </div>
            </>
        );
    }
}

export default Test2;
