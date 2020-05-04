import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private post: Post;

  constructor(private route: ActivatedRoute,
              private postService: PostsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.post = this.postService.getById(+params.id);
    });
  }

  loadPost() {
    this.router.navigate(['/post', 44]);
  }
}
