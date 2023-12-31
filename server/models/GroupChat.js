const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class GroupChat extends Model {}

GroupChat.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    groupName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creatorId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: "groupChat",
    tableName: "group_chats",
  }
);

module.exports = GroupChat;
