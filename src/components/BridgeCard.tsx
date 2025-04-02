import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
interface BridgeProps {
  id: number;
  name: string;
  location: string;
  continent: string;
  type: string;
  era: string;
  year: string;
  description: string;
  image: string;
  category: string;
  facts?: string[];
  records?: string[];
}
const BridgeCard: React.FC<BridgeProps> = ({
  name,
  location,
  continent,
  type,
  era,
  year,
  description,
  image,
  facts,
  records
}) => {
  return <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-56 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <span className="text-xs font-medium bg-blue-100 text-blue-800 py-1 px-2 rounded">
            {type}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <MapPin className="w-4 h-4 mr-1" />
          <span>
            {location} ({continent})
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <span>
            {year} • {era} Era
          </span>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        {(facts || records) && <div className="border-t border-gray-100 pt-3 mt-3">
            <h4 className="font-medium text-gray-800 mb-2">
              {facts ? 'Interesting Facts' : 'Record Details'}
            </h4>
            <ul className="space-y-1">
              {(facts || records)?.slice(0, 2).map((item, index) => <li key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {item}
                </li>)}
              {(facts || records)?.length > 2 && <li className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  + {(facts || records)!.length - 2} more
                </li>}
            </ul>
          </div>}
      </div>
    </div>;
};
export default BridgeCard;