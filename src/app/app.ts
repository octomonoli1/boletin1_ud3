import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('boletin1');

  public playas: string[] = ["Chipiona","Matalascañas","Caleta","Mazagon","Bolonia"];
  public notas: number[] =  [2,7,9,10,0,7,27,1,2,5];
  public edades: number[] = [18,19,19,19,26,24,20,21,35,28,45,46,59,12,18,17,19,20];
  public colores: string[] = ["verde","azul","rojo","amarillo","negro","blanco"];
  public frutas: string[] = ["Aguacate", "Banana", "Chirimoya", "Dátil", "Fresa", "Guayaba", "Kiwi", "Limón", "Naranja", "Pera", "Sandía", "Uva", "Yuca"];
  public fruta: string = "";
  public matriz1: number[][] = this.inicializa_matriz();


  public filtra_playas_pares(): string[]{
    return this.playas.filter((data, idx) => idx%2 == 0);
  }

  public obten_nota_max(): number{
    return this.notas.reduce((max, actual) => actual > max? actual: max);
    //return this.notas.reduce((max, actual) => Math.max(max,actual));
    //return Math.max(...this.notas);
  }

  public obten_nota_min(): number{
    return this.notas.reduce((min, actual) => actual < min? actual: min);
    //return this.notas.reduce((min, actual) => Math.min(min,actual));
    //return Math.min(...this.notas);
  }

  public obten_media_clase(): number{
    let edadesFiltradas: number[] = this.edades.filter(edad => edad > 18 && edad < 50);
    let result: number = edadesFiltradas.reduce((acum, edad) => acum + edad) / edadesFiltradas.length;
    return Number(result.toFixed(2));
  }

  public elimina_color(color: string): string[]{
    return this.colores.filter(data => data !== color);
  }

  public elimina_color_v2(color: string): void{
    this.colores.splice(this.colores.indexOf(color),1);
  }

  public inserta_fruta(): void{
    //Buscar donde insertarla
    let encontrado = this.frutas.length;
    for(let i = 0; i < this.frutas.length; i++){
      if(this.fruta < this.frutas[i]){
        encontrado = i;
        break;
      }
    }

    //Insertarla directamente ordenada
    this.frutas.splice(encontrado, 0, this.fruta);
  }

  private inicializa_matriz(): number[][]{
    let result: number[][] = [];

    for(let i = 0; i < 3; i++){
      let fila: number[] = [];
      for(let j = 0; j < 3; j++){
        fila.push(0);
      }
      result.push(fila);
    }

    console.log(result);
    return result;
  }


}
