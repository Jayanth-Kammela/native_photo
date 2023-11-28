const Product = require("../models/product");
const cloudinary = require('../utils/cloudinary');



const createProduct = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        const user_id = req.user._id.toString();
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "products"
        });
        
        const product = await Product.create({
            title,
            description,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            user_id
        });

        res.status(201).json({
            success: true,
            product
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
};


const getUserProduct = async (req, res, next) => {

    const user_id = req.user._id.toString();

    try {
        const data = await Product.find({ user_id });
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

const getUserProductById = async (req, res, next) => {
    const { id } = req.params

    try {
        const users = await Product.findById({ _id: id });
        return res.status(200).json(users)
    } catch (error) {
        console.log(error);
    }
}


const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const currentProduct = await Product.findById(req.params.id);

        const data = {
            title: req.body.title,
            description: req.body.description,

        }

        if (req.body.image !== '') {
            const ImgId = currentProduct.image.public_id;
            if (ImgId) {
                await cloudinary.uploader.destroy(ImgId);
            }

            const newImage = await cloudinary.uploader.upload(req.body.image);

            data.image = {
                public_id: newImage.public_id,
                url: newImage.secure_url
            }
        }

        const productUpdate = await Product.findOneAndUpdate(id, data, { new: true })

        res.status(200).json({
            success: true,
            productUpdate
        })


    } catch (error) {
        console.log(error);
        next(error);
    }

}



const deleteProduct = async (req, res, next) => {

    try {
        const product = await Product.findById(req.params.id);
        const imgId = product.image.public_id;
        if (imgId) {
            await cloudinary.uploader.destroy(imgId);
        }

        const rmProduct = await Product.findByIdAndDelete(req.params.id);

        res.status(201).json({
            success: true,
            message: " Product deleted",

        })

    } catch (error) {
        console.log(error);
        next(error);

    }

}


module.exports = { getUserProductById, createProduct, updateProduct, deleteProduct, getUserProduct }



