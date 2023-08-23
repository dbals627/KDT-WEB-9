const model = require('../model/Model');
//모델을 가져옴(객체배열) model안에 객체 담김 

const main = (req, res) => {
    res.render('index');
}

const comments = (req, res) => {
    res.render('comments', { lists: model }); //render는 데이터 보낼 수 있음
};
//model이 배열 전체이기 때문에 model만 넣어줌 

const comment = (req, res) => {
    console.log(req.params);  //req.params로 접근 req.params.name 객체로 출력
    //{name: '50'}  :name 콜론뒤에 붙은 변수가 key, 입력한 값이 value
    res.render('comment', {data :model[Number(req.params.name - 1)]});
};

module.exports = {
    main: main,
    comm: comments,
    comment
}

//모듈 사용 방법 
//방법1
// module.exports.main = "함수, 변수, 문자열, 숫자"
// exports.main = null //위의 것의 축약형 / main하나를 보냄

//방법2
// const test = () => {} //test 전체를 보냄 
// module.exports= test