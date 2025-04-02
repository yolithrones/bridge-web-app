import React, { useEffect, useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
const ScrollingTicker: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };
  return <div className="bg-blue-600 text-white py-2 overflow-hidden">
      <div className="ticker-container flex items-center space-x-6 animate-scroll">
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <Clock className="w-4 h-4" />
          <span>{formatTime(currentTime)}</span>
        </div>
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <span>{formatDate(currentTime)}</span>
        </div>
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <MapPin className="w-4 h-4" />
          <span>Discover bridges around the world</span>
        </div>
        <div className="whitespace-nowrap">
          <span>
            Welcome to BridgeWorld - Your guide to the world's most amazing
            bridges
          </span>
        </div>
      </div>
    </div>;
};
export default ScrollingTicker;