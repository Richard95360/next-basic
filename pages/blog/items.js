import React from "react";
import Layout from "../../components/layout";
import Head from 'next/head';

const Items = (props) => {
    return (
        <>
        <Head>
            <title>liste des items</title>
        </Head>
        <Layout>

            <h1>Items</h1>
            <ul>
                <h2>Liste des Categories</h2>
                <li>Culture</li>
                <li>Geographie</li>
                <li>Social</li>
                <li>Economique</li>
            </ul>
        </Layout>
        </>
    )
}


export default Items;