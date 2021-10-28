import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';


const productSchema = mongoose.Schema({
    productname: String,
    price: Number,
    amount: Number,
    status: String
});

autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, 'product');

const postProduct = mongoose.model('product', productSchema);

export default postProduct;