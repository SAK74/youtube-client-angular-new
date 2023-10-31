import { Pipe, PipeTransform } from '@angular/core';
import { Sort } from 'app.component';
import { ItemModel } from 'youtube/models/search-item.model';

@Pipe({ name: 'byDate' })
export class SortByDatePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: ItemModel[], dir: Sort) {
    return !dir
      ? value
      : value.sort((a, b) => {
        // dates comparing of array elements
        const increased = new Date(a.snippet.publishedAt).getTime()
            - new Date(b.snippet.publishedAt).getTime();

        // return negative or positive result of comparing, depends of Sort params
        return dir === Sort.INC ? increased : -increased;
      });
  }
}
