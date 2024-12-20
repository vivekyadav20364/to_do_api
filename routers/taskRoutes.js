const express=require("express");
const { protect } = require("../middleware/authMiddleware");
const { fetchTasks, createTask, deleteTask, updateTask, taskById } = require("../controllers/tasksController");
const router=express.Router();

router.route("/").get(protect,fetchTasks);
router.route("/").post(protect,createTask);
router.route("/:id").delete(protect,deleteTask);
router.route("/:id").put(protect,updateTask);

router.route("/task-by-id/:id").get(protect,taskById);

module.exports=router;



