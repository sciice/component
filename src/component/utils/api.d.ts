export interface apiStatic {
  index(url: string, size?: null | number);
  store(url: string, values: any);
  update(url: string, id: number, values: any);
  show(url: string, id: number);
  destroy(url: string, id: number);
}

declare const api: apiStatic;

export default api;
