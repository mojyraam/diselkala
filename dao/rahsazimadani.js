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
        productbranch: data[1],
        description: data[2],
        blocksilandr: data[3],
        silandr: data[4],
        sarsilandr: data[5],
        millang: data[6],
        milsupap: data[7],
        bush: data[8],
        ring: data[9],
        yataghan: data[10],
        supap: data[11],
        seat: data[12],
        gate: data[13],
        waterpomp: data[14],
        oilpomp: data[15],
        washerkamel: data[16],
        washersarsilandr: data[17],
        washerkartel: data[18],
        asbakdudohava: data[19],
        productcode: data[20],
        imagea: data[21],
        imageb: data[22],
        imagec: data[23],
        imaged: data[24],
        imagee: data[25]
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
                productcode: data[21],
                imagea: data[22],
                imageb: data[23],
                imagec: data[24],
                imaged: data[25],
                imagee: data[26]
            }
        },
    { new: true }).exec()
}

exports.delete = (id) => {
    Disel.deleteOne({ _id: id }).exec()
}