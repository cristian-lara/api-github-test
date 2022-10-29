import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class GitHubService {
  constructor(private readonly configService: ConfigService) {
  }

  getCommitByRepo(){
    return 'ok'
  }
}
