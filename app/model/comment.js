module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Comment = app.model.define('comment', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: INTEGER,
    houseId: INTEGER,
    msg: STRING(500),
    createTime: DATE
  });

  // 评论和用户是多对一
  // 一个用户可以发多条评论
  Comment.associate = () => {
    app.model.Comment.belongsTo(app.model.User, { foreignKey: 'userId' });
  }

  return Comment;
}