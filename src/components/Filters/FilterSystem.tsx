import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import ContinentFilter from './ContinentFilter';
import TypeFilter from './TypeFilter';
import EraFilter from './EraFilter';
import CategoryTabs from './CategoryTabs';
import { continents, bridgeTypes, eras, categories } from '../../data/bridges';
interface FilterSystemProps {
  onFilterChange: (filters: FilterState) => void;
  initialCategory?: string;
}
export interface FilterState {
  searchTerm: string;
  continent: string;
  type: string;
  era: string;
  category: string;
}
const FilterSystem: React.FC<FilterSystemProps> = ({
  onFilterChange,
  initialCategory = 'all'
}) => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    continent: 'All Continents',
    type: 'All Types',
    era: 'All Eras',
    category: initialCategory
  });
  // Update filters when initialCategory prop changes
  useEffect(() => {
    if (initialCategory !== filters.category) {
      setFilters(prev => ({
        ...prev,
        category: initialCategory
      }));
    }
  }, [initialCategory]);
  // Notify parent component when filters change
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      searchTerm: e.target.value
    }));
  };
  const handleContinentChange = (continent: string) => {
    setFilters(prev => ({
      ...prev,
      continent
    }));
  };
  const handleTypeChange = (type: string) => {
    setFilters(prev => ({
      ...prev,
      type
    }));
  };
  const handleEraChange = (era: string) => {
    setFilters(prev => ({
      ...prev,
      era
    }));
  };
  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({
      ...prev,
      category
    }));
  };
  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      continent: 'All Continents',
      type: 'All Types',
      era: 'All Eras',
      category: 'all'
    });
  };
  return <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="mb-4">
        <CategoryTabs categories={categories} selectedCategory={filters.category} onChange={handleCategoryChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input type="text" placeholder="Search bridges..." className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={filters.searchTerm} onChange={handleSearchChange} />
        </div>
        {/* Filters */}
        <ContinentFilter continents={continents} selectedContinent={filters.continent} onChange={handleContinentChange} />
        <TypeFilter types={bridgeTypes} selectedType={filters.type} onChange={handleTypeChange} />
        <EraFilter eras={eras} selectedEra={filters.era} onChange={handleEraChange} />
      </div>
      {/* Clear Filters Button */}
      {(filters.searchTerm || filters.continent !== 'All Continents' || filters.type !== 'All Types' || filters.era !== 'All Eras') && <div className="mt-4 text-right">
          <button onClick={clearFilters} className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
            Clear all filters
          </button>
        </div>}
    </div>;
};
export default FilterSystem;