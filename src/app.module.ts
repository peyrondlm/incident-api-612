import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { IncidentsService } from './incidents/incidents.service';
import { IncidentsController } from './incidents/incidents.controller';
import { IncidentsModule } from './incidents/incidents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './core/db/data-source';

@Module({
  imports: [
    EmailModule, 
    IncidentsModule, 
    TypeOrmModule.forRoot(dataSourceOptions)
  ],
  controllers: [AppController, IncidentsController],
  providers: [AppService, IncidentsService],
})
export class AppModule {}
