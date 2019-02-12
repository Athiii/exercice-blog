import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  create_at = new Date();

constructor() { }

ngOnInit() {
  }
  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }
  like() {
    console.log('Like');
    this.postLoveIts ++ ;
  }
  dontlike() {
    console.log('Dont\'t Like');
    this.postLoveIts --;
  }

}
