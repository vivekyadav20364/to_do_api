const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userId:{ type: mongoose.Schema.Types.ObjectId, ref: "UserTask",require:true },
  title: {type:String,require:true},
  description: {type:String,require:true},
});

module.exports = mongoose.model("Task", taskSchema);
