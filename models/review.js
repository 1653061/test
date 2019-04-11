'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    type: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    addr: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    time: DataTypes.DATE,
    contact: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    interest: DataTypes.INTEGER,
    title_img: DataTypes.STRING,
    content_img: DataTypes.STRING,
    views: DataTypes.INTEGER,
    ranking: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.hasMany(models.Comment, {foreignKey: 'reviewid'});
    Review.belongsTo(models.User, {foreignKey: 'id'});
  };
  return Review;
};