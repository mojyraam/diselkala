var mongoose = require('mongoose')

var TransactionSchema = new mongoose.Schema({
  name: String,
  paymenttype: Number,
  description: String,
  price: Number,
  blocksilandr: String,
  silandr: String,
  sarsilandr: String,
  millang: String,
  milsupap: String,
  bush: String,
  ring: String,
  yataghan: String,
  supap: String,
  seat: String,
  gate: String,
  waterpomp: String,
  oilpomp: String,
  washerkamel: String,
  washersarsilandr: String,
  washerkartel: String,
  asbakdudohava: String,
  productcode: String,
  imagea: String,
  imageb: String,
  imagec: String,
  imaged: String,
  imagee: String,
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
  updated_at: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Transaction', TransactionSchema)