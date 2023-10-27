import { Pipe, PipeTransform } from '@angular/core';
import { SortType } from 'app.component';
import { ItemModel } from 'search/search-item.model';

@Pipe({ name: 'byViews' })
export class SortByViewsPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: ItemModel[], dir: SortType) {
    return !dir
      ? value
      : value.sort((a, b) => {
        const increased = parseInt(a.statistics.viewCount, 10)
            - parseInt(b.statistics.viewCount, 10);
        return dir === 'inc' ? increased : -increased;
      });
  }
}
