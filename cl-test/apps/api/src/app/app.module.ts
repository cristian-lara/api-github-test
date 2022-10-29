import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import {GitHubModule} from '../git-hub/git-hub.module';

@Module({
  imports: [ConfigModule.forRoot(), GitHubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
