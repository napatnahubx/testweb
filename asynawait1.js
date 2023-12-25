function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
}
async function longRunningOperation(){
    return 42;
}
async function run(){
    console.log("Start");
     promiseTimeout(2000);
    const respones = longRunningOperation();
    console.log(respones);
    console.log("stop");
}
run();