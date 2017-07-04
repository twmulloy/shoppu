import { Pipe, PipeTransform } from '@angular/core'

interface Item {
  [prop: string]: any
}

@Pipe({
  name: 'extendedData'
})
export class ExtendedDataPipe implements PipeTransform {
  private item: Item = {}

  transform(item: Item, listItems: Item[]): Item {
    if (item.id && Array.isArray(listItems)) {
      this.item = listItems.find(listItem => listItem.id === item.id) || {} as Item
    }
    return this.item
  }
}
