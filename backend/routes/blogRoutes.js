const express = require("express");
const router = express.Router();

const {
    getBlogs,
    getFeaturedBlogs,
    getCategoryBlogs,
    searchBlogs,
    subscribeNewsletter,
    createBlog,
} = require("../controllers/blogController");

// Get all blogs
router.get("/", getBlogs);

// Create blog
router.post("/", createBlog);

// Featured blogs
router.get("/featured", getFeaturedBlogs);

// Category blogs
router.get("/category/:category", getCategoryBlogs);

// Search blogs
router.get("/search", searchBlogs);

// Newsletter
router.post("/subscribe", subscribeNewsletter);

module.exports = router;