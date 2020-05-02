import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Victor',
      text: '1',
      id: '1'
    },
    {
      title: 'Sergey',
      text: '2',
      id: '2'
    },
    {
      title: 'Anna',
      text: '3',
      id: '3'
    }
  ];

  updatePosts(post: Post) {
    console.log('Event: ', post);
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log('Id to remove', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
