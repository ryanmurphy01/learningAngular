import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../app/helper-files/content-interface';

@Pipe({
  name: 'articleType'
})
export class ArticleTypePipe implements PipeTransform {

   transform(contentList: Content[], type: string): Content[]{
    return contentList.filter(item => item.type == type);
  }

}
