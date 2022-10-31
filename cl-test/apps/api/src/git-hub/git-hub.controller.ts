import {Controller, Get, Query} from '@nestjs/common';
import {GitHubService} from './git-hub.service';

@Controller('git-hub')
export class GitHubController {
  constructor(private readonly githubService: GitHubService) {
  }
  @Get('commits')
  getCommitsByRepo(@Query('per_page') perPage: number, @Query('page') page: number){
    return this.githubService.getCommitByRepo(perPage, page);
  }
}
