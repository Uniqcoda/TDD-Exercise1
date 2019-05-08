function multiply() {
    var m = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return "all parameters must be numbers";
        } else {
            m *= arguments[i];  
        }
    }
    return m;
};

module.exports = multiply;