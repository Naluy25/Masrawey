import React from 'react';
import { Shield, Star } from 'lucide-react';

interface AccountCardProps {
  game: string;
  details: string[];
  price: number;
  image: string;
  rating: number;
  onPurchase: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ game, details, price, image, rating, onPurchase }) => {
  return (
    <div className="glass-effect rounded-xl overflow-hidden gaming-border group hover:scale-105 transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={game} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-4 right-4 left-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">{game}</h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 transition-all duration-300 ${i < rating ? 'text-yellow-400 fill-yellow-400 animate-pulse' : 'text-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-2 mb-4">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300 group/item hover:scale-105 transition-all duration-300">
              <Shield className="w-4 h-4 text-green-400 animate-float" />
              <span className="group-hover/item:text-gradient transition-all duration-300">{detail}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400">السعر:</span>
          <span className="text-2xl font-bold text-gradient animate-pulse">{price} EGP</span>
        </div>
        <button
          onClick={onPurchase}
          className="w-full bg-gaming-gradient text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 group-hover:animate-pulse"
        >
          شراء الحساب
        </button>
      </div>
    </div>
  );
};

export default AccountCard;