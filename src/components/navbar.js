import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export class Navbar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isActive: false,
        }
    }

    Toggleclass = () => {
        this.setState({ isActive: !this.state.isActive })
    }

    render() {
        return (
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img
                            src="https://bulma.io/images/bulma-logo.png"
                            alt={this.props.siteTitle}
                            width="112"
                            height="28"
                        />
                    </Link>

                    <a
                        role="button"
                        className={
                            this.state.isActive
                                ? `navbar-burger is-active`
                                : `navbar-burger`
                        }
                        aria-label="menu"
                        aria-expanded={this.state.isActive ? `true` : `false`}
                        onClick={this.Toggleclass}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div
                    className={
                        this.state.isActive
                            ? `navbar-menu is-active`
                            : `navbar-menu`
                    }
                ></div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    siteTitle: PropTypes.string,
}

export default Navbar
