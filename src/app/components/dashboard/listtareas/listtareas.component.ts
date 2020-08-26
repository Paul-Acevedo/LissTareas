import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtareas',
  templateUrl: './listtareas.component.html',
  styleUrls: ['./listtareas.component.css']
})
export class ListtareasComponent implements OnInit {

  listareas:any[] = [];

  tarea:any = '';

  constructor() { }

  ngOnInit(): void {
  }


  agregatTarea(){
   
   const tarea = {
     nombre: this.tarea,
     finalizada: false
   };

   this.listareas.push(tarea);
   this.tarea = '';

  }

  eliminar(id:number){
    this.listareas.splice(id,1);
  }

actualizar(tarea,id:number){
  this.listareas[id].finalizada = !tarea.finalizada;
}

}
