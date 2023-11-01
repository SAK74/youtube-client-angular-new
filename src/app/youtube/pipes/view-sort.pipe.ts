import { Pipe, PipeTransform } from '@angular/core';
import { ItemModel } from 'youtube/models/search-item.model';
import { Sort } from 'youtube/models/sort.type';

@Pipe({ name: 'byViews' })
export class SortByViewsPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: ItemModel[], dir: Sort) {
    return !dir
      ? value
      : value.sort((a, b) => {
        const increased = parseInt(a.statistics.viewCount, 10)
            - parseInt(b.statistics.viewCount, 10);
        return dir === Sort.INC ? increased : -increased;
      });
  }
}
