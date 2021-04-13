import { VideoService } from './../servicios/video.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../modelos/video';
import { Comentario } from '../modelos/comentario';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  video: Video;
  comentarios: Comentario[] = [];

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(map => {
      const id = +map.get('id');

      this.videoService.obtenerPorId(id).subscribe(
        video => this.video = video
      );

      this.videoService.obtenerComentariosPorVideoId(id).subscribe(
        comentarios => this.comentarios = comentarios
      );
    });
  }

  estrellaClick(num: 1 | 2 | 3 | 4 | 5): void {
    console.log('DETALLE', num);

    this.videoService.modificarEstrellas(this.video.id, num).subscribe(
      () => this.video.estrellas = num
    );
  }
}
