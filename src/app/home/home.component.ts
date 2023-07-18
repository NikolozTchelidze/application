import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public postService:PostsService){}
  ngOnInit(): void {}


  onPostAdd(form:NgForm){
    if(form.invalid){return}
    this.postService.addPost(form.value.title, form.value.content, form.value.dateTime, form.value.author);
    form.resetForm()
  }
}