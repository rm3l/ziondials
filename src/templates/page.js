import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/

const Page = ({ data, location }) => {
    const page = data.ghostPage

    return (
        <>
            <MetaData data={data} location={location} type="website" />
            <Helmet>
                <style type="text/css">{`${page.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <article className="post-full">
                    <header className="post-full-header">
                        <h1 className="post-full-title">{page.title}</h1>
                    </header>
                    <figure className="post-full-image">
                        {page.feature_image && <img src={page.feature_image} alt={page.title}></img>}
                    </figure>
                    <section dangerouslySetInnerHTML={{ __html: page.html }} />
                    <section className="post-full-content">
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: page.html }} />
                    </section>
                </article>
            </Layout>
        </>
    )
}

Page.propTypes = {
    data: PropTypes.shape({
        ghostPage: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
            codeinjection_styles: PropTypes.any,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
    }
`
