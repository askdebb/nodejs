const EventEmitter = require('events');

class Classroom extends EventEmitter{
    constructor(className, classSize){
        super();
        this._classname = className;
        this._classsize = classSize;
    }

    get classDetails(){
        return this._classname + " " + this._classsize;
    }
    get learnersInClass(){
        return "Learner in class and its daytime";
    }
}

let schClass = new Classroom('Basic 9A,', '34');
schClass.on("classInfo", () => {
    console.log("Class Details: "+ schClass.classDetails + " as class name and size");
});

schClass.emit('classInfo');

schClass.on('learnersInClass', () => {
    console.log(schClass.learnersInClass);
});

schClass.emit('learnersInClass');

