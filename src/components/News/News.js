import React from "react";

const News = ({ posts }) => {
    const postsData = posts.map((post, index) => (
        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
            <div className="single-blog-post">
                <div className="post-thumbnail">
                    {/* <a href={post.image_url}>
                        <img src={post.image_url} alt="blog-img" />
                    </a> */}
                </div>

                <div className="post-content">
                    <h3>
                        <a href={`blog/${post.slug}`}>{post.title}</a>
                    </h3>
                    <a href={`blog/${post.slug}`} className="read-more">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    ));
    return (
        <React.Fragment>
            <section id="blog" className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>News Section</h2>
                        <p>See our Latest Posts</p>
                    </div>

                    <div className="row">{postsData}</div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default News;
