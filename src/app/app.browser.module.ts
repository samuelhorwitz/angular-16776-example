import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Libs
import { client } from './apollo.browser';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        AppModule,
        ApolloModule.forRoot(() => client)
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppBrowserModule { }
