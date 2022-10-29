import {BadRequestException, Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {GithubClassBase} from './github.class';
import {API_GITHUB_URL} from './github.constants';
import {GithubCommitsInterface} from "@cl-test/github";
@Injectable()
export class GitHubService extends GithubClassBase{
  constructor(private readonly configServiceVariable: ConfigService) {
    super(configServiceVariable)
  }
  async getCommitByRepo():Promise<GithubCommitsInterface>{
    try {
      const response = await this.octokit.request(API_GITHUB_URL.getCommits, this.repoCredentials)
      return  response.data as GithubCommitsInterface ;
    }catch (e){
      throw new BadRequestException(e)
    }
  }
}
