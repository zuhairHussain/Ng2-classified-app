System.register(['@angular/core', '@angular/platform-browser', "@angular/platform-browser-dynamic"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, platform_browser_dynamic_1;
    var Article, car, mobile, ArticleComponent, ArticleComponent2, App, AddAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            Article = (function () {
                function Article(title, dis, price) {
                    this.title = title;
                    this.dis = dis;
                    this.price = price;
                }
                return Article;
            }());
            car = (function (_super) {
                __extends(car, _super);
                function car() {
                    _super.apply(this, arguments);
                }
                return car;
            }(Article));
            mobile = (function (_super) {
                __extends(mobile, _super);
                function mobile() {
                    _super.apply(this, arguments);
                }
                return mobile;
            }(Article));
            ArticleComponent = (function () {
                function ArticleComponent() {
                }
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'cl-article',
                        host: { class: 'row' },
                        inputs: ['article'],
                        template: "\n  <div style=\"align-items: center;justify-content: center;background-color: #E6E6E6;padding: 1em;border-radius: 5px;width:100%;\">\n   <span>Title : </span> {{ article.title }}<br>\n   <span>Description : </span> {{ article.dis }}<br>\n   <span>Price : </span> {{ article.price }}<br>\n  </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            ArticleComponent2 = (function () {
                function ArticleComponent2() {
                }
                ArticleComponent2 = __decorate([
                    core_1.Component({
                        selector: 'cl-article2',
                        host: { class: 'row' },
                        inputs: ['abc'],
                        template: "\n  <div style=\"align-items: center;justify-content: center;background-color: #E6E6E6;padding: 1em;border-radius: 5px;width:100%;\">\n   <span>Title : </span> {{ abc.title }}<br>\n   <span>Description : </span> {{ abc.dis }}<br>\n   <span>Price : </span> {{ abc.price }}<br>\n  </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent2);
                return ArticleComponent2;
            }());
            App = (function () {
                function App() {
                    this.articles = [
                        new car("honda", "abcdefghi", 70000),
                        new car("suzuki", "abcdefghiabcdef", 10000)
                    ];
                    this.abcs = [
                        new mobile("samsung", "abcdefghiabcdefghi", 20000),
                    ];
                }
                App.prototype.addad = function (title, dis, price, op) {
                    var a = op.value;
                    if (a === "car") {
                        this.articles.push(new Article(title.value, dis.value, price.value));
                        title.value = 'Please insert title';
                        dis.value = 'Please insert discription';
                        price.value = 'Please insert price';
                        return false;
                    }
                    else if (a === "mobile") {
                        this.abcs.push(new Article(title.value, dis.value, price.value));
                        title.value = 'Please insert title';
                        dis.value = 'Please insert discription';
                        price.value = 'Please insert price';
                        return false;
                    }
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'clapp',
                        template: "<form class=\"ui large form segment\">\n                    <h1 class=\"ui header\">Submit an Ad</h1>\n                    <div class=\"field\">\n                    <label for=\"title\">Title:</label>\n                    <input name=\"title\" #newtitle>\n                    </div>\n                    <div class=\"field\">\n                    <label for=\"dis\">Description:</label>\n                    <input name=\"dis\" #newdis>\n                    </div>\n                    <div class=\"field\">\n                    <label for=\"price\">Price:</label>\n                    <input name=\"price\" #newprice>\n                    </div>\n                    <div class=\"field\">\n                    <label for=\"op\">Select Category:</label>\n                    <select name=\"op\" #newop>\n                      <option>car</option>\n                      <option>mobile</option>\n                    </select>\n                    </div>\n\n                    <button (click)=\"addad(newtitle, newdis, newprice, newop)\" \n                    class=\"ui positive right floated button\">\n                    Submit\n                    </button>\n\n\n                </form>\n                \n                  <div class=\"\">\n  <ul class=\"nav nav-pills\">\n    <li class=\"active\"><a data-toggle=\"pill\" href=\"#home\">Cars</a></li>\n    <li><a data-toggle=\"pill\" href=\"#menu1\">Mobiles</a></li>\n  </ul>\n  \n  <div class=\"tab-content\">\n    <div id=\"home\" class=\"tab-pane fade in active\">\n                  <div>\n                  <cl-article *ngFor=\"let article of articles\" \n                  [article]=\"article\"> \n                  </cl-article>\n                  </div>\n    </div>\n    <div id=\"menu1\" class=\"tab-pane fade\">\n                  <div>\n                  <cl-article2 *ngFor=\"let abc of abcs\" \n                  [abc]=\"abc\"> \n                  </cl-article2>\n                  </div>\n    </div>\n\n\n  </div>\n</div>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
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
            AddAppModule = (function () {
                function AddAppModule() {
                }
                AddAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [App, ArticleComponent, ArticleComponent2],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [App]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddAppModule);
                return AddAppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AddAppModule);
        }
    }
});
//# sourceMappingURL=app.js.map