import './rxjs-operators';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Modules
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
import ApolloClient from 'apollo-client';

// Routes
import { IndexRoutes } from './components/index/index.routes';

// Components
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: 'angular-16776-example'
        }),
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            ...IndexRoutes,
        ]),
    ],
    declarations: [
        AppComponent,
        IndexComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
