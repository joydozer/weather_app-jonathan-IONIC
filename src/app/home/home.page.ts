import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private http: HttpClient) {

  }

  //Data 2018 kota untuk diambil latitude dan longitude, berdasarkan kota pada link dibawah:
  //http://www.citymayors.com/statistics/largest-cities-alphabetical.html

  public city = [
    'Adelaide, AU',
    'Agra, IN',
    'Ahmadabad, IN',
    'Allepo, SY',
    'Alexandria, EG',
    'Bandung, ID',
    'Bangalore, IN',
    'Bangkok, TH',
    'Barcelona, ES',
    'Beijing, CN',
    'Belgrade, RS',
    'Berlin, DE',
    'Birmingham, UK',
    'Brisbane, AU',
    'Bucharest, RO',
    'Budapest, HU',
    'Cairo, EG',
    'Casablanca, MA',
    'Capetown, ZA',
    'Copenhagen, DK',
    'Jakarta, ID',
    'Makassar, ID',
    'Manado, ID',
    'Medan, ID',
    'Moscow, RU',
    'Nanjing, CN',
    'New York City, US',
    'Osaka, JP',
    'Palembang, ID',
    'Paris, FR',
    'Rome, IT',
    'San Diego, US',
    'Semarang, ID',
    'Singapore, SG',
    'Sydney, AU',
    'Taipei, TW',
    'Tokyo, JP',
    'Torronto, CA',
    'Ulsan, KR',
    'Vienna, AT',
    'Warsaw, PL',
    'Wuhan, CN',
    'Xian, CN',
    'Yokohama, JP',
    'Zhengzhou, CN'
  ];
  public results = [...this.city];
  
  //Lat & Lon default kota Manado
  latitude: number = 1.487;
  longitude: number = 124.8455;
  current_city: String = 'Manado, ID';

  bgImg: String | undefined;

  weather = [];

  getWeatherInfo(): Observable<any> {
    return this.http.get(`${environment.base_url2}&appid=${environment.api_key}`);
  }

  handleSearch(x: any) {
    const query = x.target.value.toLowerCase();
    this.results = this.city.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

  handleSelect(x: String) {
    console.log(x);
    this.current_city = x;
  }

  ngOnInit() {
    this.getWeatherInfo().subscribe(res => {
      console.log(res);
    })
  }
}
