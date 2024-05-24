class Person {
    constructor(name) {this.name = name}
    
    printNameUsingArrow() {
        setTimeout(() => {
            console.log(this);
            console.log("Arrow", this.name);
        }, 2000);
    }

    printNameUsingFunction() {
        setTimeout(function () {
            console.log(this);
            console.log("Function", this.name);
        }, 2000);
    }

}

let p = new Person("Piyush Bansal");
p.printNameUsingArrow();
p.printNameUsingFunction();
