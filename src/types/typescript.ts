export interface ItemType {
  "id": string,
  "owner": string,
  "secret": string,
  "server": string,
  "farm": number,
  "title": string,
  "ispublic": number,
  "isfriend": number,
  "isfamily": number,
  "description": {
      "_content": string
  },
  "height_m": number,
  "width_m": number,
  "url_m": string,
  "ownername": string,
  "tags": string,
  "pathalias": string
}
