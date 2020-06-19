import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() {
      this.user = {
        nombre: '',
        apellidos: '',
        bio: '',
        genero: ''
     
      }

   }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Formulario en!!");
    console.log(this.user);
  }

  hasDadoClick(){
    alert('Has dado Click')
  }

  hasSalido(){
    alert('Has salido')
  }

}
