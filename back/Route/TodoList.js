const express = require("express");
const router = express.Router();

const {
    PutData,
    GetDatas, 
    PostData,
    PatchData,
    DeleteData,
} = require("../Controller/TodoList");

router
    .route("/")
    .get(GetDatas)
    .post(PostData);

router
    .route('id')
    .put(PutData)
    .patch(PatchData)
    .delete(DeleteData);

module.exports = router;