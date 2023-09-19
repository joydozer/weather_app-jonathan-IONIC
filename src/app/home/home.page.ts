import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from 'src/app/home/home.service';
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
    'Aleppo, SY',
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
  
  //Lat & Lon default kota Manado, diset dalam coord: [lat, lon]
  coord = [1.487, 124.8455];
  current_city: String = 'Manado, ID';

  bgImg: String | undefined;
  searchRecommendation = false;
  weather = [];

  getWeatherInfo(): Observable<Weather> {
    return this.http.get<Weather>(`${environment.base_url}=${this.coord[0]}&lon=${this.coord[1]}&units=metric&exclude=minutely,hourly,daily&appid=${environment.api_key}`);
  }

  handleSearch(x: any) {
    const query = x.target.value.toLowerCase();
    this.results = this.city.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

  showSearchRecommendation() {
    this.searchRecommendation = true;
  }

  handleSelect(x: String) {
    this.current_city = x;
    if(x == 'Adelaide, AU')
      this.coord = [-34.9333, 138.6]
    else if(x == 'Agra, IN')
      this.coord = [27.1833, 78.0167]
    else if(x == 'Ahmadabad, IN')
      this.coord = [23.0333, 72.6167]
    else if(x == 'Aleppo, SY')
      this.coord = [36.25, 37.5]
    else if(x == 'Alexandria, EG')
      this.coord = [31.2156, 29.9553]
    this.searchRecommendation = false;
    this.loadWeather();
  }

  async loadWeather() {
    this.getWeatherInfo().subscribe(res => {
      console.log(res.weather[0].main);
      if(res.weather[0].main == 'Clouds')
        this.bgImg = 'assets/cloudy.jpg';
      else if(res.weather[0].main == 'Clear')
        this.bgImg = 'assets/clear.jpg';
      else if(res.weather[0].main == 'Mist')
        this.bgImg = 'assets/mist.jpg';
    })
  }

  ngOnInit() {
    this.loadWeather();
  }
}
