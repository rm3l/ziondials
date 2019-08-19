import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const SocialIcon = styled.a`
margin-right: 2rem;
`

const Footer = ({ siteTitle, siteCodeLicenseUrl, twitterUrl, linkedinUrl, githubUrl }) => (
    <footer className="footer">
        <div className="container">
            <div className="content has-text-centered is-white">
                <p className="social-buttons">
                    <SocialIcon className="is-size-2" rel="noopener noreferrer" target="_blank" href={twitterUrl}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </SocialIcon>
                    <SocialIcon className="is-size-2" rel="noopener noreferrer" target="_blank" href={linkedinUrl}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </SocialIcon>
                    <SocialIcon className="is-size-2" rel="noopener noreferrer" target="_blank" href={githubUrl}>
                        <FontAwesomeIcon icon={faGithub} />
                    </SocialIcon>
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
