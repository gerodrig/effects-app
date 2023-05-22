import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '../models/user.model';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: Title ): string {
    if(value === '') return '';

    return value.charAt(0).toUpperCase() + value.slice(1) + '.';
  }

}
