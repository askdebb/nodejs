const EventEmitter = require('events');

class HouseTenants extends EventEmitter {
    constructor(tenantName, tenantDuration, tenantGender){
        super();
        this._tenantname = tenantName;
        this._tenantduration = tenantDuration;
        this._tenantgender = tenantGender;
    }

    get tenantDetails(){
        return this._tenantname + " has stayed for " + this._tenantduration + " months and is a "+ this._tenantgender +".";
    }

    get tenantDurationLeft(){
        const monthsLeft =  24 - parseInt(this._tenantduration);
        return `He has ${ monthsLeft } months left to leave or renew.`;
    }
}

const roomOne = new HouseTenants('Evans Amevor', 16, 'Male');
roomOne.on('tenant', () => {
    console.log(roomOne.tenantDetails);
});

roomOne.on('tenantDurationLeft', () => {
    console.log(roomOne.tenantDurationLeft);
});

roomOne.emit('tenant');
roomOne.emit('tenantDurationLeft');