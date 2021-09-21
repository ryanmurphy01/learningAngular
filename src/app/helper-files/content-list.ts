import { Content } from "./content-interface";

export class ContentList{
    private _content: Content[];

    constructor(){
        this._content = [];
    }

    get content(): Content[]{
        return this._content;
    }

    public addContent(newContent: Content){
        return this._content.push(newContent);
    }

    public numOfItems(){
        return this._content.length;
    }

    public output(input: number){

    const item = this.content[input];

    var output;

    output = "<p> Id: "+ item.id + "<br>"

             + "Author: " + item.author +"<br>"

             + "Image Url: " + item.imgUrl +"<br>"

             + "Type: " + item.type + "<br>"

             + "Title: " + item.title + "<br>"

             + "Body: " + item.body + "<br>"

             + "Tags: " + item.tags + "</p>";

    return output;


    }

}