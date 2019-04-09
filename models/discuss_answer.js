'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discuss_answer = sequelize.define('Discuss_answer', {
    userid: DataTypes.INTEGER,
    content: DataTypes.STRING,
    time: DataTypes.DATE
  }, {});
  Discuss_answer.associate = function(models) {
    // associations can be defined here
    Discuss_answer.belongsTo(models.User);
    Discuss_answer.belongsTo(models.Discuss);
  };
  return Discuss_answer;
};