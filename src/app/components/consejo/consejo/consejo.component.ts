import { Component } from '@angular/core';
import { ConsejoService } from '../../../services/consejo.service';
import { Data } from '../../../interfaces/consejo';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-consejo',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './consejo.component.html',
  styleUrl: './consejo.component.css',
})
export class ConsejoComponent {
  constructor(private consejoService: ConsejoService) {}

  respuesta: Data[] = [];
  getAdvice(){
    this.consejoService.getAdvice().subscribe(this.respuesta = this.consejoService.respuesta;);

  };
}
