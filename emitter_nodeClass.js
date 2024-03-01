const EventEmitter = require('events');


class Person extends EventEmitter{
    constructor(firstName, lastName){
        super();
        this._firstname = firstName;
        this._lastname = lastName;
    }

    get fullname(){
        return "My full name is "+this._lastname + " " + this._firstname;
    }
}

let bolt = new Person('hunphery', 'ayi-bonte');
bolt.on('anything', () => {
    console.log(bolt.fullname);
});

bolt.emit('anything');