import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    const [tooltipVisibility, toggleTooltipVisibility] = useState(false)

    return (

        <article className="post-card post">
            <Link to={url} className="post-card-image-link">
                {post.feature_image && <img className="post-card-image" style={{ backgroundImage: `url(${post.feature_image})` }}></img>}
            </Link>
            <div className="post-card-content">
                <Link to={url} className="post-card-content-link">
                    <header className="post-card-header">
                        {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                        <h2 className="post-card-title">{post.title}</h2>
                    </header>
                    <section className="post-card-excerpt">
                        <p>{post.excerpt}</p>
                    </section>
                </Link>
            </div>
            <footer className="post-card-meta">
                <ul className="author-list">
                    <li className="author-list-item">
                        <div className={(tooltipVisibility) ? `author-name-tooltip` : `author-name-tooltip-hidden` } >
                            { post.primary_author.name }
                        </div>
                    </li>
                    <Link to={`/author/` + post.primary_author.slug }className="static-avatar" onMouseEnter={() => toggleTooltipVisibility(!tooltipVisibility)} onMouseLeave={() => toggleTooltipVisibility(!tooltipVisibility)}>
                        {post.primary_author.profile_image ? <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> : <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/> }
                    </Link>
                </ul>
                <span className="post-card-footer-right">
                    {readingTime}
                </span>
            </footer>
        </article>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        slug: PropTypes.string,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
            slug: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
