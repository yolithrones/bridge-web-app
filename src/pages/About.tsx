import React from 'react';
const About: React.FC = () => {
  const teamMembers = [{
    name: 'Alex Johnson',
    role: 'Founder & Bridge Historian',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Alex has been studying historical bridges for over 20 years and founded BridgeWorld to share his passion with the world.'
  }, {
    name: 'Samantha Lee',
    role: 'Civil Engineer & Content Writer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'With a background in civil engineering, Samantha provides technical insights into bridge construction and design.'
  }, {
    name: 'Marcus Chen',
    role: 'Photographer & Travel Coordinator',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    bio: 'Marcus has visited over 100 famous bridges worldwide and contributes many of the stunning photographs on our site.'
  }, {
    name: 'Olivia Patel',
    role: 'Architectural Consultant',
    image: 'https://randomuser.me/api/portraits/women/29.jpg',
    bio: 'Olivia specializes in bridge aesthetics and the cultural significance of architectural choices in bridge design.'
  }];
  return <div className="container mx-auto px-4 py-12">
      {/* About Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">About BridgeWorld</h1>
          <p className="text-lg text-gray-600">
            Your comprehensive guide to the world's most fascinating bridges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At BridgeWorld, we're passionate about showcasing the engineering
              marvels that connect our world. Our mission is to document,
              celebrate, and educate people about bridges of all types, from
              ancient stone arches to modern suspension masterpieces.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that bridges are more than just functional structures –
              they're cultural landmarks, artistic expressions, and symbols of
              human ingenuity and cooperation. Through our comprehensive
              database, we aim to foster appreciation for these remarkable
              structures.
            </p>
            <p className="text-gray-700">
              Founded in 2020, BridgeWorld has grown to become the premier
              online resource for bridge enthusiasts, engineers, architects,
              historians, and curious minds from around the globe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="City bridge at night" className="rounded-lg shadow-md h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Modern bridge architecture" className="rounded-lg shadow-md mt-8 h-full object-cover" />
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            The passionate experts behind BridgeWorld
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>)}
        </div>
      </section>
    </div>;
};
export default About;