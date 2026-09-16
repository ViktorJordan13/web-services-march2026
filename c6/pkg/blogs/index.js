const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    // _id vi e auto generirano pri kreiranje nov zapis
    title: String,
    content: String,
    account_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "accounts"
    },
});

const Blog = mongoose.model("blogs", blogSchema, "blogs");

//CRUD

const getAll = async(account_id) => {
    return await Blog.find({ account_id });
};

const getOne = async(account_id, id) => {
    return await Blog.findOne({ account_id: account_id, _id: id });
};

const create  = async(data) => {
    const blog = new Blog(data);
    return await blog.save();
};

const update = async(id, data) => {
    return await Blog.updateOne( { _id: id}, data );
};

const remove = async(id) => {
    return await Blog.deleteOne( { _id: id });
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}