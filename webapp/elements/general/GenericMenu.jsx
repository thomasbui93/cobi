import React from 'react';
import PropTypes from 'prop-types';

export default class GenericMenu extends React.Component {
  static menuItemShape = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    classNames: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    id: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(
      PropTypes.shape(GenericMenu.menuItemShape)
    )
  }

  static propTypes = {
    menuItems: PropTypes.arrayOf(
      PropTypes.shape(GenericMenu.menuItemShape).isRequired
    ).isRequired
  }

  renderMenu(menuItems) {
    return menuItems.map(menuItem => {
      const menuClassArray = menuItem.classNames ? menuItem.classNames.split(" ") : [];
      const menuClass = menuItem.children && menuItem.children.length > 0 ?
        `${menuClassArray} menu--has-children` :
        menuClassArray
      return <div className={`menu--item ${menuClass}`} key={menuItem.id}>
        <div className="menu--item-block">
          <a className="menu--item-link" href={menuItem.href} title={menuItem.title}>
            {menuItem.title}
          </a>
        </div>
        {
          menuItem.children && menuItem.children.length > 0 ?
            <div className="menu--item-list">
              {this.renderMenu(menuItem.children)}
            </div> : ''
        }
      </div>
    })
  }

  render() {
    return <div className={`${this.props.className ? this.props.className : ''} menu--generic menu`}>
      {this.renderMenu(this.props.menuItems)}
    </div>
  }
}