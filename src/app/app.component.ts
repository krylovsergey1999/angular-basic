import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {
      id: '3',
      title: 'three',
      text: '3'
    }
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log('id is remove: ', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0].title = 'Changes';
    }, 5000);
  }
}
