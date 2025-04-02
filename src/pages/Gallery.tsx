import React, { useState } from 'react';
import FilterSystem, { FilterState } from '../components/Filters/FilterSystem';
import { bridges } from '../data/bridges';
const Gallery: React.FC = () => {
  const [filteredBridges, setFilteredBridges] = useState(bridges);
  const handleFilterChange = (filters: FilterState) => {
    let result = bridges.filter(bridge => {
      // Filter by category
      if (filters.category !== 'all' && bridge.category !== filters.category) {
        return false;
      }
      // Filter by search term
      if (filters.searchTerm && !bridge.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) && !bridge.location.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }
      // Filter by continent
      if (filters.continent !== 'All Continents' && bridge.continent !== filters.continent) {
        return false;
      }
      // Filter by type
      if (filters.type !== 'All Types' && bridge.type !== filters.type) {
        return false;
      }
      // Filter by era
      if (filters.era !== 'All Eras' && bridge.era !== filters.era) {
        return false;
      }
      return true;
    });
    setFilteredBridges(result);
  };
  return <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Bridge Gallery</h1>
        <p className="text-lg text-gray-600 text-center">
          Explore our collection of stunning bridge photographs from around the
          world.
        </p>
      </div>
      <FilterSystem onFilterChange={handleFilterChange} />
      {filteredBridges.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBridges.map(bridge => <div key={bridge.id} className="relative group overflow-hidden rounded-lg">
              <img src={bridge.image} alt={bridge.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">{bridge.name}</h3>
                <p className="text-gray-200 text-sm">{bridge.location}</p>
              </div>
            </div>)}
        </div> : <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            No images found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters to see more results.
          </p>
        </div>}
    </div>;
};
export default Gallery;