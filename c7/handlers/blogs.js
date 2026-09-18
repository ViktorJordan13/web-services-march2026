const blog = require("../pkg/blogs");

const {
    BlogPOST,
    BlogPUT,
    validate
} = require("../pkg/blogs/validate");

//Task
// Probajte da gi napisete hendlerite za CRUD funkciite za blog
const getAll = async(req, res) => {
    try{
        const data = await blog.getAll(req.auth.id);
        return res.status(200).send(data);
    }catch(err){
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};

const getOne = async(req, res) => {
    try{
        const data = await blog.getOne(req.auth.id, req.params.id);
        if(!data){
            return res.status(404).send("Blog not found!");
        }
        return res.status(200).send(data);
    }catch(err){
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};

const create = async(req, res) => {
    try{
        await validate(req.body, BlogPOST);
        if(!req.auth.id){
            return res.status(400).send("Unauthorized action!");
        }
        const data = {
            ...req.body,
            account_id: req.auth.id
        };
        const newBlog = await blog.create(data)
        return res.status(200).send(newBlog);
    }catch(err){
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};

const update = async(req, res) => {
    try{
        await validate(req.body, BlogPUT);
        if(!req.auth.id){
            return res.status(400).send("Unauthorized action!");
        }
        const data = {
            ...req.body,
            account_id: req.auth.id
        };
        //localhost:10000/api/v1/blog/:{req.params.id}
        await blog.update(req.params.id, data);
        return res.status(200).send("Update was successfull!");
    }catch(err){
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};

const remove = async(req, res) => {
    try{
        await blog.remove(req.params.id);
        return res.status(200).send("Succesfull deletion!");
    }catch(err){
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}