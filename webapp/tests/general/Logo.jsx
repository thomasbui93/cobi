import React from 'react'
import {mount} from 'enzyme'
import {expect as expectChai} from 'chai'
import Logo from './../../elements/general/Logo'
import Link from 'next/link'

describe('Logo: ', () => {

  it('render image that inherit props from parent', () => {
    const title = 'Sample Title'
    const src = 'https://image.flaticon.com/icons/svg/854/854917.svg'
    const component = mount(<Logo imageSrc={src} imageAlt={title}/>);
    expectChai(component.find('img')).to.have.length(1);
    expectChai(component.find('img').prop('src')).to.equal(src);
    expectChai(component.find('img').prop('alt')).to.equal(title);
  })

  it('should not contain Link element if window.location.path is "/"', () => {
    global.window.location.pathname = '/';
    const title = 'Sample Title'
    const src = 'https://image.flaticon.com/icons/svg/854/854917.svg'
    const component = mount(<Logo imageSrc={src} imageAlt={title}/>);
    expectChai(component.find(Link)).to.have.length(0);
  })

  it('should contain Link element if window.location.path is not "/"', () => {
    global.window.location.pathname = '/asdda';
    const title = 'Sample Title'
    const src = 'https://image.flaticon.com/icons/svg/854/854917.svg'
    const component = mount(<Logo imageSrc={src} imageAlt={title}/>);
    expectChai(component.find(Link)).to.have.length(1);
  })
})
