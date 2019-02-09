import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatDate' })
export class FormatDate implements PipeTransform {
    transform(value: any): any {
        const parsedDate = new Date(value).toUTCString();
        // Remove the time and timezone
        return parsedDate.split(' ').slice(0, 4).join(' ');
    }
}
