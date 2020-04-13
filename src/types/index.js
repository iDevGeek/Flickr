// Centralized propType definitions
import { shape, number, bool, string, oneOfType } from 'prop-types';

export const itemPropTypes = shape({
  "id": string,
  "owner": string,
  "secret": string,
  "server": string,
  "farm": number,
  "title": string,
  "ispublic": number,
  "isfriend": number,
  "isfamily": number,
  "description": shape({
      "_content": string
  }),
  "ownername": string,
  "tags": string,
  "pathalias": string
});
