const tutorial = require('./tutorial');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1+num2);
});



// console.log(tutorial);
// console.log(tutorial.sum(3,5));



eventEmitter.emit('tutorial',1,2);