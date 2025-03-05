import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="glass-effect rounded-xl p-6 hover-glow group hover:scale-105 transition-all duration-500">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500 animate-float">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">{title}</h3>
        <p className="text-gray-300 opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-1">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;