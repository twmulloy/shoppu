import { Ingredient } from './ingredient'

export interface Element {
  id: number,
  name: string,
  ingredients: Array<Ingredient>
}
