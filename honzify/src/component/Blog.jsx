import "./Blog.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

function Blog(){
const [blogs, setBlogs] = useState([]);
const [featuredBlog, setFeaturedBlog] = useState(null);
const [loading, setLoading] = useState(true);
const [selectedCategory, setSelectedCategory] = useState("All");
const [searchKeyword, setSearchKeyword] = useState("");
const [newsletterEmail, setNewsletterEmail] = useState("");
const [newsletterMessage, setNewsletterMessage] = useState("");

useEffect(() => {
  fetchBlogs();
}, []);

const fetchBlogs = async () => {
  try {
    const res = await axios.get("https://hozify-backend.onrender.com/api/blog");

    setBlogs(res.data.blogs);

    const featured = res.data.blogs.find(blog => blog.featured);

    if (featured) {
      setFeaturedBlog(featured);
    }

  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

const handleSearch = async (keyword) => {

  setSearchKeyword(keyword);

  if (keyword.trim() === "") {
    fetchBlogs();
    return;
  }

  try {

    const res = await axios.get(
      `https://hozify-backend.onrender.com/api/blog/search?keyword=${keyword}`
    );

    setBlogs(res.data.blogs);

  } catch (err) {

    console.log(err);

  }

};

const handleNewsletter = async () => {

  if (!newsletterEmail.trim()) {
    setNewsletterMessage("Please enter your email.");
    return;
  }

  try {

    const res = await axios.post(
      "https://hozify-backend.onrender.com/api/blog/subscribe",
      {
        email: newsletterEmail
      }
    );

    setNewsletterMessage(res.data.message);

    setNewsletterEmail("");

  } catch (err) {

    if (
      err.response &&
      err.response.data &&
      err.response.data.message
    ) {

      setNewsletterMessage(err.response.data.message);

    } else {

      setNewsletterMessage("Something went wrong.");

    }

  }

};


if (loading) {
  return (
    <div className="page-loader">
      <div className="loader-spinner"></div>
      <h2>Loading Blogs...</h2>
    </div>
  );
}
const filteredBlogs = blogs.filter((blog) => {

  const matchesCategory =
    selectedCategory === "All" ||
    blog.category === selectedCategory;

  const matchesSearch =
    blog.title.toLowerCase().includes(searchKeyword.toLowerCase());

  return matchesCategory && matchesSearch;

});
  return(
    <>
    <section className="blog-hero">
      <div className="blog-container">

        {/* Header */}
        <div className="blog-header">
          <h1>Knowledge Center</h1>

          <p>
            Insights, guides, and professional advice on property
            maintenance, business growth, and modern living.
          </p>
        </div>

        {/* Content Grid */}
        <div className="blog-grid">

          {/* Featured Article */}
          <div className="featured-post">
           <img
src={featuredBlog?.image}
alt={featuredBlog?.title}
/>

            <div className="featured-overlay">
              <span className="featured-badge">
                FEATURED STORY
              </span>

              <h2>
                {featuredBlog?.title}
              </h2>

              <div className="featured-meta">
                <span>
                  <FaCalendarAlt />
                  {new Date(featuredBlog?.createdAt).toLocaleDateString()}
                </span>

                <span>
                  <FaClock />
                  {featuredBlog?.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="side-posts">

            <div className="webinar-card">
              <span className="card-tag">
                KNOWLEDGE DROPS
              </span>

              <h3>
                Weekly Service
                Efficiency Masterclass
              </h3>

              <button>
                Register for Webinar
                <FaArrowRight />
              </button>
            </div>

            <div className="insight-card">
              <span className="card-tag blue">
                BUSINESS INSIGHTS
              </span>

              <h3>
                Scaling Your Franchise
                with Hozify Tech
              </h3>

              <div className="author">
                <div className="author-avatar"></div>

                <span>
                  By Dr. Elena Vance
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    {/* ==========================
    Blog Categories + Search
========================== */}

<section className="blog-content">

  <div className="blog-filter-bar">

   <div className="category-tabs">

  <button
    className={selectedCategory === "All" ? "active" : ""}
    onClick={() => {
  setSelectedCategory("All");
  fetchBlogs();
}}
  >
    All Articles
  </button>

  <button
    className={selectedCategory === "Maintenance" ? "active" : ""}
    onClick={async () => {

  setSelectedCategory("Maintenance");

  const res = await axios.get(
    "https://hozify-backend.onrender.com/api/blog/category/Maintenance"
  );

  setBlogs(res.data.blogs);

}}
  >
    Maintenance
  </button>

  <button
    className={selectedCategory === "Business" ? "active" : ""}
    onClick={async () => {

  setSelectedCategory("Business");

  const res = await axios.get(
    "https://hozify-backend.onrender.com/api/blog/category/Business"
  );

  setBlogs(res.data.blogs);

}}
  >
    Business
  </button>

  <button
    className={selectedCategory === "Lifestyle" ? "active" : ""}
    onClick={async () => {

  setSelectedCategory("Lifestyle");

  const res = await axios.get(
    "https://hozify-backend.onrender.com/api/blog/category/Lifestyle"
  );

  setBlogs(res.data.blogs);

}}
  >
    Lifestyle
  </button>

  <button
    className={selectedCategory === "Technology" ? "active" : ""}
    onClick={async () => {

  setSelectedCategory("Technology");

  const res = await axios.get(
    "https://hozify-backend.onrender.com/api/blog/category/Technology"
  );

  setBlogs(res.data.blogs);

}}
  >
    Technology
  </button>

</div>


  </div>

  {/* Articles Grid */}

  <div className="articles-grid">

  {filteredBlogs
    .filter((blog) => blog._id !== featuredBlog?._id)
    .map((blog) => (

      <div className="article-card" key={blog._id}>

        <img
          src={blog.image}
          alt={blog.title}
        />

        <div className="article-body">

          <div className="article-meta">
            <span className={blog.category.toLowerCase()}>
              {blog.category.toUpperCase()}
            </span>

            <span>{blog.readTime}</span>
          </div>

          <h3>{blog.title}</h3>

          <p>{blog.description}</p>

          <div className="author-row">

            <div className="author-circle">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div>
              <h5>{blog.author.name}</h5>
              <span>{blog.author.designation}</span>
            </div>

          </div>

        </div>

      </div>

    ))}

  {/* Newsletter Card */}

  <div className="newsletter-card">

    <h2>Stay Ahead of the Curve</h2>

    <p>
      Get our curated monthly newsletter featuring industry
      trends, expert interviews, and service optimization tips.
    </p>

    <div className="newsletter-form">

  <input
    type="email"
    placeholder="Enter your work email"
    value={newsletterEmail}
    onChange={(e)=>
      setNewsletterEmail(e.target.value)
    }
  />

  <button
    onClick={handleNewsletter}
  >
    Subscribe Now
  </button>

</div>

{newsletterMessage && (

<p
style={{
marginTop:"15px",
color:"#1451d8",
fontWeight:"600",
textAlign:"center"
}}
>

{newsletterMessage}

</p>

)}
    

    <div className="newsletter-icon">
      ✉
    </div>

  </div>

</div>


</section>
    </>
  );
}

export default Blog;