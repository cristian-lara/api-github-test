import { Module } from '@nestjs/common';
import { GitHubService } from './git-hub.service';
import { GitHubController } from './git-hub.controller';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [GitHubService],
  controllers: [GitHubController],
})
export class GitHubModule {}
