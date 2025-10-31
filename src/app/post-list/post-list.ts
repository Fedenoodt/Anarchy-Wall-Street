import { Component } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { PostService } from '../create-post/post.service'; // ajustá la ruta según tu carpeta
// Podés definir una interfaz Post si querés tipar mejor

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [AsyncPipe, NgForOf, NgIf, JsonPipe],
  templateUrl: './post-list.html',
})
export class PostListComponent {
  // Un Observable que emite la lista de posts en tiempo real.
  posts$!: Observable<any[]>;

  constructor(private postService: PostService) {
    // acá enganchamos el canal de datos
    this.posts$ = this.postService.getPosts();
  }
}
