System.register(['angular2/core', 'angular2/router', '../../Home/components/home', '../../Blog/components/blog', '../../About/components/about'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, blog_1, about_1;
    var AppComp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (blog_1_1) {
                blog_1 = blog_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            }],
        execute: function() {
            AppComp = (function () {
                function AppComp() {
                }
                AppComp = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: 'my-app',
                        templateUrl: './app/app/components/app.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_1.HomeComp, as: 'Home' },
                        { path: '/blog', component: blog_1.BlogComp, as: 'Blog' },
                        { path: '/about', component: about_1.AboutComp, as: 'About' },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComp);
                return AppComp;
            }());
            exports_1("AppComp", AppComp);
        }
    }
});
//# sourceMappingURL=app.js.map