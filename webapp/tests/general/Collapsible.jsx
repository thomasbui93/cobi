import React from 'react'
import {mount} from 'enzyme'
import {expect as expectChai} from 'chai'
import Collapsible from './../../elements/general/Collapsible';

describe('Collapsible: ', () => {
  it('should render title if given one', () => {
    const title = 'Sample Title'
    const component = mount(<Collapsible title={title}><div></div></Collapsible>);
    expectChai(component.find('.k-collapsible__title')).to.have.length(1);
    expectChai(component.find('.k-collapsible__title').text()).to.equal(title);
  })

  it('should have default UI elements in inactive mode', () => {
    const title = 'Sample Title'
    const component = mount(<Collapsible title={title}><div>Sample Child</div></Collapsible>);
    const titleComponent = component.find('.k-collapsible__title');
    const defaultActiveClass = component.prop('activeStateClass');
    expectChai(component.find('.k-collapsible__title').hasClass(defaultActiveClass)).to.equal(false);
    expectChai(component.find('.k-collapsible__content')).to.have.length(1);
    expectChai(component.find('.k-collapsible__content').prop('style')).to.have.property('maxHeight', 0);
  });

  it('should have active UI elements when click first time', () => {
    const title = 'Sample Title'
    const component = mount(<Collapsible title={title}><div>Sample Child</div></Collapsible>);
    const titleComponent = component.find('.k-collapsible__title');
    
    titleComponent.simulate('click');

    const defaultActiveClass = component.prop('activeStateClass');
    expectChai(component.find('.k-collapsible__content')).to.have.length(1);
    expectChai(component.find('.k-collapsible__content').prop('style')).to.have.property('maxHeight', 'none');
    expectChai(component.find('.k-collapsible__title').hasClass(defaultActiveClass)).to.equal(true);
  });
});