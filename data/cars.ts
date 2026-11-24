
export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  location: string;
  color: string;
  image: string;
  description: string;
};

export const cars: Car[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Corolla Altis",
    year: 2022,
    price: 6250000,
    mileage: 28000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Islamabad",
    color: "White",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&q=85",
    description: "A comfortable and reliable sedan with a spacious cabin."
  },
  {
    id: "2",
    make: "Honda",
    model: "Civic Oriel",
    year: 2021,
    price: 7100000,
    mileage: 35000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Rawalpindi",
    color: "Black",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=85",
    description: "A stylish sedan with a refined interior and modern features."
  },
  {
    id: "3",
    make: "Suzuki",
    model: "Alto VXL",
    year: 2023,
    price: 2850000,
    mileage: 18000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Islamabad",
    color: "Silver",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=85",
    description: "A compact and economical car for daily city driving."
  },
  {
    id: "4",
    make: "Kia",
    model: "Sportage AWD",
    year: 2022,
    price: 7950000,
    mileage: 31000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Lahore",
    color: "Grey",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=85",
    description: "A practical SUV with a comfortable interior."
  },
  {
    id: "5",
    make: "Hyundai",
    model: "Tucson GLS",
    year: 2021,
    price: 7350000,
    mileage: 42000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Karachi",
    color: "White",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&q=85",
    description: "A family-friendly SUV with a smooth driving experience."
  },
  {
    id: "6",
    make: "Toyota",
    model: "Yaris ATIV",
    year: 2022,
    price: 4450000,
    mileage: 26000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Islamabad",
    color: "Blue",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=85",
    description: "A compact sedan suitable for everyday driving."
  },
  {
    id: "7",
    make: "Honda",
    model: "City Aspire",
    year: 2020,
    price: 3850000,
    mileage: 51000,
    fuel: "Petrol",
    transmission: "Manual",
    location: "Faisalabad",
    color: "White",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=85",
    description: "A dependable sedan with practical space."
  },
  {
    id: "8",
    make: "Toyota",
    model: "Fortuner V",
    year: 2020,
    price: 14500000,
    mileage: 65000,
    fuel: "Diesel",
    transmission: "Automatic",
    location: "Lahore",
    color: "Black",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=85",
    description: "A large SUV with a powerful road presence."
  },
  {
    id: "9",
    make: "Suzuki",
    model: "Cultus VXL",
    year: 2021,
    price: 3150000,
    mileage: 39000,
    fuel: "Petrol",
    transmission: "Manual",
    location: "Multan",
    color: "Red",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85",
    description: "A practical hatchback for everyday commuting."
  },
  {
    id: "10",
    make: "MG",
    model: "HS Essence",
    year: 2022,
    price: 7900000,
    mileage: 24000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Islamabad",
    color: "Red",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=85",
    description: "A modern crossover with a comfortable cabin."
  },
  {
    id: "11",
    make: "Toyota",
    model: "Prius S",
    year: 2019,
    price: 5600000,
    mileage: 72000,
    fuel: "Hybrid",
    transmission: "Automatic",
    location: "Karachi",
    color: "Silver",
    image: "https://images.unsplash.com/photo-1551830820-330a71b99659?w=1200&q=85",
    description: "A hybrid car designed for fuel efficiency."
  },
  {
    id: "12",
    make: "Honda",
    model: "BR-V i-VTEC",
    year: 2020,
    price: 4950000,
    mileage: 47000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Peshawar",
    color: "Grey",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=85",
    description: "A versatile family vehicle with flexible seating."
  },
  {
    id: "13",
    make: "Changan",
    model: "Alsvin Lumiere",
    year: 2023,
    price: 3950000,
    mileage: 15000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Islamabad",
    color: "Blue",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=85",
    description: "A modern compact sedan with convenient features."
  },
  {
    id: "14",
    make: "Kia",
    model: "Picanto AT",
    year: 2021,
    price: 3300000,
    mileage: 33000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Lahore",
    color: "Yellow",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&q=85",
    description: "A small automatic hatchback for city journeys."
  },
  {
    id: "15",
    make: "Toyota",
    model: "Hilux Revo",
    year: 2021,
    price: 11200000,
    mileage: 58000,
    fuel: "Diesel",
    transmission: "Manual",
    location: "Quetta",
    color: "White",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200&q=85",
    description: "A robust pickup for work and adventure."
  }
];
