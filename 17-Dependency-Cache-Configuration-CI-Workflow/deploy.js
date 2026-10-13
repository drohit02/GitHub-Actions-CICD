const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Node JS App Deployment Started");

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS App Deployment is Running");
})();

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS Deployment Completed");
})();