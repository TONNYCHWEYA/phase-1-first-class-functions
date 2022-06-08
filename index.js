function receivesAFunction(callback){
  return callback()

}
function returnsANamedFunction(){
  return function tonny(){}
}
function returnsAnAnonymousFunction(){
  return (function () {})
}