"use strict";
exports.__esModule = true;
exports.toUser = function (_a) {
    var email = _a.email, firstName = _a.firstName, lastName = _a.lastName, phone = _a.phone, role = _a.role, _b = _a.id, id = _b === void 0 ? 1 : _b;
    return ({
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        role: role,
        id: id
    });
};
