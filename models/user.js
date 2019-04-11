'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    addr: DataTypes.STRING,
    profile_img: DataTypes.STRING,
    follow: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    dayofbirth: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Comment, {foreignKey: 'userid'});
    User.hasMany(models.Discuss, {foreignKey: 'userid'});
    User.hasMany(models.Review, {foreignKey: 'userid'});

  };
  return User;
};