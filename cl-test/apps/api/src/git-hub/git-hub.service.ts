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
  async getCommitByRepo(perPage =10, page= 1):Promise< GithubCommitsInterface[] >{
    try {
      const paginate = await this.octokit.request(`${API_GITHUB_URL.getCommits}`, {...this.repoCredentials, per_page:perPage,page})
      return paginate.data as GithubCommitsInterface[] ;
    }catch (e){
      throw new BadRequestException(e)
    }
  }
}
