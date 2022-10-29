import {Octokit as OctokitCore} from '@octokit/core';
import {ConfigService} from '@nestjs/config';
import {Octokit} from 'octokit';

export class GithubClassBase {
  octokit: OctokitCore;
  private credentials = {
    owner: 'cristian-lara',
    repo: 'api-github-test'
  }
  constructor(private readonly configService: ConfigService) {
    this.octokit = new Octokit({ auth: configService.get('GITHUB_TOKEN') });
  }

  get repoCredentials (){
    return this.credentials;
  }
}
