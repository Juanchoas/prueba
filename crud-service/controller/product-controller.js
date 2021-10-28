import Product from '../model/product.js';

export const getProducts = async (request, response) => {
    
    try{
        
        const products = await Product.find();
        response.status(200).json(products);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const addProduct = async (request, response) => {
    
    const product = request.body;
    console.log("inside")

    const newProduct = new Product(product);
    try{
        await newProduct.save();
        response.status(201).json(newProduct);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


export const getProductById = async (request, response) => {
    try{
        const product = await Product.findById(request.params.id);
        response.status(200).json(product);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const editProduct = async (request, response) => {
    let product = await Product.findById(request.params.id);
    product= request.body;

    const editProduct = new Product(product);
    try{
        await Product.updateOne({_id: request.params.id}, editProduct);
        response.status(201).json(editProduct);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const deleteProduct = async (request, response) => {
    try{
        await Product.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}