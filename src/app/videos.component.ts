import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class VideosComponent {
  @Input() source = 'https://www.w3schools.com/tags/movie.mp4';
}
