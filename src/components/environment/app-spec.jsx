import React from 'react';
import {shallow} from 'enzyme';
import App from './app.jsx';

describe("App", function() {

  it("should render component as expected", function() {
  	const wrapper = shallow(<App />);
    expect(wrapper.html()).to.equal(`<h1>Hello, world!!</h1>`);
  });

});