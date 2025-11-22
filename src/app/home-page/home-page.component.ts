import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car/car.service';
import { Car } from '../shared/models/Car';
import { ActivatedRoute } from '@angular/router';

// Extended interface for UI enhancements
interface CarWithUI extends Car {
  transmission: string;
  seats: number;
  fuelType: string;
  discount: number;
  originalPrice: number;
  trending: boolean;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent implements OnInit {

  cars: CarWithUI[] = [];
  isLoading: boolean = true;
  currentView: 'grid' | 'list' = 'grid';

  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.isLoading = true;
      
      setTimeout(() => {
        let loadedCars: Car[];
        
        if (params['searchTerm'])
          loadedCars = this.carService.getAllCarsBySearchTerm(params['searchTerm']);
        else if (params['tag'])
          loadedCars = this.carService.getAllCarsByTag(params['tag']);
        else
          loadedCars = this.carService.getAll();
        
        // Enhance the cars with UI properties
        this.cars = this.enhanceCarsWithUIProperties(loadedCars);
        this.isLoading = false;
      }, 500);
    });
  }

  private enhanceCarsWithUIProperties(cars: Car[]): CarWithUI[] {
    return cars.map(car => {
      // Generate UI-specific properties based on car data
      const discount = this.calculateDiscount(car);
      const originalPrice = discount > 0 ? car.prix * (1 + discount / 100) : 0;
      
      return {
        ...car,
        transmission: this.getTransmission(car),
        seats: this.getSeats(car),
        fuelType: this.getFuelType(car),
        discount: discount,
        originalPrice: originalPrice,
        trending: this.isTrending(car)
      };
    });
  }

  private calculateDiscount(car: Car): number {
    // Base discount on price or other factors
    if (car.prix > 500) {
      return Math.random() > 0.5 ? 15 : 0; // 50% chance for expensive cars
    } else if (car.prix > 200) {
      return Math.random() > 0.7 ? 10 : 0; // 30% chance for mid-range cars
    }
    return 0;
  }

  private getTransmission(car: Car): string {
    // Determine transmission based on car type/name
    const luxuryCars = ['Mercedes', 'BMW', 'Audi', 'Porsche'];
    const sportsCars = ['Ferrari', 'Lamborghini', 'McLaren'];
    
    const carName = car.nom.toLowerCase();
    
    if (sportsCars.some(brand => carName.includes(brand.toLowerCase()))) {
      return 'Automatic';
    } else if (luxuryCars.some(brand => carName.includes(brand.toLowerCase()))) {
      return Math.random() > 0.3 ? 'Automatic' : 'Semi-Auto';
    }
    
    return 'Automatic';
  }

  private getSeats(car: Car): number {
    // Determine seats based on car type
    const sportsCars = ['Ferrari', 'Lamborghini', 'Porsche', 'McLaren'];
    const suvs = ['SUV', 'X5', 'X7', 'GLE', 'Q7'];
    
    const carName = car.nom.toLowerCase();
    
    if (sportsCars.some(brand => carName.includes(brand.toLowerCase()))) {
      return 2;
    } else if (suvs.some(model => carName.includes(model.toLowerCase()))) {
      return 7;
    }
    
    return 4;
  }

  private getFuelType(car: Car): string {
    // Determine fuel type based on car characteristics
    const electricCars = ['Tesla', 'Rivian', 'Lucid'];
    const hybridCars = ['Prius', 'Hybrid'];
    
    const carName = car.nom.toLowerCase();
    
    if (electricCars.some(brand => carName.includes(brand.toLowerCase()))) {
      return 'Electric';
    } else if (hybridCars.some(model => carName.includes(model.toLowerCase()))) {
      return 'Hybrid';
    } else if (car.prix > 300) {
      return 'Premium';
    }
    
    return 'Regular';
  }

  private isTrending(car: Car): boolean {
    // Determine if car is trending based on various factors
    const trendingBrands = ['Tesla', 'Porsche', 'BMW', 'Mercedes'];
    const isExpensive = car.prix > 400;
    const isPopularBrand = trendingBrands.some(brand => 
      car.nom.toLowerCase().includes(brand.toLowerCase())
    );
    
    return isPopularBrand || (isExpensive && Math.random() > 0.5);
  }

  toggleFavorite(car: CarWithUI): void {
    car.favorite = !car.favorite;
    // In a real app, you'd call a service to update this in the backend
    console.log(`Toggled favorite for ${car.nom}: ${car.favorite}`);
  }

  quickView(car: CarWithUI): void {
    // Implement quick view modal logic here
    console.log('Quick view for:', car);
    // You can open a modal or navigate to a quick view page
  }

  rentNow(car: CarWithUI): void {
    // Implement rent now logic here
    console.log('Renting car:', car);
    // Navigate to booking page or open booking modal
  }

  switchView(view: 'grid' | 'list'): void {
    this.currentView = view;
  }

  loadMore(): void {
    // Implement load more functionality
    console.log('Loading more cars...');
    // You would typically call a service to load more cars
  }
}