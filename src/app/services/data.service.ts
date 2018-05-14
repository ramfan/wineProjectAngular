import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ProductComponent} from '../product/product.component';

@Injectable()

export class Data {
    constructor(private http: HttpClient) {}
    getData() {
        return this.http.get('/assets/data.json').map(
            function (response: Response) {
                return response;
            }
        ).map(
            function (de: any) {
                return de.map(
                    function (dataObject) {
                        return {
                                id: dataObject._id,
                                index: dataObject.index,
                                inStock: dataObject.inStock,
                                price: dataObject.price,
                                picture: dataObject.picture,
                                year: dataObject.year,
                                color: dataObject.color,
                                city: dataObject.city,
                                name: dataObject.name,
                                company: dataObject.company,
                                about: dataObject.about,
                                count : 0,
                        };
                    }
                );

            }
        );
}

}

