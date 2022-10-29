import {OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

export class UnsubscribeClass implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
