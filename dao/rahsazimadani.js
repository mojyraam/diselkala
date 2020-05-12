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
        asbakdudohava: data[20]
    })
    disel.save()
}

exports.edit = (id, prod) => {
    Disel.findOne({_id: id}).exec(prod)
}

exports.update = (data) => {
    Disel.findByIdAndUpdate({ _id: data[0] },
        { $set: 
            {
                name: data[1],
                price: data[2],
                productbranch: data[3],
                description: data[4],
                blocksilandr: data[5],
                silandr: data[6],
                sarsilandr: data[7],
                millang: data[8],
                milsupap: data[9],
                bush: data[10],
                ring: data[11],
                yataghan: data[12],
                supap: data[13],
                seat: data[14],
                gate: data[15],
                waterpomp: data[16],
                oilpomp: data[17],
                washerkamel: data[18],
                washersarsilandr: data[19],
                washerkartel: data[20],
                asbakdudohava: data[21]
            }
        },
    { new: true }).exec()
}

exports.delete = (id) => {
    Disel.deleteOne({ _id: id }).exec()
}