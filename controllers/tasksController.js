const Task=require("../models/tasksModel");
const fetchTasks = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const userId = req.user.id;

    if (!userId) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    const tasks = await Task.find({ userId })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalTasks = await Task.countDocuments({ userId });

    res.status(200).json({
      success: true,
      tasks,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalTasks / limit),
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tasks",
      error: error.message,
    });
  }
};


const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized: User not found",
        success: false
      });
    }

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required",
        success: false
      });
    }

    const newTask = new Task({
      userId,
      title,
      description,
      status: "pending"
    });

    await newTask.save();

    res.status(201).json({
      message: "Task created successfully",
      success: true,
      task: newTask,
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({
      message: "Failed to create task",
      success: false,
      error: error.message,
    });
  }
};


const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Task ID is required",
        success: false
      });
    }

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
        success: false
      });
    }

    await Task.findByIdAndDelete(id);

    res.status(200).json({
      message: "Task deleted successfully",
      success: true
    });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({
      message: "An error occurred while deleting the task",
      success: false,
      error: error.message
    });
  }
};


const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "Task ID is required.",
        success: false
      });
    }

    if (!title || !description) {
      return res.status(400).json({
        message: "Both title and description are required.",
        success: false
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { $set: { title, description } },
      { new: true, runValidators: true } 
    );

    // Check if task exists
    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found.",
        success: false
      });
    }

    // Successfully updated
    return res.status(200).json({
      message: "Task updated successfully.",
      success: true,
      task: updatedTask
    });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({
      message: "An error occurred while updating the task.",
      success: false,
      error: error.message
    });
  }
};


const taskById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Task ID is required.",
        success: false
      });
    }

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found.",
        success: false
      });
    }

    return res.status(200).json({
      message: "Task retrieved successfully.",
      success: true,
      task
    });
  } catch (error) {
    console.error("Error fetching task by ID:", error);

    return res.status(500).json({
      message: "An error occurred while fetching the task.",
      success: false,
      error: error.message
    });
  }
};



module.exports={fetchTasks,createTask,deleteTask,updateTask,taskById}