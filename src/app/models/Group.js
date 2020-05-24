import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

// Here is the model, where we set what the user/client must to send by body request
class  Group extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        mensage:Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    /* his addHook is literally a hook that we pass a parameter to when we want
    to perform an action before saving or after saving
    */
    
    // This return will bring the model that is running
    return this;
  }

  static associate(models) { 
    this.belongsTo(models.Discipline, { foreignKey: 'discipline_id', as: 'discipline' });
    this.belongsToMany(models.User, {
      through: models.UserGroup,
      foreignKey: 'group_id', as: 'group'
    });
  }
  // this is where we do the relations datas like one-to-one one-to-many many-to-many
 
}

export default Group;
