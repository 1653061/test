'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discuss = sequelize.define('Discuss', {
    userid: DataTypes.INTEGER,
    username: DataTypes.STRING,
    time: DataTypes.DATE,
    iteration: DataTypes.INTEGER,
    content: DataTypes.STRING,
    detail: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    numberAnswer: DataTypes.INTEGER
  }, {});
  Discuss.associate = function(models) {
    // associations can be defined here
    Discuss.belongsTo(models.User, {foreignKey: 'id'});
    Discuss.hasMany(models.Discuss_answer, {foreignKey: 'discussid'});
  };
  return Discuss;
};