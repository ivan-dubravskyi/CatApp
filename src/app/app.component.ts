import {Component, OnInit} from '@angular/core';
import {CatApiService} from "./services/cat-api.service";
import {BehaviorSubject, map, switchMap} from "rxjs";
import {Filters} from "./models";
import {Loader} from "./shared/utils/loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loader = new Loader();

  public filters = new BehaviorSubject<Filters>({
    limit: 10,
    breedId: '',
  });

  public cats$ = this.filters.asObservable().pipe(
    switchMap((filters) => {
      this.loader.start();
      return this.catApiService.getCatImage(filters.limit, filters.breedId);
    }),
    map((cats) => {
      this.loader.stop();
      return cats;
    })
  )
  public breeds$ = this.catApiService.getAllBreeds();

  constructor(private catApiService: CatApiService) {
  }

  ngOnInit(): void {
  }
}
