export class Planta {
 id: number;
 name: string;
 isbn: string;
 description: string;
 image: string;
 publishingDate: any;

 constructor(
   id: number,
   name: string,
   isbn: string,
   description: string,
   image: string,
   publishingDate: any
 ) {
   this.id = id;
   this.name = name;
   this.isbn = isbn;
   this.description = description;
   this.image = image;
   this.publishingDate = publishingDate;
 }
}
