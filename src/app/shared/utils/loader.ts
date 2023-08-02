import { BehaviorSubject } from 'rxjs';

export class Loader {
  private show = new BehaviorSubject<boolean>(false);
  public show$ = this.show.asObservable();

  start(): void {
    this.show.next(true);
  }

  stop(): void {
    this.show.next(false);
  }
}
