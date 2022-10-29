import {Controller, Get} from '@nestjs/common';
import {GitHubService} from './git-hub.service';

@Controller('git-hub')
export class GitHubController {
  constructor(private readonly githubService: GitHubService) {
  }
  @Get('commits')
  getCommitsByRepo(){
    return this.githubService.getCommitByRepo();
  }
}
