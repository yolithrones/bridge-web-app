import React, { useEffect, useState } from 'react';
import FilterSystem, { FilterState } from '../components/Filters/FilterSystem';
import BridgeCard from '../components/BridgeCard';
import { bridges } from '../data/bridges';
const HistoricalBridges: React.FC = () => {
  const [filteredBridges, setFilteredBridges] = useState(bridges.filter(bridge => bridge.category === 'historical'));
  const handleFilterChange = (filters: FilterState) => {
    let result = bridges.filter(bridge => {
      // Always filter by the current category
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
        <h1 className="text-3xl font-bold mb-4 text-center">
          Historical Bridges
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Discover bridges that have stood the test of time, showcasing ancient
          engineering and architectural achievements.
        </p>
      </div>
      <FilterSystem onFilterChange={handleFilterChange} initialCategory="historical" />
      {filteredBridges.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBridges.map(bridge => <BridgeCard key={bridge.id} {...bridge} />)}
        </div> : <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            No bridges found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters to see more results.
          </p>
        </div>}
    </div>;
};
export default HistoricalBridges;