//1.Promise 是一个 构造函数，既然是构造函数，那么，我们就可以 new Promise() 得到一个 Promise 的实例；
//2.在 Promise 上，有构造函数，分别叫做 resolve(成功之后的回调函数) 和 reject(失败之后的回调函数)
//3.在 Promise 构造函数的 Prototype 属性上，有一个 .then() 方法，也就是说，只要是 Promise 构造函数创建的实例，都可以访问到.then() 方法
//4.Promise 表示一个 异步操作；每当我们 new 一个 Promise 的实例，这个实例，就代表一个具体的异步操作;
//5.既然 Promise 创建的实例，是一个异步操作，那么这个异步操作的结果，只能有两个状态：
//  5.1 状态1: 异步执行成功了，需要在内部调用 成功的回调函数 resolve 把结果返回给调用者；
//  5.2 状态2：异步执行失败了，需要在内部调用 失败的回调函数 reject 把结果返回给调用者；
//  5.3 由于 Promise 的实例，是一个异步操作，所以，内部拿到操作结果后，无法使用 return 把操作的结果返回给调用者；这时候，只能使用回调函数
//      的形式，来把 成功 或 失败 的结果，返回给调用者；
//6.我们可以在 new 出来的 Promise 实例上，调用 .then() 方法 【预先】为这个 Promise 异步操作，指定成功(resolve) 和 失败(reject) 回调函数；


//注意：这里 new 出来的 promise，只是代表 【形式上】的一个异步操作；
//什么是形式上的异步操作：就是说，我们只知道它是一个异步操作，但是做什么具体的事情，目前并不清楚
/*var promise = new Promise();*/


//这是一个具体的异步操作，其中，使用 function 指定一个具体的异步操作
/*var promise =new Promise(function(){
    //这个function 内部写的就是具体的异步操作！！！
 });*/

const fs = require('fs');

//每当 new 一个 Promise 实例的时候，就会立即执行这个异步操作中的代码
/*也就是说，在 new 的时候，除了能够看到 一个 Promise 实例之外，还会立即调用 我们为 Promise 构造函数传递的那个 function，
  执行这个function中的 异步操作*/
/*var promise = new Promise(function(){
    fs.readFile('./files/2.txt','UTF-8',(err,dataStr)=>{
        if (err) throw err;
        console.log(dataStr);
    })
});*/

function getFileByPath (fpath){
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,'UTF-8',(err,dataStr)=>{

            if(err) return reject(err);
            resolve(dataStr);
        })
    });
}

getFileByPath('./files/2.txt')
    .then(function(data){
    console.log(data+'------')
},function(err){
   console.log(err.message)

});



















