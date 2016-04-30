import {enableProdMode} from 'angular2/core';
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy,HashLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {AppComp} from './app/components/app';

enableProdMode();
bootstrap (AppComp,[
    ROUTER_PROVIDERS,
    provide(LocationStrategy,{useClass:HashLocationStrategy}),
    provide(APP_BASE_HREF,{useValue:'/'})
]);