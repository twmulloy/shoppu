import { Element } from './element'

export interface Page {
  id: number,
  name: string,
  urlname: string,
  elements?: Array<Element>,
  root?: boolean,
  public?: boolean,
  visible?: boolean,
  children?: Array<Page>
}
