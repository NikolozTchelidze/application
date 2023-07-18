import { Post } from "./posts.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})
export class PostsService {
    private posts: Post[] = [];


    addPost(title:string, content:string, dateTime:any, author:string){
        const post: Post = {title:title, content:content, dateTime:new Date() , author:author};
        this.posts.push(post);
    }
    getPost(){
        return this.posts
    }
}