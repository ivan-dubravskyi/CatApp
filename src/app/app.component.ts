import {Component} from '@angular/core';
import {CatApiService} from "./services/cat-api.service";
import {BehaviorSubject, map, switchMap, tap} from "rxjs";
import {Filters} from "./models";
import {Loader} from "./shared/utils/loader";
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loader = new Loader();

  public filters = new BehaviorSubject<Filters>({
    limit: 10,
    breedId: '',
  });

  public cats$ = this.filters.asObservable().pipe(
    tap(() => this.loader.start()),
    switchMap((filters) => this.catApiService.getCatImages(filters.limit, filters.breedId)),
    tap(() => this.loader.stop()),
  )
  public breeds$ = this.catApiService.getAllBreeds();

  public isMobile$ = this.media
    .asObservable()
    .pipe(map(() => this.media.isActive('lt-sm')));

  constructor(private catApiService: CatApiService,
              private media: MediaObserver,) {}

}
