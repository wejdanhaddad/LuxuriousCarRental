import { Car } from "./app/shared/models/Car";
import { Tag } from "./app/shared/models/Tag";
export const cars:Car[]=[
    {
        id: 1,
              nom: 'Audi-a3',
              prix: 100,
              favorite: false,
              imageUrl: '/assets/images/cars/audi-a3.jpg',
              tags: ['Cabriolet', 'Essence','Manuelle'],
              
            },
            {
              id: 2,
              nom: 'Audi TT',
              prix: 140,
              favorite: false,
              imageUrl: '/assets/images/cars/audi.jpg',
              tags: ['Cabriolet', 'Essence','Automatique'],
            },
            {
              id: 3,
              nom: 'BMW-x1',
              prix: 90,
              favorite: false,
              imageUrl: '/assets/images/cars/bmw-x1.jpg',
              tags: ['Cabriolet', 'Essence','Automatique'],
            },
            {
              id: 4,
              nom: 'BMW-x3',
              prix: 100,
              favorite: false,
              imageUrl: '/assets/images/cars/bmw-x3.jpg',
              tags: ['Cabriolet', 'Essence','Automatique'],
            },
            {
              id: 5,
              nom: 'BMW Sèrie 4',
              prix: 130,
              favorite: false,
              imageUrl: '/assets/images/cars/bmw.jpg',
              tags: ['Climatistion', 'Essence','Automatique'],
            },
            {
              id: 6,
              nom: 'Peugeot',
              prix: 80,
              favorite: false,
              imageUrl: '/assets/images/cars/peugeot1.jpg',
              tags: ['Cabriolet', 'Essence','Automatique'],
            },
            {
              id: 7,
              nom: 'Porsche-Taycan',
              prix: 100,
              favorite: false,
              imageUrl: '/assets/images/cars/porsche-taycan.jpg',
              tags: ['Cabriolet', 'Electrique','Automatique'],
            },
            {
            id: 8,
              nom: 'Skoda-Kodiaq',
              prix: 90,
              favorite: true,
              imageUrl: '/assets/images/cars/skoda-kodiaq.jpg',
              tags: ['Cabriolet', 'Essence','Automatique'],
            },
            {
            id: 9,
              nom: 'Tesla',
              prix: 120,
              favorite: false,
              imageUrl: '/assets/images/cars/tesla.jpg',
              tags: ['Cabriolet', 'Elictrique','Automatique'],
            },
            {
            id: 10,
              nom: 'TOYOTA',
              prix: 80,
              favorite: false,
              imageUrl: '/assets/images/cars/toyota.jpg',
              tags: ['Cabriolet', 'Essence','Automatique'],
          
            },
];
const tags:Tag[]=[
    {name:'all',count:10},
    {name:'Cabriolet',count:9},
    {name:'Essence',count:8},
    {name:'Manuelle',count:1},
    {name:'Automatique',count:8},
    {name:'Elictrique',count:1},
  ];

