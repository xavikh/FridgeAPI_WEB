'use strict';



function validEmail(email) {
    if (!email || email.length === 0) return false;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return emailPattern.test(email);
}

function validPassword(password) {
    if (!password || password.length === 0) return false;
    const passwordPattern = /[a-z0-9_]{8,30}/i; //TODO: Use constants
    return passwordPattern.test(password)
}

function validName(name) {
    if (!name || name.length === 0) return false;
    const namePattern = /[a-z ]{2,40}/i; //TODO: Use constants
    return namePattern.test(name)
}

function validProductName(name) {
    if (!name || name.length === 0) return false;
    const namePattern = /[-_a-z 0-9]{2,40}/i; //TODO: Use constants
    return namePattern.test(name)
}

function validURL(url) {
    if (!url || url.length === 0) return false;
    const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //TODO: Use constants
    return urlPattern.test(url)
}




function validFloat(num) {
    if (!num || num.length === 0) return false;
    const numPattern = /[0-9]{1}(\.[0-9]+)?/g; //TODO: Use constants
    return numPattern.test(num)
}

function validInt(num) {
    if (!num || num.length === 0) return false;
    const numPattern = /[0-9]+/; //TODO: Use constants
    return numPattern.test(num)
}

function validId(id) {
    if (!id || id.length === 0) return false;
    const idPattern = /[a-f0-9]{24}/i; //TODO: Use constants
    return idPattern.test(id)
}

function validStatus(status) {
    if (!status || status.length === 0) return false;
    let valid = false;
    switch (status) {
        case "Created":
        case "Verified":
        case "Blocked":
        case "Deleted":
            valid = true;
            break;
    }
    return valid
}

module.exports = {
    validEmail,
    validPassword,
    validName,
    validId,
    validProductName,
    validFloat,
    validInt,
    validStatus
};
