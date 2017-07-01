export interface Env {
  routes: {
    [prop: string]: any
  },
  spree: {
    key: {
      param: string,
      token: string
    },
    root_url: string
  }
}
