const Model = require("../Model/TodoList");

const GetDatas = async(req, res) => {
    try {
        const tasks = await Model.find();
        res.send(tasks);
    } catch (error) { console.log(error) }
};

const PostData = async (req, res) => {
    try {
        const task = await new Model(req.body).save();
        res.send(task);
    } catch (error) { console.log(error) }
};

const PutData = async(req, res) => {
    const id = req.params.id;
    try {
        const task = await Model.findByIdAndUpdate(id, req.body, { new: true })
    } catch (error) { console.log(error) }
};

const PatchData = async(req, res) => {
    const id = req.params.id;
    try {  } catch (error) { console.log(error) }
};

const DeleteData = async(req, res) => {
    const id = req.params.id;
    try {
        const task = Model.findByIdAndRemove(id);
        if(!task) return res.status(404).json({ success: false, message: 'Task cannot find' })
        res.status(200).json({ success: true, message: 'Task deleted successfully' })
    } catch (error) { console.log(error) };
};

module.exports = {
    PutData, 
    GetDatas, 
    PostData, 
    PatchData,
    DeleteData,
};