const {findUserService} = require('../services/users');

const login = async (req, res) =>{
  try {
  const {username = '', password = ''} = req.body;
  const result = await findUserService(username, password);
  res.status(result.status).json({message: result.message});
  
  } catch (error) {
    
  }
};

module.exports = {login,}
