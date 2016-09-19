// your code goes here
import {
NgModule,
Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


class Article { 
  title: string;  
  dis: string;  
  price: number; 
  
  constructor(title: string, dis: string, price: number) {
     this.title = title;
      this.dis = dis; 
      this.price = price;
    }  
}

class car extends Article{



}
class mobile extends Article{



}

@Component({
  selector: 'cl-article',
  host: {class: 'row'},
  inputs: ['article'],
  template: `
  <div style="align-items: center;justify-content: center;background-color: #E6E6E6;padding: 1em;border-radius: 5px;width:100%;">
   <span>Title : </span> {{ article.title }}<br>
   <span>Description : </span> {{ article.dis }}<br>
   <span>Price : </span> {{ article.price }}<br>
  </div>

  `
})

class  ArticleComponent  {
  article: Article;
}

@Component({
  selector: 'cl-article2',
  host: {class: 'row'},
  inputs: ['abc'],
  template: `
  <div style="align-items: center;justify-content: center;background-color: #E6E6E6;padding: 1em;border-radius: 5px;width:100%;">
   <span>Title : </span> {{ abc.title }}<br>
   <span>Description : </span> {{ abc.dis }}<br>
   <span>Price : </span> {{ abc.price }}<br>
  </div>

  `
})

class  ArticleComponent2  {
  abc : Article ;
}



@Component({
  selector: 'clapp',
  template: `<form class="ui large form segment">
                    <h1 class="ui header">Submit an Ad</h1>
                    <div class="field">
                    <label for="title">Title:</label>
                    <input name="title" #newtitle>
                    </div>
                    <div class="field">
                    <label for="dis">Description:</label>
                    <input name="dis" #newdis>
                    </div>
                    <div class="field">
                    <label for="price">Price:</label>
                    <input name="price" #newprice>
                    </div>
                    <div class="field">
                    <label for="op">Select Category:</label>
                    <select name="op" #newop>
                      <option>car</option>
                      <option>mobile</option>
                    </select>
                    </div>

                    <button (click)="addad(newtitle, newdis, newprice, newop)" 
                    class="ui positive right floated button">
                    Submit
                    </button>


                </form>
                
                  <div class="">
  <ul class="nav nav-pills">
    <li class="active"><a data-toggle="pill" href="#home">Cars</a></li>
    <li><a data-toggle="pill" href="#menu1">Mobiles</a></li>
  </ul>
  
  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
                  <div>
                  <cl-article *ngFor="let article of articles" 
                  [article]="article"> 
                  </cl-article>
                  </div>
    </div>
    <div id="menu1" class="tab-pane fade">
                  <div>
                  <cl-article2 *ngFor="let abc of abcs" 
                  [abc]="abc"> 
                  </cl-article2>
                  </div>
    </div>


  </div>
</div>
                `
})
class App {
    articles: Article[];
    abcs : Article[] ;
  

  constructor(){
    this.articles = [ 
      new car("honda","abcdefghi", 70000),
      new car("suzuki","abcdefghiabcdef", 10000)
    ];
    this.abcs = [ 
      new mobile("samsung","abcdefghiabcdefghi", 20000),   
    ];
  }

addad(title: HTMLInputElement, dis: HTMLInputElement, price: HTMLInputElement, op:HTMLInputElement){
  let a : any = op.value;

  if(a==="car"){
    this.articles.push(new Article(title.value, dis.value, price.value));
    title.value = 'Please insert title';
    dis.value = 'Please insert discription';
    price.value = 'Please insert price';
    return false;
  }
  else if(a==="mobile"){
    this.abcs.push(new Article(title.value, dis.value, price.value));
    title.value = 'Please insert title';
    dis.value = 'Please insert discription';
    price.value = 'Please insert price';
    return false;
  }
    
}
}




// class Ad { 
//   title: string;  
//   dis: string;  
//   price: number; 
  
//   constructor(title: string, dis: string, price: number) {
//      this.title = title;
//       this.dis = dis; 
//       this.price = price;
//     }  
// }


// @Component({
//   selector: 'add-row',
//   inputs: ['ads'],
//   template: `
//   <div class="four wide column center aligned votes">
//    {{ ads.title }}
//    {{ ads.dis }}
//    {{ ads.price }}
//   </div>
//   `
// })

// class add  {
//   ads:Ad[];

//   constructor(){
//     this.ads = [ 
//       new Ad("Car","AsaD sdsa dasdasdas dsd", 20000),
//       new Ad("Car","AsaD sdsa dasdasdas dsd", 20000),
//       new Ad("Car","AsaD sdsa dasdasdas dsd", 20000)
//     ];
//   }

// }



// @Component({
//   selector: 'app',
//   template: `<form class="ui large form segment">
//                     <h3 class="ui header">Add a Link</h3>
//                     <div class="field">
//                     <label for="title">Title:</label>
//                     <input name="title" #newtitle>
//                     </div>
//                     <div class="field">
//                     <label for="dis">Discription:</label>
//                     <input name="dis" #newdis>
//                     </div>
//                     <div class="field">
//                     <label for="price">Price:</label>
//                     <input name="price" #newprice>
//                     </div>

//                     <button (click)="addad(newtitle, newdis, newprice)" 
//                     class="ui positive right floated button">
//                     Submit
//                     </button>


//                 </form>
                
//                 <div class="ui grid posts"> 
//                 <add-row
//                 *ngFor="let article of articles" [article]="article">  </add-row> 
//                 </div>
//                 `
// })

// class AdApp {
// addad(title: HTMLInputElement, dis: HTMLInputElement, price: HTMLInputElement){
//   console.log(`Adding Ad title: ${title.value} discription: ${dis.value} price: ${price.value}`); 
//   return false;
// }
// }



@NgModule({
    declarations: [App, ArticleComponent, ArticleComponent2 ],
    imports: [BrowserModule],
    bootstrap: [App]
})

class AddAppModule  {

}
platformBrowserDynamic().bootstrapModule(AddAppModule);