import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface GameCardProps {
  name: string;
  arabicName: string;
  image: string;
  onPurchase: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ name, arabicName, image, onPurchase }) => {
  return (
    <div className="group relative glass-effect rounded-xl overflow-hidden hover-glow transition-all duration-500 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">{arabicName}</h3>
        <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">{name}</p>
        <button
          onClick={onPurchase}
          className="w-full bg-gaming-gradient text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 group-hover:animate-pulse"
        >
          <ShoppingCart size={20} className="animate-float" />
          <span className="font-bold">شراء الآن</span>
        </button>
      </div>
    </div>
  );
}

export default GameCard;