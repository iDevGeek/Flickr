export function filterTags(tags: any, value: string) : [] {
    let result: any = [];
    if (tags && value) {
      Object.keys(tags).forEach((key)=>{
        if (key.indexOf(value) !== -1) {
          const counter = tags[key].length;
          let pair: [string, number] = [key, counter];
          result.push(pair);
        }
      });
      return result;
    }

    return result;
}

export function getImageSrc(item) {
  const {farm, server, id, secret} = item;
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
}

export function getAvatarImageSrc(item) {
  const {farm, server, owner} = item;
  return `https://farm${farm}.staticflickr.com/${server}/buddyicons/${owner}_l.jpg`;
}
