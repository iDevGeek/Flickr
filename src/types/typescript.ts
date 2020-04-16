export interface ItemType {
  id: string,
  owner: string,
  secret: string,
  server: string,
  farm: number,
  views: string,
  title: string,
  ispublic: number,
  isfriend: number,
  isfamily: number,
  description: {
      _content: string
  },
  height_m: number,
  width_m: number,
  url_m: string,
  ownername: string,
  tags: string,
  pathalias: string
}

export interface StoreType {
  dispatch(): any, 
  getState(): any, 
  subscribe(): any, 
  replaceReducer(): any,
  data: {
    endPoint: null | string,
    loading: boolean,
    error: null | string,
    results: [],
    tags: null | []
  }
}
