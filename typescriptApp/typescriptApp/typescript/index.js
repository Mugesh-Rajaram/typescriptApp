var clsNew = (function () {
    function clsNew() {
    }
    clsNew.prototype.getName = function () {
        console.log(this.strName[0]);
        alert(this.strName[1]);
    };
    return clsNew;
}());
function f(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f(false, 0); // returns '0'
f(true, 0);
//# sourceMappingURL=index.js.map