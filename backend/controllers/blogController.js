const Blog = require('../model/blogModel');

// @desc   GET blogs
// @route   GET /api/blogs
// @access   public
const getBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });

  res.status(200).json(blogs);
};

// @desc   CREATE blogs
// @route   POST /api/blogs
// @access   public
const setBlogs = async (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) {
    res
      .status(400)
      .json({ message: 'Please add a blog title and a text field' });
  }
  const blog = await Blog.create({
    title,
    text,
  });

  res.status(200).json(blog);
};

// @desc   Get especific blog
// @route   GET /api/blogs/:id
// @access   public
const getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  res.status(200).json(blog);
};

// @desc   delete especific blog
// @route   DELETE /api/blogs/:id
// @access   public
const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400).json({ message: 'blog not found' });
  }

  await blog.deleteOne();
  res.status(200).json(req.params.id);
};

module.exports = {
  getBlogs,
  setBlogs,
  getBlog,
  deleteBlog,
};
