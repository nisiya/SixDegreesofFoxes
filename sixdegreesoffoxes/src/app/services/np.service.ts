import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NPService {
    public isLoggedIn: boolean = false;
    public constructor(){
        // If the user reloads the page, keep them logged in
        console.log(sessionStorage);
        if(sessionStorage.getItem('NPisLoggedIn') != undefined){
            console.log('SESSION: NPisLoggedIn');
            this.isLoggedIn = true;
        }
    }
}