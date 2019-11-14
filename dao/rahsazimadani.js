var Disel = require('../models/Disel')

exports.findAll = (prod) => {
    Disel.find({}).exec(prod)
}

exports.findOne = (id, prod) => {
    Disel.findOne({_id: id}).exec(prod)
}

exports.save = (data) => {
    var disel = new Disel({
        name: data[0],
        price: data[1],
        productbranch: data[2],
        description: data[3],
        blocksilandr: data[4],
        silandr: data[5],
        sarsilandr: data[6],
        millang: data[7],
        milsupap: data[8],
        bush: data[9],
        ring: data[10],
        yataghan: data[11],
        supap: data[12],
        seat: data[13],
        gate: data[14],
        waterpomp: data[15],
        oilpomp: data[16],
        washerkamel: data[17],
        washersarsilandr: data[18],
        washerkartel: data[19],
        asbakdudohava: data[20],
    })
    disel.save()
}