import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatDate' })
export class FormatDate implements PipeTransform {
    transform(value: any): any {
        const parsedDate = new Date(value);
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        return parsedDate.toLocaleTimeString('en-UK', options);
    }
}
