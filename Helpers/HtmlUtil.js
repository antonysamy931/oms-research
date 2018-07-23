const path = require('path');
const jwt = require(path.join(__dirname, './jwt.helper'));

module.exports = {
    ResetpassowrdMapper: (template, data, url) => {
        template = template.replace("<~name~>", data.Name);        
        template = template.replace("<~username~>", data.Username);
        var href = url + "/reset-password/" + jwt.GenerateResetToken(data);
        template = template.replace('<~href~>', href);
        return template;
    }
}