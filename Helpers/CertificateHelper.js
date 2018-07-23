const fs = require('fs');

let Privatekey = fs.readFileSync('cert/privateKey.key','utf8');
let Certificate = fs.readFileSync('cert/omscert.crt','utf8');

var Credentials = {key: Privatekey, cert: Certificate};

module.exports = {
    Credentials : Credentials
};