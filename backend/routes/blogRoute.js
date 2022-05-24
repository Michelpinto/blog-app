const express = require('express');
const router = express.Router();

const {
  getBlogs,
  setBlogs,
  getBlog,
  deleteBlog,
} = require('../controllers/blogController');

router.route('/').get(getBlogs).post(setBlogs);
router.route('/:id').get(getBlog).delete(deleteBlog);

// router.get('/', getBlogs);
// router.post('/', setBlogs);
// router.get('/:id', getBlog);
// router.delete('/:id', deleteBlog);

module.exports = router;
