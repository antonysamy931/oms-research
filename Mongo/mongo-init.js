const path = require('path');

const AccountRepo = require(path.join(__dirname, './repository/account.repo'));
const UserRepo = require(path.join(__dirname,'./repository/user.repo'));

module.exports = {
    Account: AccountRepo,
    User: UserRepo
};
