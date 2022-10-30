import {OnDestroy} from "@angular/core";
import {Subject} from "rxjs";
export type Constructor<T = {}> = new (...args: any[]) => T;
export const autoUnsubscribeMixin = <T extends Constructor>(base: T = class {} as T) =>
  class UnsubscribeClass implements OnDestroy {
    destroy$: Subject<boolean> = new Subject<boolean>();
    ngOnDestroy() {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
    }
  }
