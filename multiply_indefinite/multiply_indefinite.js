function multiply() {
    var m = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
            m *= arguments[i];
    }
    return m;
};

module.exports = multiply;