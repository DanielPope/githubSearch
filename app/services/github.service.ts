import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = 'd9308aacf8b204d361fd';
    private client_secret = '62551cc02cee983fff0bac41baf170eb5a312c1c';
    
    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'danielpope';
    }
    
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string) {
        this.username = username;
    }
}