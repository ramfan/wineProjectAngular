import {Injectable, EventEmitter, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShareService {
    // addBottle = new EventEmitter();
   private subject = new Subject ();

  public shareData (objectProduct) {
       this.subject.next(objectProduct);

    //  this.addBottle.emit(objectProduct);
  }
 public getSharedData() {
     return this.subject.asObservable();
 }
}
