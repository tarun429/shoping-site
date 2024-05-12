const ProductModel = require('../models/product.model');

exports.createProduct = async (req, res) => {
    try {
        const {title,description,price,imgurl} = req.body; // Destructure values from req.body

        // Create new product
        let newProduct = new ProductModel({
            title,
            description,
            price,
            imgurl,
        });

        // Save new product to the database
        newProduct = await newProduct.save();

        // Send response
        res.status(201).json(newProduct);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Server Error' }); // Send appropriate error response
    }
};

exports.allproducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.status(200).json(products);
    }    catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const {title,description,price,imgurl} = req.body;
    let updatedProduct = new ProductModel({
        title,
        description,
        price,
        imgurl,
        _id: req.params.id,
    });
    updatedProduct = await ProductModel.findByIdAndupdate(req.params.
        id, updatedProduct);
        res.status(200).json(updatedproducts);
 } catch (err) {
    res.status(500).json({ error: 'Server Error' });
 }
}

exports.deleteProduct = async (req, res) => {
    try {
    await ProductModel.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });    
}
};

exports.singleProduct = async (req, res) => {
    try {
        const product = ProductModel.findbyId(req.params.id);

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}