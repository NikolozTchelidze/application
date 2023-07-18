import { Component,OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../posts.model';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts: Post[] =[];
  
  constructor(public postService:PostsService){}
  ngOnInit(): void {
    this.posts = this.postService.getPost();
  }
}
