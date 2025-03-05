import React from 'react';
import { Coins } from 'lucide-react';

interface PriceCardProps {
  game: string;
  prices: {
    amount: string;
    price: number;
  }[];
  image: string;
  onPurchase: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({ game, prices, image, onPurchase }) => {
  return (
    <div className="glass-effect rounded-xl overflow-hidden gaming-border group hover:scale-105 transition-all duration-500">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={game} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <h3 className="absolute bottom-4 right-4 text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">{game}</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {prices.map((price, index) => (
            <div key={index} className="flex items-center justify-between group/price hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-yellow-400 animate-float" />
                <span className="text-gray-200 group-hover/price:text-gradient transition-all duration-300">{price.amount}</span>
              </div>
              <span className="text-gradient font-bold">{price.price} EGP</span>
            </div>
          ))}
        </div>
        <button
          onClick={onPurchase}
          className="mt-6 w-full bg-gaming-gradient text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 group-hover:animate-pulse"
        >
          شراء الآن
        </button>
      </div>
    </div>
  );
};

export default PriceCard;