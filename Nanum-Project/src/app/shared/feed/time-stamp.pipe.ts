import { Pipe, PipeTransform } from '@angular/core';

import { distanceInWordsToNow } from 'date-fns';
import * as ko from 'date-fns/locale/ko';

@Pipe({
  name: 'timeStamp'
})
export class TimeStampPipe implements PipeTransform {

  transform(value: string): string {
    const origin = new Date(value);
      return distanceInWordsToNow(origin,
        { locale: ko, addSuffix: true, includeSeconds: true });
  }
}
