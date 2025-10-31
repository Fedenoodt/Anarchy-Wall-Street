import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PostService {
  firestore = inject(Firestore);

  addPost(postData: any) {
    // Agrega un documento a la colección 'posts' en Firestore.
    const postsRef = collection(this.firestore, 'posts');
    return addDoc(postsRef, postData);
  }
  getPosts(): Observable<any[]> {
  // Devuelve un stream en tiempo real de la colección 'posts'.
  const postsRef = collection(this.firestore, 'posts');
  return collectionData(postsRef, { idField: 'id' });
}

}

