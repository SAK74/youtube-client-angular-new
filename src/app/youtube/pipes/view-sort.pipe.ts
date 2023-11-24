import { Pipe, PipeTransform } from '@angular/core';
import { ItemWithFavoriteModel } from 'redux/models/store.model';
import { Sort } from 'youtube/models/sort.type';

@Pipe({ name: 'byViews' })
export class SortByViewsPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: ItemWithFavoriteModel[] | null, dir: Sort) {
    if (!value) {
      return null;
    }
    return !dir
      ? value
      : value.sort((a, b) => {
        const increased = parseInt(a.statistics.viewCount, 10)
            - parseInt(b.statistics.viewCount, 10);
        return dir === Sort.INC ? increased : -increased;
      });
  }
}
