import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../app/helper-files/content-interface';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(contentList: Content[]): Content[]{
    return contentList.filter(c => c.type == "book");
  }

}
