var Transaction = require('../../models/Transaction')

exports.findall = (prod) => {
    Transaction.find({}).exec(prod)
}

exports.findOne = (id, prod) => {
    Transaction.findOne({_id: id}).exec(prod)
}

exports.save = (data) => {
    var product = new Transaction({
        name: data[0],
        description: data[1],
        price: data[2]
    })
    product.save()
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