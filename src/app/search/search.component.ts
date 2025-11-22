import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string = "";
  showSuggestions: boolean = false;
  isLoading: boolean = false;

  suggestions: string[] = [
    "Mercedes-Benz Classe S",
    "BMW Série 7",
    "Audi A8 L",
    "Porsche 911 Turbo S",
    "Ferrari F8 Tributo",
    "Lamborghini Huracan Evo",
    "Rolls Royce Ghost",
    "Bentley Flying Spur",
    "Aston Martin DB11",
    "Maserati Quattroporte"
  ];

  premiumCollections = [
    { name: "Supercars", icon: "fas fa-bolt", value: "supercar" },
    { name: "Berlines", icon: "fas fa-car", value: "berline" },
    { name: "SUV Premium", icon: "fas fa-truck", value: "suv" },
    { name: "Cabriolets", icon: "fas fa-sun", value: "cabriolet" },
    { name: "Électrique", icon: "fas fa-charging-station", value: "electrique" },
    { name: "Limousines", icon: "fas fa-star", value: "limousine" }
  ];

  get filteredSuggestions(): string[] {
    if (!this.searchTerm) return [];
    return this.suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(this.searchTerm.toLowerCase())
    ).slice(0, 5);
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    });
  }

  onInputChange(): void {
    this.showSuggestions = this.searchTerm.length > 0;
  }

  search(): void {
    if (this.searchTerm.trim()) {
      this.isLoading = true;
      this.showSuggestions = false;
      
      setTimeout(() => {
        this.router.navigate(['/search', this.searchTerm.trim()]);
        this.isLoading = false;
      }, 600);
    }
  }

  selectSuggestion(suggestion: string): void {
    this.searchTerm = suggestion;
    this.search();
  }

  selectCollection(collection: any): void {
    this.searchTerm = collection.name;
    this.search();
  }

  clearSearch(): void {
    this.searchTerm = "";
    this.showSuggestions = false;
    this.router.navigate(['/']);
  }
}