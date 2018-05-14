import {Component, Input, OnInit, PipeTransform} from '@angular/core';
import {ShareService} from '../services/share.service';


@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss'],
})
export class ShopingCartComponent implements OnInit {
    bottleCount = 0;
    showCartViget = false;
    @Input() priceOfBottle = 0;
    @Input()  priceAll = 0;
    @Input()  buyArray = [];
    @Input() universalArr = new Set();
    @Input() total = 0;
    @Input() BuyObject;
    constructor(private share: ShareService) {
        this.share.getSharedData().subscribe(cnt => {this.incBottel(cnt); });
       // this.share.addBottle.subscribe(cnt => {this.incBottel(cnt); });

    }

    incBottel( cnt) {
       this.priceOfBottle = Number(Number(cnt.price.substr(1)).toFixed(2));
       this.total +=  this.priceOfBottle;
        this.priceAll = this.total;
        this.bottleCount++;
        this.buyArray.push(cnt);
        cnt.count++;
        this.universalArr.add(cnt);
    }
    showCart() {
        this.showCartViget = !this.showCartViget;


    }
    remove(obj) {
        this.total -=   Number(obj.price.substr(1)) * obj.count;
        this.bottleCount -=  obj.count;
        obj.count--;
        if (this.total < 1 || this.bottleCount == 0) {
            this.total = 0;
        }
        this.universalArr.delete(obj);
    }


  ngOnInit() {


  }

}
