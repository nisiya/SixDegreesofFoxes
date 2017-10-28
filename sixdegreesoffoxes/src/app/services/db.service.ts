import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DBService {
    // This is the url of the Express server that is serving as the connection for the DB to the open world
    url = `http://localhost:8000`;
    constructor(private http: Http){}

    registerUser(first_name, last_name, email, password): Promise<any> {
        console.log(name + email + password);
        console.log("Performing GET");
        let register_user = this.url + '/register/user';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let params = new URLSearchParams();
        params.set('username', name);
        params.set('password', password);
        params.set('email', name);
        let options = new RequestOptions({headers: headers, search: params});
        return this.http.get(register_user, options)
        .toPromise()
        .then(response => response.json()　as Object)
        .catch(this.handleError);
    }

    registerNP(name, email, summary, password): Promise<any> {
        console.log(name + email + summary + password);
        console.log("Performing GET");
        let register_np = this.url + '/register/np';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let params = new URLSearchParams();
        params.set('username', name);
        params.set('password', password);
        params.set('email', name);
        let options = new RequestOptions({headers: headers, search: params});
        return this.http.get(register_np, options)
        .toPromise()
        .then(response => response.json()　as Object)
        .catch(this.handleError);
    }

    login(email, password): Promise<any> {
        console.log(email + " " + password);
        console.log("Performing GET");
        let login = this.url + '/login';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let params = new URLSearchParams();
        params.set('username', email);
        params.set('password', password);
        let options = new RequestOptions({headers: headers, search: params});
        return this.http.get(login, options)
        .toPromise()
        .then(response => response.json()　as Object)
        .catch(this.handleError);
    }

    getNonProfits(): Promise<any> {
        let getnps = this.url + '/getnps';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let params = new URLSearchParams();
        let options = new RequestOptions({headers: headers, search: params});
        return this.http.get(getnps, options)
        .toPromise()
        .then(response => response.json()　as Object)
        .catch(this.handleError); 
    }

    getActions(): Promise<any> {
        let getactions = this.url + '/getactions';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let params = new URLSearchParams();
        let options = new RequestOptions({headers: headers, search: params});
        return this.http.get(getactions, options)
        .toPromise()
        .then(response => response.json()　as Object)
        .catch(this.handleError); 
    }

    getChallenges(): Promise<any> {
        let getchallenges = this.url + '/getchallenges';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let params = new URLSearchParams();
        let options = new RequestOptions({headers: headers, search: params});
        return this.http.get(getchallenges, options)
        .toPromise()
        .then(response => response.json()　as Object)
        .catch(this.handleError); 
    }

    getCompletedChallenges(): Promise<any> {
        let getcompletedchallenges = this.url + '/getcompletedchallenges';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let params = new URLSearchParams();
        let options = new RequestOptions({headers: headers, search: params});
        return this.http.get(getcompletedchallenges, options)
        .toPromise()
        .then(response => response.json()　as Object)
        .catch(this.handleError); 
    }

    getChallenge(): Promise<any> {
        let getchallenge = this.url + '/getchallenge';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let params = new URLSearchParams();
        let options = new RequestOptions({headers: headers, search: params});
        return this.http.get(getchallenge, options)
        .toPromise()
        .then(response => response.json()　as Object)
        .catch(this.handleError); 
    }

        

    // /**
    //  * Performs a GET from the users table
    //  */
    // getUserREST(username, password): Promise<any> {
    //     console.log(username + " " + password);
    //     console.log("Performing GET of users");
    //     let login = this.url + '/login';
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     let params = new URLSearchParams();
    //     params.set('username', username);
    //     params.set('password', password);
    //     let options = new RequestOptions({headers: headers, search: params});
    //     return this.http.get(login, options)
    //     .toPromise()
    //     .then(response => response.json()　as Object)
    //     .catch(this.handleError);
    // }

    // /**
    //  * Performs an upload of a photo to the database, taking in a file and a filter
    //  * @param file 
    //  */
    // uploadPhoto(file: File, style: Object): Promise<any> {
    //     console.log("WEB: Performing POST of photo");
    //     let upload = this.url + '/upload';
    //     let headers = new Headers();
    //     // headers.append('Content-Type', 'image/jpeg');

    //     let formData: any = new FormData();
    //     formData.append("upload", file);
    //     console.log("WEB: File that will be uploaded with filter id " + style['filter_id'] + ":");
    //     console.log(file);

    //     let params = new URLSearchParams();
    //     params.set('filter_id', style['filter_id']);
    //     let options = new RequestOptions({headers: headers, search: params});
    //     return this.http.post(upload, formData, options)
    //     .toPromise()
    //     .then(response => response.json().data　as Object)
    //     .catch(this.handleError);
    // }

    // getFilters(): Promise<any> {
    //     console.log("Performing GET of filters");
    //     let filters = this.url + '/filters';
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     let params = new URLSearchParams();
    //     let options = new RequestOptions({headers: headers, search: params});
    //     return this.http.get(filters, options)
    //     .toPromise()
    //     .then(response => response.json()　as Object)
    //     .catch(this.handleError);
    // }

    // /**
    //  * Performs a search on the users by looking at user's full names
    //  * @param searchString 
    //  */
    // searchUsers(searchString){
    //     console.log("Performing GET of users with " + searchString);
    //     let search = this.url + '/search';
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     let params = new URLSearchParams();
    //     params.set('search_string', searchString);
    //     let options = new RequestOptions({headers: headers, search: params});
    //     return this.http.get(search, options)
    //     .toPromise()
    //     .then(response => response.json()　as Object)
    //     .catch(this.handleError);
    // }


    private handleError(error: any): Promise<any> {
		console.error('WEB: An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}