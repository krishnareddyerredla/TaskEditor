import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTasks,faCogs,fas, faPlus,faCheck,faForward,faCircle, faEdit} from '@fortawesome/free-solid-svg-icons';
import { LeftnavComponent } from './nav/leftnav/leftnav.component';
import {RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskModelComponent } from './shared/task-model/task-model.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

library.add(faTasks,faCogs,fas,faPlus,faCheck,faForward,faCircle, faEdit);

const appRoutes: Routes = [
  { path: 'tasks', component: TaskListComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftnavComponent,    
    TaskListComponent,
    TaskModelComponent   
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false }),
    NgbModule,    
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TaskModelComponent
  ]
})
export class AppModule { }

