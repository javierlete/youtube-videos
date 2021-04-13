import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../modelos/comentario';
import { Video } from '../modelos/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private url = 'http://localhost:3000/videos/';

  constructor(private http: HttpClient) { }

  listado(): Observable<Video[]> {
    return this.http.get<Video[]>(this.url);
  }

  obtenerPorId(id: number): Observable<Video> {
    return this.http.get<Video>(this.url + id);
  }

  obtenerComentariosPorVideoId(id: number): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.url + id + '/comentarios');
  }
}
