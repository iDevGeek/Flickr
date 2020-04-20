import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';
import { specItem } from '../../types/specs';

const { server, owner, farm } = specItem;

describe('<Avatar />', () => {
  describe('When data is passed to the component', () => {
    it('should render img tag with correct image path', () => {
      const wrapper = shallow(<Avatar item={specItem} />);
      const img = wrapper.find('img');
      expect(img.length).toEqual(1);
      expect(img.prop('src')).toEqual(`https://farm${farm}.staticflickr.com/${server}/buddyicons/${owner}_l.jpg`);
      expect(wrapper.find('.avatar').length).toEqual(1);
    });
  });

  // it('should have a header with \'alt-header\' class', () => {
  //   const wrapper = shallow(<AboutPage />);
  //   const actual = wrapper.find('h2').prop('className');
  //   const expected = 'alt-header';

  //   expect(actual).toEqual(expected);
  // });

  // it('should link to an unknown route path', () => {
  //   const wrapper = shallow(<AboutPage />);
  //   const actual = wrapper.findWhere(n => n.prop('to') === '/badlink').length;
  //   const expected = 1;

  //   expect(actual).toEqual(expected);
  // });
});
