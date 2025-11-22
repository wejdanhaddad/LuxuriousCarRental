import { Component } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  user = {
    nom: '',
    prenom: '',
    age: null as number | null,
    numeroTelephone: '',
    numeroCIN: '',
    adresseMail: '',
    codePostal: '',
    password: '',
    confirmPassword: '',
    preferencesVoiture: [] as string[],
    frequenceLocation: 'occasional',
    acceptTerms: false,
    newsletter: false,
    etatCompte: 0
  };

  carTypes = [
    { value: 'sports', label: 'Sports Cars', icon: 'fas fa-bolt' },
    { value: 'luxury', label: 'Luxury Sedans', icon: 'fas fa-gem' },
    { value: 'suv', label: 'SUVs', icon: 'fas fa-truck' },
    { value: 'electric', label: 'Electric', icon: 'fas fa-charging-station' }
  ];

  frequencyOptions = [
    { value: 'occasional', label: 'Occasional (1-2 times/year)', icon: 'fas fa-calendar-week' },
    { value: 'regular', label: 'Regular (3-6 times/year)', icon: 'fas fa-calendar-alt' },
    { value: 'frequent', label: 'Frequent (Monthly+)', icon: 'fas fa-calendar-day' }
  ];

  onSubmit() {
    console.log('Membership data submitted:', this.user);
    
    // Add your form submission logic here
    if (this.validateForm()) {
      // Simulate API call
      this.submitMembership();
    }
  }

  validateForm(): boolean {
    // Basic validation
    if (!this.user.nom || !this.user.prenom) {
      alert('Please fill in your name');
      return false;
    }

    if (!this.user.numeroCIN) {
      alert('CIN number is required');
      return false;
    }

    if (!this.user.adresseMail) {
      alert('Email address is required');
      return false;
    }

    if (!this.user.password) {
      alert('Password is required');
      return false;
    }

    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match');
      return false;
    }

    if (!this.user.acceptTerms) {
      alert('Please accept the terms and conditions');
      return false;
    }

    return true;
  }

  submitMembership() {
    // Simulate API call
    console.log('Submitting membership application...');
    
    // Show success message
    alert('🎉 Welcome to our Elite Club! Your membership application has been submitted successfully.');
    
    // Reset form or navigate to another page
    // this.resetForm();
  }

  resetForm() {
    this.user = {
      nom: '',
      prenom: '',
      age: null,
      numeroTelephone: '',
      numeroCIN: '',
      adresseMail: '',
      codePostal: '',
      password: '',
      confirmPassword: '',
      preferencesVoiture: [],
      frequenceLocation: 'occasional',
      acceptTerms: false,
      newsletter: false,
      etatCompte: 0
    };
  }

  toggleCarPreference(carType: string) {
    const index = this.user.preferencesVoiture.indexOf(carType);
    if (index > -1) {
      this.user.preferencesVoiture.splice(index, 1);
    } else {
      this.user.preferencesVoiture.push(carType);
    }
  }

  isCarSelected(carType: string): boolean {
    return this.user.preferencesVoiture.includes(carType);
  }

  calculatePasswordStrength(): number {
    if (!this.user.password) return 0;
    
    let strength = 0;
    if (this.user.password.length >= 8) strength += 25;
    if (/[A-Z]/.test(this.user.password)) strength += 25;
    if (/[0-9]/.test(this.user.password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(this.user.password)) strength += 25;
    
    return strength;
  }

  getPasswordStrengthText(): string {
    const strength = this.calculatePasswordStrength();
    if (strength === 0) return '';
    if (strength <= 25) return 'Weak';
    if (strength <= 50) return 'Fair';
    if (strength <= 75) return 'Good';
    return 'Strong';
  }

  getPasswordStrengthColor(): string {
    const strength = this.calculatePasswordStrength();
    if (strength <= 25) return '#EF4444';
    if (strength <= 50) return '#F59E0B';
    if (strength <= 75) return '#10B981';
    return '#8B5CF6';
  }
}