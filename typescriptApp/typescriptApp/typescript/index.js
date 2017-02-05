<<<<<<< HEAD
var clsNew = (function () {
    function clsNew() {
    }
    //constructor() {
    //    //this.strName['name'] = 'Mugesh'
    //    //    age: '26',
    //    //        address: 'Namakkal'
    //    //};
    //}
=======
//function getName(): void {
//    let name: string = 'Mugesh'
//    console.log(name)
//    alert(name)
//}
var clsNew = (function () {
    function clsNew() {
    }
>>>>>>> refs/remotes/origin/NewBranch
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