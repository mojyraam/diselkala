var Transaction = require('../../models/Transaction')

exports.findall = (prod) => {
    Transaction.find({}).exec(prod)
}

exports.findOne = (id, prod) => {
    Transaction.findOne({_id: id}).exec(prod)
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
        productcode: data[21],
        imagea: data[22],
        imageb: data[23],
        imagec: data[24],
        imaged: data[25],
        imagee: data[26]
    })
    disel.save()
}

exports.edit = (id, prod) => {
    Transaction.findOne({_id: id}).exec(prod)
}

exports.update = (data) => {
    Transaction.findByIdAndUpdate({ _id: data[0] },
        { $set: 
            { 
                name: data[1], 
                description: data[2], 
                price: data[3]
            }
        },
    { new: true }).exec()
}

exports.delete = (id) => {
    Transaction.deleteOne({ _id: id }).exec()
}