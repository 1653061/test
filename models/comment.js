'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    reviewid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    time: DataTypes.DATE
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {foreignKey: 'id'});
    Comment.belongsTo(models.Review, {foreignKey: 'id'});
  };
  return Comment;
};