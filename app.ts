import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig,RouterOutlet} from 'angular2/router';

import {HomeComp} from '../../Home/components/home';
import {BlogComp} from '../../Blog/components/blog';
import {AboutComp} from '../../About/components/about'


@Component({
    directives:[ROUTER_DIRECTIVES],
    selector:'my-app',
    templateUrl: './app/app/components/app.html'
})

@RouteConfig([
    {path:'/',component:HomeComp, as:'Home'},
    {path:'/blog',component:BlogComp, as:'Blog'},
    {path:'/about',component:AboutComp, as:'About'},
])

export class AppComp {
constructor() {
        
    }
}