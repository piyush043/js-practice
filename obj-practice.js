var fullname = "Piyush Bansal";
var obj = {
    fullname: "Hacked Full Name",
    prop: {
        fullname: "Inside Prop",
        getFullName: function() {
            return this.fullname;
        }
    },
    getFullName: function() {
        return this.fullname;
    },
    getFullNameV2: () => this.fullname,
    getFullNameV3: (function() {
        return fullname;
    })()
}
console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2());
// console.log(obj.getFullNameV3());xs
console.log(obj.getFullNameV3);
console.log();