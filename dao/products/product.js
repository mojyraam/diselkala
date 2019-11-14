var Product = require('../../models/Product')

exports.findall = (prod) => {
    Product.find({}).exec(prod)
}

exports.findOne = (id, prod) => {
    Product.findOne({_id: id}).exec(prod)
}

exports.save = (data) => {
    var product = new Product({
        name: data[0],
        description: data[1],
        price: data[2]
    })
    product.save()
}

exports.edit = (id, prod) => {
    Product.findOne({_id: id}).exec(prod)
}

exports.update = (data) => {
    Product.findByIdAndUpdate({ _id: data[0] },
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
    Product.deleteOne({ _id: id }).exec()
}

