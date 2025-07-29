// module is a module
// bunch of module is a package
// we export a function by syntax


function Add(a,b) {
    return a + b;
}

function Sub(a,b) {
    return a - b;
}

module.exports = { Add, Sub};
