import { Taxon } from './taxon'

export interface Taxonomy {
  id: number,
  name: string,
  pretty_name?: string,
  taxons?: Taxon[]
}
