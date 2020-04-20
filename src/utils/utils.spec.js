import { getImageSrc, getAvatarImageSrc } from './flickr';
import { formatNumber } from './formatter';
import { specItem } from '../types/specs';

const {
  server, id, owner, secret, farm,
} = specItem;

describe('Utils spec', () => {
  describe('When I execute formatNumber', () => {
    describe('When the input is not a number', () => {
      it('should return empty string', () => {
        const result = formatNumber('abc');
        expect(result).toEqual('');
      });
    });
    describe('When the input is a number', () => {
      it('should return correctly formatted string', () => {
        expect(formatNumber('123.5')).toEqual('123');
        expect(formatNumber('123')).toEqual('123');
        expect(formatNumber('1234')).toEqual('1,234');
        expect(formatNumber('12345')).toEqual('12,345');
        expect(formatNumber('1234567')).toEqual('1,234,567');
      });
    });
  });
  describe('When I execute getImageSrc', () => {
    describe('When item is correct', () => {
      it('should return image src', () => {
        const result = getImageSrc(specItem);
        expect(result).toEqual(`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`);
      });
    });
  });
  describe('When I execute getAvatarImageSrc', () => {
    describe('When item is correct', () => {
      it('should return image avatar src', () => {
        const result = getAvatarImageSrc(specItem);
        expect(result).toEqual(`https://farm${farm}.staticflickr.com/${server}/buddyicons/${owner}_l.jpg`);
      });
    });
  });
});
