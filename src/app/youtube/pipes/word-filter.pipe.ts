import { Pipe, PipeTransform } from '@angular/core';
import { ItemWithFavoriteModel } from 'redux/models/store.model';

@Pipe({ name: 'byWord' })
export class FilterByWordPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: ItemWithFavoriteModel[] | null, word: string) {
    if (!value) {
      return null;
    }
    return !word
      ? value
      : value.filter((item) => item.snippet.title.toLowerCase().includes(word.toLowerCase()));
  }
}
