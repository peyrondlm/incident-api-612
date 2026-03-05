import { Module } from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { IncidentsController } from './incidents.controller';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [EmailModule],
  providers: [IncidentsService],
  controllers: [IncidentsController]
})
export class IncidentsModule {}