const uuid = require('uuid/v1');

module.exports = {
    UserId: () => {
        return "user"+uuid();
    }
}