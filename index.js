
 function receivesAFunction(callback){
     return callback();
}


 function returnsANamedFunction(){
    return function bark() {
        return "woof-woof";
 }
}

function returnsAnAnonymousFunction() {
    return function() {
        return "woof-woof";
}
}