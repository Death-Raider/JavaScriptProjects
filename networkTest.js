network = require("./network");

var lenList = 30; // Length of our list with sample transformations.
var testData = []; // test Inputs/Outputs
var trainIterations = 100;

console.log("Setting Test Data");
// Fill testData
for (let i = 0; i < lenList; i++) {
    var I = [];
    var O = [];
    for (let j = 0; j < lenList; j++) {
        I.push(0);
        O.push(0);
    }
    I[i] = 1;
    O[i - 1 < 0 ? lenList - 1 : i - 1] = 1;
    testData.push([I, O]);
}

console.log("Initializing Network");
// Set up Network with one hidden layer of the same size as the list length
net = new network.Network();
net.addLayer(lenList, lenList);
net.addLayer(lenList);

console.log("Beginning Training");
// Network Loop
var err; // Keeping track of error
var errs; // Storing errors for mse
for (let i = 0; i < trainIterations + 1; i++) {
    // Train
    if (i > 0) {
        net.train(testData, 0.3, 1000, 0);
    }
    // Test
    err = 0;
    for (let j = 0; j < lenList; j++) {
        input = testData[j][0];
        expOutput = testData[j][1];
        output = net.process(input);
        errs = [];
        for (let k = 0; k < lenList; k++) {
            errs.push(expOutput[k] - output[k]);
        }
        err += network.mse(errs);
    }
    console.log((i) + "\terr " + err.toFixed(8));
}