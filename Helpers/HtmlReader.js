const path = require('path');
const fs = require('fs');

const ResetpasswordTemplatePath = path.join(__dirname, '../Templates/Resetpassword.html');

module.exports = {
    ResetpasswordTemplate: () =>{
        return fs.readFileSync(path.join(ResetpasswordTemplatePath),"utf8");        
    }
};