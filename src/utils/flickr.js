export function getImageSrc(item) {
  const {farm, server, id, secret} = item;
  return `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
}