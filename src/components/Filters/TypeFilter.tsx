import React from 'react';
import { Layers } from 'lucide-react';
interface TypeFilterProps {
  types: string[];
  selectedType: string;
  onChange: (type: string) => void;
}
const TypeFilter: React.FC<TypeFilterProps> = ({
  types,
  selectedType,
  onChange
}) => {
  return <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Layers className="h-5 w-5 text-gray-400" />
      </div>
      <select className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none" value={selectedType} onChange={e => onChange(e.target.value)}>
        {types.map(type => <option key={type} value={type}>
            {type}
          </option>)}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>;
};
export default TypeFilter;