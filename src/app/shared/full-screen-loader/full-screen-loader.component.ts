import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-full-screen-loader',
  templateUrl: './full-screen-loader.component.html',
  styleUrls: ['./full-screen-loader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullScreenLoaderComponent {
  constructor() {}
}
