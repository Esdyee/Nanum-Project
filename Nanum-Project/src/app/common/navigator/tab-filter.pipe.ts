import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabFilter'
})
export class TabFilterPipe implements PipeTransform {

  transform(tabLinks: any, status?: string) {
   // if (!tabLinks) return;

    return tabLinks.filter(tabLink => {
      switch (status) {
        case 'main' || 'answer': return tabLink.status === 'feed';
        case 'profile' || '': return tabLink.status === 'profile';
        default: return;
      }
    });
  }

}
