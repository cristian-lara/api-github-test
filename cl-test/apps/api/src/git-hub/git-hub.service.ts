import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {GithubClassBase} from './github.class';
import {API_GITHUB_URL} from './github.constants';
@Injectable()
export class GitHubService extends GithubClassBase{
  constructor(private readonly configServiceVariable: ConfigService) {
    super(configServiceVariable)
  }
  async getCommitByRepo(){
    return await this.octokit.request(API_GITHUB_URL.getCommits, this.repoCredentials);
  }
}
