import React, { useContext, useEffect } from "react";
import PostContext from "../context/post/postContext";
import News from "../components/News";
import Layout from "../layout/Layout";

const ExchangeFinder = props => {
    const postContext = useContext(PostContext);

    const { getPosts, posts } = postContext;

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(posts);
    return (
        <Layout props={props}>
            <div className="container">
                <div className="row">
                    <h1>Blog</h1>
                    <News posts={posts} />
                </div>
            </div>
        </Layout>
    );
};

export default ExchangeFinder;
