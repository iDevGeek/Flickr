export const flickrKey = '617a2a5ceefc67f6b9901701eff49d6d';
export const endPoint = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&extras=owner_name,description,tags,path_alias&api_key=${flickrKey}&safe_search=1&format=json&nojsoncallback=1&per_page=100`;
// export const endPoint = `https://api.flickr.com/services/feeds/photos_public.gne?format=json`;