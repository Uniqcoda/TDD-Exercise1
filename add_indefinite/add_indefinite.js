function add() {
    var s = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return 'NaN';
        } else {
            s += arguments[i];
        }
    }
    return s;
};

module.exports = add;
