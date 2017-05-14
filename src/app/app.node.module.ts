import { NgModule, Pipe } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ApolloModule } from 'apollo-angular';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Libs
import { client } from './apollo.node';

// Angular #16776 NOTE: WHEN YOU UNCOMMENT THIS IT WORKS
// ApolloModule['decorators'][0].type = NgModule;
// ApolloModule['decorators'][0].args[0].declarations[0].decorators[0].type = Pipe;

@NgModule({
    imports: [
        ServerModule,
        NoopAnimationsModule,
        AppModule,
        ApolloModule.forRoot(() => client)
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
    ]
})
export class AppServerModule {
    constructor() {
        client.store = undefined;
        client.initStore();
    }
}
