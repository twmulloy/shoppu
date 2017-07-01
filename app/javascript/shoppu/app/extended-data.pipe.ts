import { Pipe, PipeTransform } from '@angular/core'

interface Item {
  id: number | string
}

@Pipe({
  name: 'extendedData'
})
export class ExtendedDataPipe implements PipeTransform {
  transform(item: Item, listItems: any[]): any {
    let listItem = {}
    if (item.id && Array.isArray(listItems)) {
      listItem = listItems.find(listItem => listItem.id === item.id)
    }
    return listItem
  }
}
