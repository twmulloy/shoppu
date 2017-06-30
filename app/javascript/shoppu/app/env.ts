interface Alchemy {
  root_url: string
}

interface Credential {
  param: string,
  token: string
}

interface Routes {
  alchemy_api_page_path: any,
  alchemy_api_preview_page_path: any,
  spree_api_v1_taxonomy_path: any,
  spree_api_v1_taxon_products_path: any,
  spree_api_v1_product_path: any
}

interface Rails {
  environment: string,
  key: Credential
}

interface Spree {
  key: Credential,
  root_url: string
}

export interface Env {
  // alchemy: Alchemy,
  // domain: string,
  // rails: Rails,
  routes: Routes,
  spree: Spree
}
