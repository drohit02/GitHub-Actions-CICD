const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Node JS App Build Started");

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS App Build is Running");
})();

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS Build Completed");
})();