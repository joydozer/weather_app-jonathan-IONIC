import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    'Cape Town, ZA',
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
    'Toronto, CA',
    'Ulsan, KR',
    'Vienna, AT',
    'Warsaw, PL',
    'Wuhan, CN',
    'Xian, CN',
    'Yokohama, JP',
    'Zhengzhou, CN'
  ];
  public results = [...this.city];
  //API
  api_key: String = 'f7039b99de808f6c99378a94461b423c';
  base_url: String = 'https://api.openweathermap.org/data/2.5/weather?lat';
  //Lat & Lon default kota Manado, diset dalam coord: [lat, lon]
  coord = [1.487, 124.8455];
  current_city: String = 'Manado, ID';
  current_weather_desc: String | undefined;
  temp: number | undefined;
  icon: String | undefined;
  bgImg: String | undefined;
  wind: number | undefined;
  pressure: number | undefined;
  humidity: number | undefined;
  searchRecommendation = false;
  weather = [];

  getWeatherInfo(): Observable<Weather> {
    return this.http.get<Weather>(`${this.base_url}=${this.coord[0]}&lon=${this.coord[1]}&units=metric&exclude=minutely,hourly,daily&appid=${this.api_key}`);
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
    else if(x == 'Bandung, ID')
      this.coord = [-6.9093, 107.6186]
    else if(x == 'Bangalore, IN')
      this.coord = [12.9762, 77.6033]
    else if(x == 'Bangkok, TH')
      this.coord = [13.75, 100.5167]
    else if(x == 'Barcelona, ES')
      this.coord = [41.3888, 2.159]
    else if(x == 'Beijing, CN')
      this.coord = [39.9075, 116.3972]
      else if(x == 'Belgrade, RS')
      this.coord = [44.804, 20.4651]
    else if(x == 'Berlin, DE')
      this.coord = [52.5244, 13.4105]
    else if(x == 'Birmingham, UK')
      this.coord = [52.4814, -1.8998]
    else if(x == 'Brisbane, AU')
      this.coord = [-27.4679, 153.0281]
    else if(x == 'Bucharest, RO')
      this.coord = [44.4323, 26.1063]
    else if(x == 'Budapest, HU')
      this.coord = [47.498, 19.0399]
    else if(x == 'Cairo, EG')
      this.coord = [30.0626, 31.2497]
    else if(x == 'Casablanca, MA')
      this.coord = [33.5928, -7.6192]
    else if(x == 'Cape Town, ZA')
      this.coord = [-33.9258, 18.4232]
    else if(x == 'Copenhagen, DK')
      this.coord = [55.6759, 12.5655]
    else if(x == 'Jakarta, ID')
      this.coord = [-6.2146, 106.8451]
    else if(x == 'Makassar, ID')
      this.coord = [-5.14, 119.4221]
    else if(x == 'Manado, ID')
      this.coord = [1.487, 124.8455]
    else if(x == 'Medan, ID')
      this.coord = [3.5833, 98.6667 ]
    else if(x == 'Moscow, RU')
      this.coord = [55.7522, 37.6156]
    else if(x == 'Nanjing, CN')
      this.coord = [32.0617, 118.7778]
    else if(x == 'New York City, US')
      this.coord = [40.7143, -74.006]
    else if(x == 'Osaka, JP')
      this.coord = [34.6937, 135.5022]
    else if(x == 'Palembang, ID')
      this.coord = [-2.9167, 104.7458]
    else if(x == 'Paris, FR')
      this.coord = [48.8534, 2.3488]
    else if(x == 'Rome, IT')
      this.coord = [41.8947, 12.4839]
    else if(x == 'San Diego, US')
      this.coord = [32.7153, -117.1573]
    else if(x == 'Semarang, ID')
      this.coord = [-6.9932, 110.4203]
    else if(x == 'Singapore, SG')
      this.coord = [1.2897, 103.8501]
    else if(x == 'Sydney, AU')
      this.coord = [-33.8679, 151.2073]
    else if(x == 'Taipei, TW')
      this.coord = [25.0478, 121.5319]
    else if(x == 'Tokyo, JP')
      this.coord = [35.6895, 139.6917]
    else if(x == 'Toronto, CA')
      this.coord = [43.7001, -79.4163]
    else if(x == 'Ulsan, KR')
      this.coord = [35.5372, 129.3167]
    else if(x == 'Vienna, AT')
      this.coord = [48.2085, 16.3721]
    else if(x == 'Warsaw, PL')
      this.coord = [52.2298, 21.0118]
    else if(x == 'Wuhan, CN')
      this.coord = [30.5833, 114.2667]
    else if(x == 'Xian, CN')
      this.coord = [34.2583, 108.9286]
    else if(x == 'Yokohama, JP')
      this.coord = [35.4478, 139.6425]
    else if(x == 'Zhengzhou, CN')
      this.coord = [34.7578, 113.6486]
    this.searchRecommendation = false;
    this.loadWeather();
  }

  async loadWeather() {
    this.getWeatherInfo().subscribe(res => {
      console.log(res);
      this.current_weather_desc = res.weather[0].description;
      this.current_weather_desc = this.current_weather_desc.charAt(0).toUpperCase() + this.current_weather_desc.slice(1);
      this.temp = res.main.temp;
      this.wind = res.wind.speed;
      this.pressure = res.main.pressure;
      this.humidity = res.main.humidity;
      this.icon = 'assets/icons_openweather/' + res.weather[0].icon + '@2x.png';
      if(res.weather[0].main == 'Rain')
        this.bgImg = 'assets/rain.jpg';
      else if(res.weather[0].main == 'Clouds')
        this.bgImg = 'assets/cloudy.jpg';
      else if(res.weather[0].main == 'Clear')
        this.bgImg = 'assets/clear.jpg';
      else if(res.weather[0].main == 'Mist')
        this.bgImg = 'assets/mist.jpg';
      else if(res.weather[0].main == 'Haze')
        this.bgImg = 'assets/haze.jpg';
      else if(res.weather[0].main == 'Thunderstorm')
        this.bgImg = 'assets/thunderstorm.jpg';
    })
  }

  ngOnInit() {
    this.loadWeather();
  }
}
