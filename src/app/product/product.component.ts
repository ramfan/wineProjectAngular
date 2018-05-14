import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Data} from '../services/data.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
   @Output() bottle = new EventEmitter<any>();
    @Input() textSearch;
    constructor(private prod: Data ,  private shareData: ShareService) {
        console.log('search ' + ' ' + this.textSearch);
    }

    ArrProd = [];
    getData () {
        return  this.ArrProd;
    }
    ngOnInit() {
        this.prod.getData().subscribe(data=>{ this.ArrProd =data} );
    }
    incBottel(cnt) {
        console.log('prodComp ' + ' ' + cnt);
        this.shareData.shareData(cnt);
        // this.bottle.emit(cnt);
    }
// ngOnInit() {}
}
