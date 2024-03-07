const joi = require('joi');

const arrayString = ['bababa', 'apple', 'watermelon'];
const arrayObjects = [
    {
        teacher: 'evans'
    },
    {
        teacher: 'zagidi'
    },
    {
        teacher: 'hornam'
    },
]

const userInput = {
    personalInfo: {
        streetAddress: 'santoe street ave',
        gpsPost: 'GD-212-8009'
    },
    foodPreference: arrayString,
    jobPreference: arrayObjects
}

const personalInfoSchema = joi.object().keys({
    streetAddress : joi.string().trim().required(),
    gpsPost: joi.string().trim().required()
});

const foodPreferenceSchema = joi.array().items(joi.string());

const arrayObjectsSchema = joi.array().items(joi.object().keys({
    teacher: joi.string().required()
}));





const schema = joi.object().keys({
    personalInfo: personalInfoSchema, 
    foodPreference: foodPreferenceSchema,
    jobPreference: arrayObjectsSchema
    
});

const validating = schema.validate(userInput);
console.log(validating);