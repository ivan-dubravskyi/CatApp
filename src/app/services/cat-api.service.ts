import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Cat, Breed} from "../models";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})

export class CatApiService {
  private origin = environment.api_origin;

  constructor(
    private http: HttpClient,
  ) { }

  getCatImage(limit: number, breed_ids: string): Observable<Cat[]> {
    const params = {
      api_key: environment.api_key,
      limit,
      breed_ids
    };

    return this.http
      .get<Cat[]>(`${this.origin}/v1/images/search`,
        {params},
      )
  }

  getAllBreeds(): Observable<any> {
    return this.http
      .get<Breed[]>(`${this.origin}/v1/breeds`)
  }
}
