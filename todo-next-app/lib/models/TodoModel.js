const {default :mongoose} = require("mongoose");

const Schema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   isCompleted:{
    type:Boolean,
    default:false
   },

},{
  timeStamp:true
});

const TodoModel = mongoose.models.todo || mongoose.model('todo', Schema);

export default TodoModel;

// const mongoose = require("mongoose");

// const TodoSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   isCompleted: {
//     type: Boolean,
//     default: false,
//   },
// }, {
//   timestamps: true, // Correct property name
// });

// const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);

// module.exports = TodoModel;
