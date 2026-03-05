import { Injectable } from '@nestjs/common';
import { Incident } from 'src/core/interfaces/incident.interface';
import { EmailOptions } from 'src/core/interfaces/mail-options.interface';
import { EmailService } from 'src/email/email.service';
import { generateIncidentEmailTemplate } from './templates/incident-email.template';
import { envs } from 'src/config/envs';

@Injectable()
export class IncidentsService {
    constructor(private readonly emailService : EmailService){}

    async createIncident(incident:Incident) : Promise<Boolean>{
            const template = generateIncidentEmailTemplate(incident);
            const receiver_Email = envs.RECEIVER_EMAIL;
            const options: EmailOptions={
            to: receiver_Email,
            subject: incident.title,
            html: template
        };
        const result = await this.emailService.sendEmail(options);
        return result;
    }
}
