import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private path = 'git-hub';
  private url!:string;
  constructor(private readonly _httpClient: HttpClient) {
    this.url = `${environment.urlAPI}${this.path}`;
  }

  getCommitsHistory(){}
}
