(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
      	<h1 (click)="demo()">My First Angular 2 App11</h1>
		<input [(ngModel)]="hero.name">
		{{hero.name}}
      	`
    })
    .Class({
      constructor: function() {
      	console.log(this);
      	this.hero = {};
      	this.demo = function(){
      		alert(123);
      	}
      }
    });
    // ng.router.Routes([{path: '/index', component: CrisisListComponent}])
})(window.app || (window.app = {}));
