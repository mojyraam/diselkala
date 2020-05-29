var Product = require('../../models/Disel')

exports.findall = (prod) => {
    Product.find({ productbranch: "a1a" }).exec(prod)
}