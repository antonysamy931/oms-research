const crypto = require('crypto');
const path = require('path');

var ApplicationSetting = require(path.join(__dirname, '../application-setting.json'));
var ENCRYPTION_KEY = ApplicationSetting["crypto-key"];

module.exports = {
    Encryption: function(plaintext){
        var m = crypto.createHash('md5');
        m.update(ENCRYPTION_KEY);
        var key = m.digest();
        var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';    
        var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);    
        var encoded = cipher.update(plaintext, 'utf8', 'hex');
        encoded += cipher.final('hex');
        return encoded;
    },
    Decryption: function(encryptedtext){
        var m = crypto.createHash('md5');
        m.update(ENCRYPTION_KEY);
        var key = m.digest();
        var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';    
        var cipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
        var decode = cipher.update(encryptedtext, 'hex', 'utf8');
        decode += cipher.final("utf8");
        return decode;
    }
}