import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ site, config }) => (
    <footer className="footer">
        <div className="container">
            <div className="content has-text-centered is-white">
                <p className="social-buttons">
                    <a className="twitter-icon" rel="noopener noreferrer" target="_blank" href={config.twitterUrl}>
                        <span className="fab fa-twitter"></span>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href={config.linkedinUrl}>
                        <span className="fab fa-linkedin"></span>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href={config.githubUrl}>
                        <span className="fab fa-github"></span>
                    </a>
                </p>
                <p>
                    Copyright &copy; {new Date().getFullYear()} {site.title}. The source code is licensed {` `}
                    <a rel="noopener noreferrer" target="_blank" href={config.siteCodeLicenseUrl}>MIT</a>.
                </p>
                <small>
                    Built with <a rel="noopener noreferrer" target="_blank" href="https://www.gatsbyjs.org/">Gatsby.js</a>
                </small>
            </div>
        </div>
    </footer>
)

Footer.propTypes = {
    site: PropTypes.any,
    config: PropTypes.shape({
        siteCodeLicenseUrl: PropTypes.string,
        twitterUrl: PropTypes.string,
        linkedinUrl: PropTypes.string,
        githubUrl: PropTypes.string,
    }),
}

export default Footer
