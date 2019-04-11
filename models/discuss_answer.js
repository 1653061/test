'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discuss_answer = sequelize.define('Discuss_answer', {
    discussid: DataTypes.INTEGER,
    username: DataTypes.STRING,
    content: DataTypes.STRING,
    time: DataTypes.DATE
  }, {});
  Discuss_answer.associate = function(models) {
    // associations can be defined here
    Discuss_answer.belongsTo(models.Discuss, {foreignKey: 'id'});
  };
  return Discuss_answer;
};