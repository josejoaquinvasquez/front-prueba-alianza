import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {
  cliente:Cliente = new Cliente();
  titulo:string="Registro de Cliente";

  constructor(private clienteService:ClienteService,private router:Router) { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      res=>this.router.navigate(['/clientes'])
    );
  }
}
