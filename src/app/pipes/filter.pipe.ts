import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string): Post[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter(el => el.title.includes(search) || el.text.includes(search));
  }

}
