import { Component, ViewEncapsulation, Input } from '@angular/core';
import { VgAPI } from 'videogular2/core';

const FULLSCREEN_CLASS = 'full-screen';
const VIDEO_SLOTS = 4;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VideosComponent {

  public get remainingSlots() { return Array(VIDEO_SLOTS - this.videos.length).fill(1); }

  constructor() {}

  @Input() videos: Array<Video> = [];
  @Input() background: string;

  api: VgAPI;

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }

  onVideoClicked(e) {
    this.toggleFullScreen(e.srcElement);
  }

  onVideoPaused(e) {
    console.log('PAUSED ' + e.srcElement);
  }

  onVideoEnded(e) {
  }

  private toggleFullScreen(element) {
    if (element.classList.contains(FULLSCREEN_CLASS)) {
      element.classList.remove(FULLSCREEN_CLASS);
    } else {
      element.classList.add(FULLSCREEN_CLASS);
    }
  }
}

interface Video {
  url: string;
  id: string;
}
