import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {FuseDirective, FuseComponent, NameGetterComponent} from './core/fuse-component/fuse.component';
import {MuseComponent} from './core/muse/muse.component';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './core/layout/layout.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MailModule} from './main/apps/mail/mail.module';
import {ChatModule} from './main/apps/chat/chat.module';
import {NavigationModule} from './navigation/navigation.module';
import {ProjectModule} from './main/apps/dashboards/project/project.module';
import {SharedModule} from './core/shared.module';

const appRoutes: Routes = [
    {path: '**', redirectTo: 'apps/dashboards/project'}
];

@NgModule({
    declarations: [
        AppComponent,
        FuseComponent,
        FuseDirective,
        NameGetterComponent,
        MuseComponent,
        LayoutComponent,
        ToolbarComponent
    ],
    imports     : [
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        NavigationModule,
        MailModule,
        ChatModule,
        ProjectModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule
{
}
