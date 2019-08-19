import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ siteTitle, siteCodeLicenseUrl, twitterUrl, linkedinUrl, githubUrl }) => (
    <footer className="footer">
        <div className="container">
            <div className="content has-text-centered is-white">
                <p className="social-buttons">
                    <a rel="noopener noreferrer" target="_blank" href={twitterUrl}>
                        <span className="fab fa-twitter"></span>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href={linkedinUrl}>
                        <span className="fab fa-linkedin"></span>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href={githubUrl}>
                        <span className="fab fa-github"></span>
                    </a>
                </p>
                <p>
                    Copyright &copy; {new Date().getFullYear()} {siteTitle}. The source code is licensed {` `}
                    <a rel="noopener noreferrer" target="_blank" href={siteCodeLicenseUrl}>MIT</a>.
                </p>
            </div>
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
    siteCodeLicenseUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
    linkedinUrl: PropTypes.string,
    githubUrl: PropTypes.string,
}

export default Footer
