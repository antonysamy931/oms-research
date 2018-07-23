const Express = require('express');
const Router = Express.Router();
const Path = require('path');
const CaptchaGenerator = require(Path.join(__dirname, '../Helpers/Captcha.generator'));

Router.get('/getcaptcha',(req, res, next) => {
    var Captcha = CaptchaGenerator.GetCaptcha();
    res.status(200).send(Captcha);
});

module.exports = Router;