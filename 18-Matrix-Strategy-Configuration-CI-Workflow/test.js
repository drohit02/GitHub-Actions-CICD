
const node_version = process.env.NODE_VERSION;

const sleepTime = ms => new Promise(resolve => setTimeout(resolve, ms));

console.log(`Node JS App Test Suite Started with Node Version: ${node_version}!!`);

(async () => {
    await sleepTime(2400);
    console.log(`Node JS App Test Suite Running with Node Version: ${node_version}`);
})();

(async () => {
    await sleepTime(2400);
    console.log(`Node JS App Test Suite Completed Successfully for Node Version: ${node_version}`);
})();
