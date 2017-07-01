import { Element } from './element'

export interface Page {
  id: number,
  name: string,
  urlname: string,
  elements?: Element[],
  root?: boolean,
  public?: boolean,
  visible?: boolean,
  children?: Page[],
  title?: string
}
