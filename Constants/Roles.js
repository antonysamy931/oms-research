var Enums = require('enum');
var Roles = new Enums({
    "oms_admin":"omsadmin",
    "admin":"admin"},
    {ignoreCase: true});

module.exports = Roles;