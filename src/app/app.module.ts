import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './componentes/listado/listado.component';

import { HttpClientModule } from '@angular/common/http';
import { YoutubePipe } from './pipes/youtube.pipe';
import { VideoComponent } from './componentes/video/video.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    YoutubePipe,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
