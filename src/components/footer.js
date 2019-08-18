import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ siteTitle }) => (
    <footer className="footer">
        <div className="content has-text-centered">
            <p>
                Copyright &copy; {new Date().getFullYear()} {siteTitle}
            </p>
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

export default Footer
