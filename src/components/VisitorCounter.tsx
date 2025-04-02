import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
const VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  useEffect(() => {
    // In a real app, this would come from a backend service
    // For demo purposes, we'll simulate with localStorage and random numbers
    const getStoredCount = () => {
      const storedCount = localStorage.getItem('visitorCount');
      return storedCount ? parseInt(storedCount, 10) : 0;
    };
    // Get initial count
    const initialCount = getStoredCount();
    // Add a random number between 50-150 to simulate new visitors
    const newCount = initialCount + Math.floor(Math.random() * 100) + 50;
    // Save and set the new count
    localStorage.setItem('visitorCount', newCount.toString());
    setVisitorCount(newCount);
    // Simulate count increasing occasionally
    const interval = setInterval(() => {
      setVisitorCount(prev => {
        const updated = prev + Math.floor(Math.random() * 3);
        localStorage.setItem('visitorCount', updated.toString());
        return updated;
      });
    }, 30000); // Every 30 seconds
    return () => clearInterval(interval);
  }, []);
  return <div className="flex items-center space-x-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
      <Users className="w-4 h-4" />
      <span>{visitorCount.toLocaleString()} visitors</span>
    </div>;
};
export default VisitorCounter;