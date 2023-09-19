import PropTypes from 'prop-types'
import desk from './desk.jpg'
import './Props.css';

//함수형 컴포넌트
//function 컴포넌트명 or const 컴포넌트명 = () => {}
function FunctionComponent(props) {
    // const myClass = 'kdt9.'
    // const title = '나의 하루는 4시 40분에 시작된다'
    // const author = '김유진'
    // const price = '13,500원'
    // const type = '자기계발서'

    return (
        <>
            <div className='container'>
                {/* <h1>반갑습니다. {myClass}에 오신것을 환영합니다.</h1> */}
                {/* h1은 그냥 kdt9 */}
                {/* <p>여기는 함수형 컴포넌트</p>
            <h2>props {props.myClass}</h2> */}
                {/* props는 App.js에서 받아옴 */}
                {/* <h2>{props.children}</h2> */}
                <h1 className='best'>이번주 베스트셀러</h1>
                <img src={desk} width={'300px'} className='img'></img>
                <h1>{props.title}</h1>
                <h3>저자 : {props.author}</h3>
                <h3>판매가 : {props.price}</h3>
                <h3>구분 : {props.type}</h3>
            </div >
        </>
    );
}

// FunctionComponent.defaultProps = {
//     myClass: 'kdt99',

// };

FunctionComponent.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
};

export default FunctionComponent;