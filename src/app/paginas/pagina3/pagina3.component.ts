import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {

  public formGroupReservas!: FormGroup;

  public dataFormulario: Array<any> = [];

  private id: number = 1;

  private idEditar: number = 0;

  public textoBoton: string = 'Reservar';


  constructor(private _builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.inicializacionFormulario();
  }

  private inicializacionFormulario(): void {
    this.formGroupReservas = this._builder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      numeroDocumento: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      fechaEntrada: ['', [Validators.required]],
      fechaSalida: ['', [Validators.required]],
    });
  }

  public guardarData(data: any): void {
    const save = {
      id: this.id,
      nombre: data.nombre,
      apellido: data.apellido,
      numeroDocumento: data.numeroDocumento,
      telefono: data.telefono,
      fechaEntrada: data.fechaEntrada,
      fechaSalida: data.fechaSalida,
    };

    if (this.idEditar !== 0) {
      save.id = this.idEditar;
      const indexEditar = this.dataFormulario.findIndex(data => data.id === this.idEditar);
      this.dataFormulario[indexEditar] = save;
      this.textoBoton = 'Reservar';
      this.idEditar = 0;
    } else {
      this.dataFormulario.push(save);
      this.id++;
    }
    this.formGroupReservas.reset();
  }

  public editar(id: number): void {
    this.textoBoton = 'Editar';
    this.idEditar = id;
    const editarForm = this.dataFormulario.find(data => data.id === id);
    this.formGroupReservas.patchValue(editarForm);
  }

  public eliminar(id: number): void {
    this.dataFormulario = this.dataFormulario.filter(data => data.id !== id);
  }

}
