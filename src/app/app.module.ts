import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import {Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
import { BodyComponente } from './components/body/body.component';
import { ClientesComponent } from './clientes/clientes.component';

import { ClienteService} from './clientes/cliente.service';
import { FormClienteComponent } from './clientes/form-cliente.component';

import { ModalModule } from 'ngb-modal';


const routes:Routes=[
  {path:'', redirectTo:'/clientes', pathMatch:'full'},
  {path:'clientes', component:ClientesComponent},
  {path:'clientes/form', component:FormClienteComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponente,
    ClientesComponent,
    FormClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ModalModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
