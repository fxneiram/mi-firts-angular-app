import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  peliculas = [
    {
      id: 0,
      movie_name: 'Start Wars I',
      anio: '1989',
      img: 'https://vignette.wikia.nocookie.net/es.starwars/images/d/dd/Star_Wars_epI.jpg'
    },
    {
      movie_name: 'Start Wars II',
      anio: '1990',
      img: 'https://vignette.wikia.nocookie.net/es.starwars/images/7/7c/Episode_two_poster.jpg'
    },
    {
      movie_name: 'Start Wars III',
      anio: '1991',
      img: 'https://observandocine.com/wp-content/uploads/2015/11/star-wars-iii.jpg'
    },
    {
      movie_name: 'Start Wars IV',
      anio: '1992',
      img: 'https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg'
    },
    {
      movie_name: 'Start Wars V',
      anio: '1993',
      img: 'https://i.pinimg.com/originals/10/c2/f2/10c2f2302f9c8d618e6f2258eda4be3b.jpg'
    },
    {
      movie_name: 'Start Wars VI',
      anio: '1994',
      img: 'https://a.wattpad.com/cover/200558912-352-k606182.jpg'
    }
  ];
  empleados;
  error;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees').subscribe(respuestaApi => {
      this.empleados = respuestaApi.data;
    }, error => this.error = error);
  }
/*
  empleadoPorId(id: string){
    this.http.get<any>('http://dummy.restapiexample.com/api/v1/employee/' + id).subscribe(respuestaApi => {
      this.empleado = respuestaApi.data;
    }, error => this.error = error);
  }*/
}
