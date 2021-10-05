import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../app/helper-files/content-interface';

@Pipe({
  name: 'articleType'
})
export class ArticleTypePipe implements PipeTransform {

   transform(contentList: Content[]): Content[]{
    return contentList.filter(c => c.type == "article");
  }

}
