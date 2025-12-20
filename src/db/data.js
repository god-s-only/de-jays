import { FaWifi, FaCoffee, FaBath, FaParking, FaSwimmingPool, FaHotdog, FaStopwatch, FaCocktail } from 'react-icons/fa';
import images from '../assets';

export const roomData = [
  {
    id: 1,
    name: 'Single Room',
    description:
      'The Single Room is thoughtfully designed for individual guests seeking a quiet and comfortable stay. It offers a cozy sleeping area with essential amenities, making it ideal for short stays or business trips where simplicity and convenience matter.',
    facilities: [
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 30,
    maxPerson: 1,
    price: 7000,
    image: images.Room1Img,
    imageLg: images.Room1ImgLg,
  },
  {
    id: 2,
    name: 'Standard Room',
    description:
      'The Standard Room offers a well-appointed space with essential amenities for everyday comfort. Ideal for solo travelers or couples, it features a cozy bed, a work desk, air conditioning, and a modern bathroom. A perfect choice for guests seeking quality accommodation at great value.',
    facilities: [
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 70,
    maxPerson: 2,
    price: 10000,
    image: images.Room2Img,
    imageLg: images.Room2ImgLg,
  },
  {
    id: 3,
    name: 'Executive Room',
    description:
      'The Executive Room provides a more spacious layout with refined interiors, making it ideal for business travelers and guests who prefer extra comfort. Enjoy upgraded furnishings, a larger bed, a dedicated seating area, and enhanced in-room amenities for a more premium stay.',
    facilities: [
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 70,
    maxPerson: 2,
    price: 10000,
    image: images.Room3Img,
    imageLg: images.Room3ImgLg,
  },
  {
    id: 4,
    name: 'Executive Room',
    description:
      'The Executive Room provides a more spacious layout with refined interiors, making it ideal for business travelers and guests who prefer extra comfort. Enjoy upgraded furnishings, a larger bed, a dedicated seating area, and enhanced in-room amenities for a more premium stay.',
    facilities: [
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 70,
    maxPerson: 2,
    price: 10000,
    image: images.Room4Img,
    imageLg: images.Room4ImgLg,
  },
  {
    id: 5,
    name: 'Executive Room',
    description:
      'The Executive Room provides a more spacious layout with refined interiors, making it ideal for business travelers and guests who prefer extra comfort. Enjoy upgraded furnishings, a larger bed, a dedicated seating area, and enhanced in-room amenities for a more premium stay.',
    facilities: [
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 70,
    maxPerson: 2,
    price: 10000,
    image: images.Room5Img,
    imageLg: images.Room5ImgLg,
  },
  {
    id: 6,
    name: 'Deluxe Room',
    description:
      'The Deluxe Room offers a luxurious and spacious retreat with stylish décor and top-tier amenities. Designed for guests who appreciate extra indulgence, it features a refined ambiance, superior bedding, an enhanced bathroom, and additional comforts for a truly relaxing stay.',
    facilities: [
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 90,
    maxPerson: 6,
    price: 20000,
    image: images.Room6Img,
    imageLg: images.Room6ImgLg,
  },
  {
    id: 7,
    name: 'Deluxe Room',
    description:
      'The Deluxe Room offers a luxurious and spacious retreat with stylish décor and top-tier amenities. Designed for guests who appreciate extra indulgence, it features a refined ambiance, superior bedding, an enhanced bathroom, and additional comforts for a truly relaxing stay.',
    facilities: [
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 84,
    maxPerson: 7,
    price: 20000,
    image: images.Room7Img,
    imageLg: images.Room7ImgLg,
  },
  {
    id: 8,
    name: 'Deluxe Room',
    description:
      'The Deluxe Room offers a luxurious and spacious retreat with stylish décor and top-tier amenities. Designed for guests who appreciate extra indulgence, it features a refined ambiance, superior bedding, an enhanced bathroom, and additional comforts for a truly relaxing stay.',
    facilities: [
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 48,
    maxPerson: 8,
    price: 20000,
    image: images.Room8Img,
    imageLg: images.Room8ImgLg,
  },
];
