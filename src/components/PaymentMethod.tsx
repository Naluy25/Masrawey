import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PaymentMethodProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ title, value, icon }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-effect p-6 rounded-xl hover-glow group hover:scale-105 transition-all duration-500">
      <div className="flex items-center gap-3 mb-4">
        <div className="animate-float">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">{title}</h3>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-300 font-mono group-hover:text-gradient transition-all duration-300">{value}</p>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          {copied ? (
            <Check size={16} className="text-green-400 animate-pulse" />
          ) : (
            <Copy size={16} className="text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
}

export default PaymentMethod;