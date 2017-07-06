import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

import { Video } from './video'

@Component({
  selector: '[video]',
  template: `
    <ng-container *ngIf="!loaded">
      Loading {{item.value}}...
    </ng-container>
    <iframe
      [src]="src"
      frameborder="0"
      allowfullscreen
      (load)="onLoad()"
    ></iframe>
  `
})
export class VideoComponent implements OnInit {
  @Input() item: Video
  src: any
  loaded: boolean

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const params = [
      'autoplay=1',
      'controls=0',
      'disablekb=1',
      'enablejsapi=1',
      'loop=1',
      'modestbranding=1',
      'rel=0',
      'showinfo=0'
    ].join('&')
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.item.value}?${params}`
    )
  }

  onLoad() {
    if (!this.loaded) { this.loaded = true }
  }
}
