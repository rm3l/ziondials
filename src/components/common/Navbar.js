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
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item is-size-5 has-text-weight-medium">
                        {this.props.site.title}
                    </Link>

                    <label
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
                    </label>
                </div>
                <div className={this.state.isActive ? `navbar-menu is-active` : `navbar-menu`}>
                    <div className="navbar-end">
                        <Link to="/" activeClassName="is-active" className="navbar-item">Home</Link>
                        <Link to="/about/" activeClassName="is-active" className="navbar-item">About</Link>
                        <Link to="/contact/" activeClassName="is-active" className="navbar-item">Contact</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    site: PropTypes.any,
}

export default Navbar
