const model = require('../model/Model');

exports.main = (req, res) => {
    res.render('index', { userinfo });
};

exports.userinfo = (req, res) => {
    const { name, gender, major } = req.body;
    model.push({
        id: model.length + 1,
        name,
        gender,
        major,
    });
    res.json({ result: true })
};

module.exports = {
    main,
    userinfo
}