import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/

const Post = ({ data, location }) => {
    const post = data.ghostPost

    return (
            <>
                <MetaData data={data} location={location} type="article" />
                <Helmet>
                    <style type="text/css">{`${post.codeinjection_styles}`}</style>
                </Helmet>
                <Layout>
                    <article className="post-full">
                        <header className="post-full-header">
                            <section className="post-full-meta">
                                <time className="post-full-meta-date" dateTime={post.published_at_pretty}>{post.published_at_pretty}</time>
                                { post.primary_tag && <span className="date-divider"> / </span> }
                                { post.primary_tag && <Link to={`/tag/` + post.primary_tag.slug}>{post.primary_tag.name}</Link>}
                            </section>
                            <h1 className="post-full-title">{post.title}</h1>
                        </header>
                        { post.feature_image ? <figure className="post-full-image"> <img src={ post.feature_image } alt={ post.title } /> </figure> : null }
                        <section className="post-full-content">
                            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} /> </section>
                    </article>
                </Layout>
            </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
            codeinjection_styles: PropTypes.any,
            published_at_pretty: PropTypes.string.isRequired,
            primary_tag: PropTypes.shape({
                name: PropTypes.string,
                slug: PropTypes.string,
            }),
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
