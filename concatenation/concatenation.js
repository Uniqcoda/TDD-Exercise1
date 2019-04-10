// Takes two strings as arguments and return the concatenation of the two strings.
function concatenate(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return 'both parameters must be strings';
    } else {
        return str1.concat(str2);
    }
};
 module.exports = concatenate;