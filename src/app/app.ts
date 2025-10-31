import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post';
import { PostListComponent } from './post-list/post-list';

// Componente raíz: renderiza el título, el formulario de creación y la lista de posts.

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreatePostComponent, PostListComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('anarchy-wall-street');
}
