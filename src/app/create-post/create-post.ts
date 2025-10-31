import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './post.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.html',
})
export class CreatePostComponent {
  // Diferenciamos al boton del formulario con isSending, para mostrar que se esta publicando.
  form: FormGroup;
  isSending = false;
  message = '';

  constructor(private fb: FormBuilder, 
    private postService: PostService,
    // Usamos ChangeDetectorRef para prevenir los cambios asíncronos en el mensaje de confirmación, y en el cambio de estado del boton.
    private cdr: ChangeDetectorRef ) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
      // Se declara inicialmente de "anonimo", para comodidad del usuario.
      autor: ['Anónimo', Validators.required],
    });
  }

  async submit() {
    if (this.form.invalid) return;
    this.isSending = true;
    this.message = '';

    try {
      await this.postService.addPost(this.form.value);
      this.message = '✅ Publicación guardada en Firebase';
      this.form.reset();
    } catch (error) {
      console.error(error);
      this.message = '❌ Error al guardar el post';
    } finally {
      this.isSending = false;
      this.cdr.detectChanges(); 
    }
  }
}
