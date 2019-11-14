import React, { Fragment } from "react";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import ContactUs from "../components/ContactUs";
import Layout from "../layout/Layout";

const Index = props => {
    return (
        <Layout props={props}>
            <Banner />
            <Welcome />
            <ContactUs />
        </Layout>
    );
};

export default Index;
