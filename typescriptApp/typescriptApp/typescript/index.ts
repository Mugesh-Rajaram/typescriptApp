//function getName(): void {
//    let name: string = 'Mugesh'
//    console.log(name)
//    alert(name)
//}
hgfh

class clsNew {
        strName: Object;
    //constructor() {
    //    //this.strName['name'] = 'Mugesh'

    //    //    age: '26',
    //    //        address: 'Namakkal'
    //    //};
    //}
    getName() {
        console.log(this.strName[0])
        alert(this.strName[1])
    }
}

function f(condition, x) {
    
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f(false, 0); // returns '0'
f(true, 0);  