import { VideoService } from './../../servicios/video.service';
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/modelos/video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.listado().subscribe(videos => this.videos = videos);
  }

}
