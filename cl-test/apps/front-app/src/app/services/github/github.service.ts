import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {GithubCommitsInterface} from "@cl-test/github";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private path = 'git-hub/';
  private readonly url!:string;
  constructor(private readonly _httpClient: HttpClient) {
    this.url = `${environment.urlAPI}${this.path}`;
  }

  getCommitsHistory(page = 1): Observable<{ total: number; data: GithubCommitsInterface[] }>{
    return this._httpClient.get<{ total: number; data: GithubCommitsInterface[] }>(this.url+'commits?page='+page);
  }
}
