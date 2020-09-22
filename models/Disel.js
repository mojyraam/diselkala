var mongoose = require('mongoose')

var DiselSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    productbranch: {
        type: String,
        required: true
    },
    producttype: {
        type: Number,
        default: 1
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    blocksilandr: {
        type: String
    },
    silandr: {
        type: String
    },
    sarsilandr: {
        type: String
    },
    millang: {
        type: String
    },
    milsupap: {
        type: String
    },
    bush: {
        type: String
    },
    ring: {
        type: String
    },
    yataghan: {
        type: String
    },
    supap: {
        type: String
    },
    seat: {
        type: String
    },
    gate: {
        type: String
    },
    waterpomp: {
        type: String
    },
    oilpomp: {
        type: String
    },
    washerkamel: {
        type: String
    },
    washersarsilandr: {
        type: String
    },
    washerkartel: {
        type: String
    },
    asbakdudohava: {
        type: String
    },
    productcode: {
        type: String
    },
    imagea: {
        type: String
    },
    imageb: {
        type: String
    },
    imagec: {
        type: String
    },
    imaged: {
        type: String
    },
    imagee: {
        type: String
    }
})


module.exports = mongoose.model('Disel', DiselSchema)