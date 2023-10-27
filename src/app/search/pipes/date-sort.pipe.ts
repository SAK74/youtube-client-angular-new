import { Pipe, PipeTransform } from '@angular/core';
import { SortType } from 'app.component';
import { ItemModel } from 'search/search-item.model';

@Pipe({ name: 'byDate' })
export class SortByDatePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: ItemModel[], dir: SortType) {
    return !dir
      ? value
      : value.sort((a, b) => {
        const increased = new Date(a.snippet.publishedAt).getTime()
            - new Date(b.snippet.publishedAt).getTime();
        return dir === 'inc' ? increased : -increased;
      });
  }
}
