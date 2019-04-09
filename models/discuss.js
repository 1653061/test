'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discuss = sequelize.define('Discuss', {
    userid: DataTypes.INTEGER,
    time: DataTypes.DATE,
    iteration: DataTypes.INTEGER,
    content: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Discuss.associate = function(models) {
    // associations can be defined here
    Discuss.belongsTo(models.User);
    Discuss.hasMany(models.Discuss_answer);
  };
  return Discuss;
};