var Transaction = require('../../models/Transaction')

exports.findAll = (data, prod) => {
    Transaction.find({ 
        email: data
    }).exec(prod)
}

exports.findAllAdmin = (prod) => {
    Transaction.find({}).exec(prod)
}

exports.findOne = (id, prod) => {
    Transaction.findOne({_id: id}).exec(prod)
}

exports.save = (data) => {
    var transaction = new Transaction({
        name: data[0],
        totalprice: data[1],
        blocksilandr: data[2],
        silandr: data[3],
        sarsilandr: data[4],
        millang: data[5],
        milsupap: data[6],
        bush: data[7],
        ring: data[8],
        yataghan: data[9],
        supap: data[10],
        seat: data[11],
        gate: data[12],
        waterpomp: data[13],
        oilpomp: data[14],
        washerkamel: data[15],
        washersarsilandr: data[16],
        washerkartel: data[17],
        asbakdudohava: data[18],
        productcode: data[19],
        description: data[20],
        username: data[21],
        address: data[22],
        fname: data[23],
        family: data[24],
        email: data[25],
        phone: data[26],
        tid: data[27],
        tdate: data[28]
    })
    transaction.save()
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