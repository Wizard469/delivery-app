const { User } = require('../database/models');

const createNewUser = async (newUser) => {
  const { id, name, email, password } = newUser; 
  const verifyName = await User.findOne({ where: { name } });
  const verifyEmail = await User.findOne({ where: { email } });

  if( verifyEmail | verifyName ) {
    console.log('deu erro');
  }
  const createUser = await User.create({ id, name, email, password });

};

module.exports = {
  createNewUser,
};