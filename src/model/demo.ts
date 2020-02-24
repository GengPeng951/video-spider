import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/mysql";

class Demo extends Model {
  public id!: number;
  public name!: string;
}

Demo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(25),
      allowNull: false
    }
  },
  {
    tableName: "tableName",
    timestamps: false,
    modelName: "modelName",
    sequelize: sequelize // this bit is important
  }
);

// name.belongsTo(User, { as: 'user', foreignKey: 'id' })
// User.hasMany(name, { as: 'project', foreignKey: 'id' })

export default name;
