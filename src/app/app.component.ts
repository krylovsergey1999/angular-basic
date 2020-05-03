import {Component, OnInit,} from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Beer',
      text: 'Bad'
    },
    {
      title: 'Bread',
      text: 'With milk'
    },
    {
      title: 'JS',
      text: 'Hard'
    },
  ];

  search = '';

  addPost() {
    this.posts.unshift({
      title: 'New',
      text: 'Post'
    });
  }
}
