///<reference path="./../typings/browser.d.ts"/>
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {App} from './app';
import {HTTP_PROVIDERS} from '@angular/http'

bootstrap(App, [HTTP_PROVIDERS]);