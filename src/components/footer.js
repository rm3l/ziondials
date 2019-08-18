import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ siteTitle, siteCodeLicenseUrl }) => (
    <footer className="footer">
        <div className="content has-text-centered">
            <p>
                Copyright &copy; {new Date().getFullYear()} {siteTitle}. The source code is licensed {` `}
                <a rel="noopener noreferrer" target="_blank" href={siteCodeLicenseUrl}>MIT</a>.
            </p>
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
    siteCodeLicenseUrl: PropTypes.string,
}

export default Footer
