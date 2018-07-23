const path = require('path');

const ApplicationSettings = require(path.join(__dirname, '../application-setting.json'));

var EmailSetting = {};

if(ApplicationSettings["smtp-gmail-enabled"] == true){
    EmailSetting.service = "gmail";
    EmailSetting.auth = {
        user: ApplicationSettings["from-address"],
        pass: ApplicationSettings["auth-password"]
    }
}else{
    EmailSetting.host = ApplicationSettings["smtp-host"];
    EmailSetting.port = ApplicationSettings["smtp-port"];
    if(ApplicationSettings["smtp-secure"] == true){
        EmailSetting.secure = true;
        EmailSetting.auth = {
            user: ApplicationSettings["from-address"],
            pass: ApplicationSettings["auth-password"]
        }
    }else{
        EmailSetting.secure = false;
    }
}

module.exports = EmailSetting;