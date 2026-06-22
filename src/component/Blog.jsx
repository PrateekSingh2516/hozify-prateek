import "./Blog.css"
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

function Blog(){
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
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Commercial Real Estate"
            />

            <div className="featured-overlay">
              <span className="featured-badge">
                FEATURED STORY
              </span>

              <h2>
                Optimizing Commercial Real
                Estate for 2024
              </h2>

              <div className="featured-meta">
                <span>
                  <FaCalendarAlt />
                  June 16, 2025
                </span>

                <span>
                  <FaClock />
                  12 min read
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
      <button className="active">All Articles</button>
      <button>Maintenance</button>
      <button>Business Strategy</button>
      <button>Lifestyle</button>
      <button>Technology</button>
    </div>

    <div className="search-boxx">
      <input type="text" placeholder="Search insights..." />
    </div>

  </div>

  {/* Articles Grid */}

  <div className="articles-grid">

    {/* Card 1 */}
    <div className="article-card">
      <img
        src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=900"
        alt=""
      />

      <div className="article-body">
        <div className="article-meta">
          <span className="maintenance">MAINTENANCE</span>
          <span>5 min read</span>
        </div>

        <h3>
          Preventative Care: The ROI of Routine Property Audits
        </h3>

        <p>
          Discover how scheduled facility inspections can reduce
          long-term capital expenditure by up to 30%.
        </p>

        <div className="author-row">
          <div className="author-circle"></div>
          <div>
            <h5>Marcus Sterling</h5>
            <span>Head of Engineering</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="article-card">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
        alt=""
      />

      <div className="article-body">
        <div className="article-meta">
          <span className="business">BUSINESS</span>
          <span>8 min read</span>
        </div>

        <h3>
          The Micro-Service Economy: Future of Franchise Models
        </h3>

        <p>
          How decentralized service hubs are outperforming
          traditional large-scale enterprises.
        </p>

        <div className="author-row">
          <div className="author-circle green"></div>
          <div>
            <h5>Sarah Chen</h5>
            <span>Strategic Operations</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="article-card">
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
        alt=""
      />

      <div className="article-body">
        <div className="article-meta">
          <span className="lifestyle">LIFESTYLE</span>
          <span>4 min read</span>
        </div>

        <h3>
          The Psychology of Clean Spaces: Impact on Productivity
        </h3>

        <p>
          Exploring the link between cognitive load and
          environmental clutter. And yes it is right.
        </p>

        <div className="author-row">
          <div className="author-circle"></div>
          <div>
            <h5>Jameson Wu</h5>
            <span>Wellness Consultant</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="article-card">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
        alt=""
      />

      <div className="article-body">
        <div className="article-meta">
          <span className="technology">TECHNOLOGY</span>
          <span>10 min read</span>
        </div>

        <h3>
          AI in Facility Management: Beyond the Hype
        </h3>

        <p>
          A technical deep dive into predictive algorithms and
          equipment failure prevention.
        </p>

        <div className="author-row">
          <div className="author-circle"></div>
          <div>
            <h5>Tech Team</h5>
            <span>Engineering Div.</span>
          </div>
        </div>
      </div>
    </div>

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
        />

        <button>Subscribe Now</button>
      </div>

      <div className="newsletter-icon">
        ✉
      </div>

    </div>

  </div>

  {/* Pagination */}

  <div className="pagination">

    <button>‹</button>

    <button className="current">1</button>
    <button>2</button>
    <button>3</button>

    <span>...</span>

    <button>12</button>

    <button>›</button>

  </div>

</section>
    </>
  );
}

export default Blog;