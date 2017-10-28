import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    public isLoggedIn: boolean = false;
    public constructor(){
        // If the user reloads the page, keep them logged in
        console.log(sessionStorage);
        if(sessionStorage.getItem('UserisLoggedIn') != undefined){
            console.log('SESSION: UserisLoggedIn');
            this.isLoggedIn = true;
        }
    }
}