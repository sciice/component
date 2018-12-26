import React from 'react';
import { mount } from 'enzyme';
import Authorize from '.';

const authorize = ['a', 'b'];

it('Authorize PASS', () => {
  const wrapper = mount(
    <Authorize authorize={authorize} auth="a">
      Children
    </Authorize>
  );

  expect(wrapper.text()).toEqual('Children');
});

it('Authorize FAIL', () => {
  const wrapper = mount(
    <Authorize authorize={authorize} auth="x">
      Children
    </Authorize>
  );
  expect(wrapper.text()).toEqual(null);
});
