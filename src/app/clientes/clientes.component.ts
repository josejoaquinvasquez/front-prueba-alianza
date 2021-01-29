import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ModalManager } from 'ngb-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  cliente:Cliente = new Cliente();
  titulo:string="Lista de Clientes";
  prueba:string="Esto es una prueba de mi componente cliente";
  clientes:Cliente[];
  listaUnCliente:Cliente[];

  constructor(private clienteService:ClienteService,
              private modalService: ModalManager,
              private router:Router) {
  
  


   }

  ngOnInit(): void {
    this.cargarGrilla();
    this.cliente.startDate = Date.toString();
    this.cliente.endDate = Date.toString();

  }

  cargarGrilla():void{
    this.clienteService.getAll().subscribe(
      e=> this.clientes = e
    );
  }

  consultarunCliente(sk:string){
    console.log(sk);
    this.clienteService.get(sk).subscribe(
      e=> this.listaUnCliente = e
    );
  }


  create():void{
    this.clienteService.create(this.cliente).subscribe(
      res=>this.cargarGrilla()
    );
    this.cliente.phone="";
    this.cliente.sharedKey="";
    this.cliente.email="";
    this.cliente.name="";
    this.cliente.startDate = Date.toString();
    this.cliente.endDate = Date.toString();
    
  }


}
