import { Pipe, PipeTransform } from '@angular/core';
import { ItemModel } from 'search/search-item.model';

@Pipe({ name: 'byWord' })
export class FilterByWordPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: ItemModel[], word: string) {
    return !word
      ? value
      : value.filter((item) => item.snippet.title.toLowerCase().includes(word.toLowerCase()));
  }
}
