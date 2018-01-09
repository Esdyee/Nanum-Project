import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStamp'
})
export class TimeStampPipe implements PipeTransform {

  transform(value: string): string {
    const NOW = new Date();
    const origin = new Date(value);
    const DATE_DIFF = Math.ceil((Date.now() - origin.getTime()) / (1000 * 60 * 60 * 24));
    if (DATE_DIFF === 1) {
      const HOUR = NOW.getHours() - origin.getHours();
      return HOUR > 1 ? `${HOUR}시간 전` : `방금 전`;
    } else if (DATE_DIFF < 7) {
      const DATES = NOW.getDate() - origin.getDate();
      return `${DATES}일 전`;
    } else {
      return `${origin.getFullYear()}-${origin.getMonth() + 1}-${origin.getDate()}`;
    }
  }

}
