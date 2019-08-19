/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'
import Footer from './footer'
import './layout.scss'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    siteCodeLicenseUrl
                    twitterUrl
                    linkedinUrl
                    githubUrl
                }
            }
        }
    `)

    return (
        <>
            <div className="container">
                <Navbar siteTitle={data.site.siteMetadata.title} />
                <main>{children}</main>
            </div>
            <Footer siteTitle={data.site.siteMetadata.title} siteCodeLicenseUrl={data.site.siteMetadata.siteCodeLicenseUrl} twitterUrl={data.site.siteMetadata.twitterUrl} linkedinUrl={data.site.siteMetadata.linkedinUrl} githubUrl={data.site.siteMetadata.githubUrl}/>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
