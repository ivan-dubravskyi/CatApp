import {Component, Input} from '@angular/core';
import {Cat} from "../../models";

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})

export class CatCardComponent {
  @Input() cat!: Cat;

  public imgLoading = true;
}
