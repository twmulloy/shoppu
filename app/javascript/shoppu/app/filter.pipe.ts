import { uniqBy } from 'lodash'
import { Pipe, PipeTransform } from '@angular/core'

interface Item {
  [prop: string]: any
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(listItems: Item[], prop: string, value: any): Item[] {
    return uniqBy(listItems.filter(listItem => listItem[prop] === value), 'id')
  }
}
