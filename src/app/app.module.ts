import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { NbSecurityModule , NbRoleProvider} from '@nebular/security';
import { ThemeModule } from './theme/theme.module';
import { NbAuthModule, NbAuthStrategyOptions, NbDummyAuthStrategy, NbPasswordAuthStrategy } from '@nebular/auth';
import { HttpClientModule } from '@angular/common/http';
import { of as observableOf } from 'rxjs';
import { NbPasswordAuthStrategyOptions } from './employee/auth';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSecurityModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbAuthModule.forRoot({

      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'email',
          delay: 3000,
        }),
      ],
      forms: {},
    }),
    NbThemeModule.forRoot({ name: 'default' }),
    ThemeModule.forRoot(),
  ],
  providers: [{
    provide: NbRoleProvider,
    useValue: {
      getRole: () => {
        // here we simply return a list of roles for current user
        return observableOf(['guest', 'user', 'editor']);
      },
    },
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
