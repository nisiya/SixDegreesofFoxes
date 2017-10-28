import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    public isLoggedIn: boolean = false;
    public id: number = 3;
    public name: String = "Bob";
    public email: String;
    selectedPendingChallenge: any;
    selectedCompletedChallenge: any;
    public constructor(){
        // If the user reloads the page, keep them logged in
        console.log(sessionStorage);
        if(sessionStorage.getItem('UserisLoggedIn') != undefined){
            console.log('SESSION: UserisLoggedIn');
            this.isLoggedIn = true;
        }
    }
}
