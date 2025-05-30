import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hero: { image: string } | null = null;
  gridImages: string[] = [
    'pexels-jonaorle-3828245.jpg',
    'pexels-callmehuyuno-347917.jpg',
    'pexels-ralph-rabago-3214683.jpg'
  ];
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    document.title = 'Freaky Fashion';

    this.http.get<{ image: string }>('http://localhost:3000/api/hero').subscribe({
      next: (data) => this.hero = data,
      error: () => console.error('Kunde inte ladda hero-sektionen.')
    });
    
    this.http.get<Product[]>('http://localhost:3000/api/products').subscribe({
      next: (data) => this.products = data,
      error: () => console.error('Kunde inte hämta produkter.')
    });
  }
}