const SvgCaptcha = require('svg-captcha');

module.exports = {
    GetCaptcha : () => {
        var Random = Math.floor(Math.random() * 100) % 2;
        var Captcha;
        if(Random == 1){
            Captcha = SvgCaptcha.create({
                size: 6,
                fontSize: 32,
                width: 120,
                height: 60,
                noise: 1,
                color: false
            });
        }else{
            Captcha = SvgCaptcha.createMathExpr({
                fontSize: 32,
                height: 60,
                width: 120,
                noise: 3,
                size: 6,
                color: false
            });
        }
        return Captcha;
    }
}