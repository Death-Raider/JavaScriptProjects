function rand(min = -0.2, max = 0.2) {
    return Math.random() * (max - min) + min // Random weight between -0.2 and 0.2;
}

function mse(errors) {
    var sum = 0;
    for (let i = 0; i < errors.length; i++) {
        sum += Math.pow(errors[i], 2);
    }
    return sum / errors.length;
}

function sum(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], 2);
    }
    return sum;
}

function sigmoid(x) {
    return 1 / (1 + Math.pow(Math.E, -x));
}

class Neuron {
    
    constructor(numberInputs) {
        this.weights = new Array(numberInputs);
        this.bias = rand();

        for (var i = 0; i < this.weights.length; i++) {
            this.weights[i] = rand();
        }
    }

    process(inputs) {
        this.lastInputs = inputs;

        var sum = 0;

        for (var i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
        }

        sum += this.bias;
        this.lastOutput = sigmoid(sum);
        return this.lastOutput;
    }
}

class Layer {

    constructor(numNeurons, numInputs) {
        this.neurons = new Array(numNeurons);

        for (var i = 0; i < this.neurons.length; i++) {
            this.neurons[i] = new Neuron(numInputs);
        }
    }

    process(inputs) {
        return this.neurons.map(function (neuron) {
            return neuron.process(inputs);
        });
    }
}

class Network {
    
    constructor() {
        this.layers = [];
    }

    process(inputs) {
        var outputs;

        for (let i = 0; i < this.layers.length; i++) {
            outputs = this.layers[i].process(inputs);
            inputs = outputs;
        }

        return outputs;
    }

    addLayer(numNeurons, numInputs) {
        if (numInputs == null) {
            var previousLayer = this.layers[this.layers.length - 1];
            numInputs = previousLayer.neurons.length;
        }
        var layer = new Layer(numNeurons, numInputs);
        this.layers.push(layer);
    }

    // Training with Back propagation algorithm
    train(examples, learningRate = 0.3, iterations = 100000, errThreshold = 0.00001) {

        var outputLayer = this.layers[this.layers.length - 1]; // We make the difference between the output layer and the hidden layer

        for (var itr = 0; itr < iterations; itr++) {
            for (var ex = 0; ex < examples.length; ex++) { // Train the neural network for every example.
                var targets = examples[ex][1];
                var inputs = examples[ex][0];

                var outputs = this.process(inputs);

                // Let's start training the output layer
                for (var i = 0; i < outputLayer.neurons.length; i++) {
                    // Let's calculate the error for every neurons of the output layer.
                    var neuron = outputLayer.neurons[i];
                    neuron.error = targets[i] - outputs[i];

                    // Let's calculate the delta for every neurons of the output layer.
                    neuron.delta = neuron.lastOutput * (1 - neuron.lastOutput) * neuron.error;

                    // Done for the output layer.

                }

                // Moving on the hidden layers !
                for (var l = this.layers.length - 2; l >= 0; l--) {

                    for (var i = 0; i < this.layers[l].neurons.length; i++) { // For every neurons in that layer

                        var neuron = this.layers[l].neurons[i];

                        // Let's calculate the error for the neuron
                        // To do so, we need the next layer of the network
                        neuron.error = sum(this.layers[l + 1].neurons.
                            map(function (n) { return n.weights[i] * n.delta }));

                        // We have computed the error, let's calculate the delta

                        neuron.delta = neuron.lastOutput * (1 - neuron.lastOutput) * neuron.error;

                        for (var m = 0; m < this.layers[l + 1].neurons.length; m++) { // For the neurons of the following layer
                            var nextNeur = this.layers[l + 1].neurons[m];

                            for (var w = 0; w < nextNeur.weights.length; w++) { // Update the weights
                                nextNeur.weights[w] += learningRate * nextNeur.lastInputs[w] * nextNeur.delta;
                            }

                            nextNeur.bias += learningRate * nextNeur.delta;

                        }

                        // Done !;
                    }

                }
            }

            var error = mse(outputLayer.neurons.map(function (n) { return n.error }));

            // Built in progress report
            /* if (itr % 10000 == 0) {
                console.log("Iteration : ", itr, " error : ", error);
            }*/

            if (error < errThreshold) {
                // console.log("Stopped at iteration n°", itr);
                return;
            }
        }
    }

    serialize() {
        return JSON.stringify(this);
    }

    deserialize(initialInput, serialstring) {
        var serialData = JSON.parse(serialstring);

        if (serialData) {
            this.layers.length = 0; // Empty any existing array

            // Initialize layers :
            this.addLayer(serialData.layers[0].neurons.length, initialInput);

            for (var l = 1; l < serialData.layers.length; l++) {
                this.addLayer(serialData.layers[l].neurons.length);
            }
            // Initialize neurons parameters for each neurons of each layers
            for (var i = 0; i < serialData.layers.length; i++) {
                for (var j = 0; j < serialData.layers[i].neurons.length; j++) {
                    this.layers[i].neurons[j].bias = serialData.layers[i].neurons[j].bias;
                    this.layers[i].neurons[j].error = serialData.layers[i].neurons[j].error;
                    this.layers[i].neurons[j].lastOutput = serialData.layers[i].neurons[j].lastOutput;
                    this.layers[i].neurons[j].delta = serialData.layers[i].neurons[j].delta;
                    // Take care of the weights
                    for (var w = 0; w < serialData.layers[i].neurons[j].weights.length; w++) {
                        this.layers[i].neurons[j].weights[w] = serialData.layers[i].neurons[j].weights[w];
                    }

                    // Take care of the lastInputs
                    this.layers[i].neurons[j].lastInputs = [];
                    for (var v = 0; v < serialData.layers[i].neurons[j].weights.length; v++) { // The neurons have never processed;
                        this.layers[i].neurons[j].lastInputs.push(serialData.layers[i].neurons[j].lastInputs[v]);
                    }
                    // Done !
                }
            }
        }
        else {
            return false;
        }

        // Initialize layers :
        // Initialize neurons for each layers
        // Initialize parameter for each neurons.
    }
}

module.exports = {
    Network: Network,
    rand: rand,
    mse: mse,
    sum: sum,
    sigmoid: sigmoid
}