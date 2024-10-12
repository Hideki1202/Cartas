import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-topo',
  templateUrl: './card-topo.component.html',
  styleUrl: './card-topo.component.css'
})
export class CardTopoComponent {
  @Input() nome:string= "PESSOA"
  @Input() dicas:string= "ldadsadsadsadsa"
  @Input() isVirado: boolean = false;

  virar() {
    this.isVirado = !this.isVirado; // Toggle the 'virado' state
    console.log("Virado: ", this.isVirado);
  }

}
