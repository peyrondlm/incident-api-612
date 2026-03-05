import { Body, Controller, Post } from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import type { Incident } from 'src/core/interfaces/incident.interface';

@Controller('incidents')
export class IncidentsController {

    constructor(private readonly incidentService:IncidentsService){}

    @Post()
    async createIncident(@Body() incident: Incident) {
        const result = await this.incidentService.createIncident(incident);
        return result;
    }
}
