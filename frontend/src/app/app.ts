import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Importe o ChangeDetectorRef
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  mensagem = 'teste';

  // 2. Injete ele aqui no seu construtor
  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('Antes');

    this.api.getHello().subscribe({
      next: (res) => {
        console.log('NEXT');
        console.log(res);

        this.mensagem = res;

        console.log('Mensagem:', this.mensagem);
        
        // 3. Chame essa linha logo após atualizar a variável!
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.log('ERROR');
        console.error(err);
      },
      complete: () => {
        console.log('COMPLETE');
      }
    });

    console.log('Depois');
  }
}