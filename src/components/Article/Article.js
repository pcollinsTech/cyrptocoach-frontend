import React, { useEffect, useContext } from "react";
import Layout from "../../layout/Layout";
import PostContext from "../../context/post/postContext";
import { Spinner } from "react-bootstrap";

const Article = props => {
    const postContext = useContext(PostContext);
    const { match } = props;
    const { getPost, post, loading } = postContext;
    useEffect(() => {
        getPost(match.params.slug);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log("Article post", post);
    // const { title, content, img_url, featured_img_url } = props.post;

    if (loading) {
        return (
            <Layout props={props}>
                <Spinner />
            </Layout>
        );
    }
    return (
        <Layout props={props}>
            <h1>Article</h1>
        </Layout>
    );
};

export default Article;
