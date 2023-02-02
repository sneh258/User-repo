const getFunction=require('./../services/service');

exports.getUsers=(req,res)=>{
    const users=getFunction.getUsers();
    res.status(200).json(users);

};

exports.postUser = async (req, res) => {
    
  
    const { userName } = req.body;
    const newUser = await getFunction.postTasks(userName);
    res.status(201).json(newUser);
};