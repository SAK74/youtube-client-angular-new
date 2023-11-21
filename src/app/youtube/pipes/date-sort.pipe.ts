import { Pipe, PipeTransform } from '@angular/core';
import { ItemModel } from 'youtube/models/search-item.model';
import { Sort } from 'youtube/models/sort.type';

@Pipe({ name: 'byDate' })
export class SortByDatePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: ItemModel[] | null, dir: Sort) {
    if (!value) {
      return null;
    }
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
