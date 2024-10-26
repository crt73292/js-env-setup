// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();
    
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

{
    var myTestBlockVar = "My test block-scoped var";
    let myTestBlockLet = "My test block-scoped let";
    const myTestBlockConst = "My test block-scoped const";

    // myTestBlockVar = "New string for var"; // // cannot be reassigned within the same block
    // myTestBlockLet = "New string for let"; // can be reassigned but not redeclared within the same block
    // myTestBlockConst = "New string for const"; // cannot be reassigned or redeclared within the same block
}

myTestBlockVar = "New string for var";
myTestBlockLet = "New string for let";
myTestBlockConst = "New string for const";

console.log(myTestBlockVar);
console.log(myTestBlockLet);
console.log(myTestBlockConst);