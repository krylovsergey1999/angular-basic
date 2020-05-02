import {Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  @ContentChild('info', {static: true}) infoRef: ElementRef;
  @Output() onRemove = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement);
  }

  removePost() {
    this.onRemove.emit(this.post.id);
  }

  ngOnDestroy(): void {
    console.log('Destroy post');
  }
}
