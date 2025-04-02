import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bridges } from '../data/bridges';
import BridgeCard from '../components/BridgeCard';
const Home: React.FC = () => {
  // Get one bridge from each category for the featured section
  const featuredBridges = [bridges.find(bridge => bridge.category === 'historical'), bridges.find(bridge => bridge.category === 'iconic'), bridges.find(bridge => bridge.category === 'record-breaking')].filter(Boolean);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1500049242364-5f500807cdd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Discover the World's Most
            <br />
            <span className="text-blue-400">Extraordinary Bridges</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Explore engineering marvels that connect landscapes, cultures, and
            people across the globe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/gallery" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              Explore Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/historical" className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Historical Bridges
            </Link>
          </div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              The Importance of Bridges
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Bridges are more than just functional structures that connect two
              points. They are testaments to human ingenuity, symbols of
              progress, and often works of art. Throughout history, bridges have
              facilitated trade, united communities, and inspired awe with their
              engineering and design.
            </p>
            <p className="text-lg text-gray-600">
              From ancient stone arches that have stood for millennia to modern
              marvels of steel and concrete that span seemingly impossible
              distances, bridges represent our desire to overcome obstacles and
              bring people together.
            </p>
          </div>
        </div>
      </section>
      {/* Featured Bridges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Featured Bridges
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore some of our highlighted bridges from around the world
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBridges.map(bridge => bridge && <BridgeCard key={bridge.id} {...bridge} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/iconic" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View all iconic bridges
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* Categories Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Explore Bridge Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/historical" className="group">
              <div className="bg-blue-50 rounded-lg p-6 transition-all group-hover:bg-blue-100 h-full">
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Historical Bridges
                </h3>
                <p className="text-gray-600">
                  Ancient marvels that have stood the test of time, showcasing
                  historical engineering.
                </p>
              </div>
            </Link>
            <Link to="/record-breaking" className="group">
              <div className="bg-green-50 rounded-lg p-6 transition-all group-hover:bg-green-100 h-full">
                <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Record-Breaking
                </h3>
                <p className="text-gray-600">
                  Extraordinary structures that push the boundaries of what's
                  possible in bridge construction.
                </p>
              </div>
            </Link>
            <Link to="/iconic" className="group">
              <div className="bg-purple-50 rounded-lg p-6 transition-all group-hover:bg-purple-100 h-full">
                <div className="w-12 h-12 bg-purple-100 group-hover:bg-purple-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Iconic Bridges
                </h3>
                <p className="text-gray-600">
                  Famous landmarks that have become symbols of their cities and
                  cultural icons.
                </p>
              </div>
            </Link>
            <Link to="/modern" className="group">
              <div className="bg-amber-50 rounded-lg p-6 transition-all group-hover:bg-amber-100 h-full">
                <div className="w-12 h-12 bg-amber-100 group-hover:bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Modern Bridges
                </h3>
                <p className="text-gray-600">
                  Contemporary designs showcasing the latest innovations in
                  bridge engineering.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dive into our comprehensive collection of bridges from around the
            world and discover the engineering marvels that connect our planet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/gallery" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
              View Gallery
            </Link>
            <Link to="/feedback" className="bg-transparent border border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
              Share Feedback
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;