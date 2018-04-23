import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default class Logo extends React.Component {
  static propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  }

  static defaultProps = {
    width: 50,
    width: 50
  }

  isHomePage() {
    return window.location.pathname === '/';
  }

  render() {
    return this.isHomePage() ? 
      <div className="logo">
        <img width={this.props.width} 
            height={this.props.height} 
            src={this.props.imageSrc} 
            alt={this.props.imageAlt}/>
      </div> :
      <div className="logo">
        <Link href={window.location.pathname}>
          <img width={this.props.width} 
              height={this.props.height} 
              src={this.props.imageSrc} 
              alt={this.props.imageAlt}/>
        </Link>  
      </div>  
  }
} 