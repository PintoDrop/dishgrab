const User = require("./user");
const Post = require("./post");
const Comment = require("./comment"); // changed Comments to Comment
const Reply = require("./reply");

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comment.hasMany(Reply, {
  foreignKey: "comment_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Reply.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post, Comment, Reply };
