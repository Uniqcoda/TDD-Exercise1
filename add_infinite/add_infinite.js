function add() {
    var s = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
};

module.exports = add;