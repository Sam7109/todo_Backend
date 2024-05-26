const Todo = require("../model/toDomodel");
exports.createtodo = async (req, res) => {
  try {
    const { name, description, price , mobileNumber } = req.body;
    const todo = new Todo({ name, description, price , mobileNumber});
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.gettoDo = async (req,res) => {
  try {
    const todo = await Todo.find() 
    res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.deleteRecord = async (req,res)=>{
    try {
        const {recordId} =  req.params ;
     
       const recordInfo =  await Todo.findByIdAndDelete(recordId)
       if(!recordInfo){
        res.status(400).send('Record not found')
       }
        
        res.status(200).send('Record deleted successfully')
    }
    catch(error) {
        console.log(error)
        res.status(500).send("Server Errorr Encountered ")
    }
}


