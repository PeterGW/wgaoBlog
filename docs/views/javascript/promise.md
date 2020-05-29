# promise

``` js
console.log(1);

async function Async1() {
    await Async2()
    console.log('async1-end');
}

async function Async2() {
    console.log('async2-end')
}

Async1() 

new Promise(resolve => {
    console.log(2)
    resolve()
}).then(function() {
    console.log(3)
    new Promise(resolve => {
        console.log(4);
        resolve();
    }).then(function(){
        console.log(5);
    })
}).then(function() {
    console.log(6)
})

Promise.resolve().then(()=>{
    console.log(7);
});

setTimeout(() => {
    console.log(8);
    Promise.resolve().then(()=>{
        console.log(9);
    });
},0);

console.log(10);
```