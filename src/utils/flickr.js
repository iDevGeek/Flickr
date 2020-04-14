export function getImageSrc(item) {
  const {farm, server, id, secret} = item;
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
}

export function getAvatarImageSrc(item) {
  const {farm, server, owner} = item;
  return `https://farm${farm}.staticflickr.com/${server}/buddyicons/${owner}_l.jpg`;
}
