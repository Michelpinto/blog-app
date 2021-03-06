const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title for the blog'],
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
