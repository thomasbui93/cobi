import React from 'react'
import PropTypes from 'prop-types'

export default class Collapsible extends React.Component {
  static defaultProps = {
    activeStateClass: 'k-collapsible__active'
  }

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    const collapsibleStyle = {
      maxHeight: this.state.isActive ? 'none' : 0
    }

    return (<div className={`k-collapsible ${this.props.className}`}>
      <h5 className={`k-collapsible__title ${this.state.isActive ? this.props.activeStateClass : ''}`}
        onClick={this.toggleCollapsible}>
        {this.props.title}
      </h5>
      <div className="k-collapsible__content" style={collapsibleStyle}>
        {this.props.children}
      </div>
    </div>)
  }
}

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  activeStateClass: PropTypes.string
}