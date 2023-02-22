function receivesAFunction (callback) {
    return callback();
  }
  
function returnsANamedFunction() {
    return function receivesAFunction(name) {
        return name
    }
}

function returnsAnAnonymousFunction() {
    return function(name2) {
        return name2
    }
}