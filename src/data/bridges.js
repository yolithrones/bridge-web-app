export const bridges = [
// Historical Bridges
{
  id: 1,
  name: "Pont du Gard",
  location: "Vers-Pont-du-Gard, France",
  continent: "Europe",
  type: "Arch",
  era: "Ancient",
  year: "1st century AD",
  description: "An ancient Roman aqueduct bridge built in the first century AD to carry water over 50 km to the Roman colony of Nemausus (Nîmes).",
  image: "https://images.unsplash.com/photo-1600001833600-151c40f3bd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  category: "historical",
  facts: ["Stands 49 meters tall", "Built without mortar", "UNESCO World Heritage Site since 1985"]
}, {
  id: 2,
  name: "Ponte Vecchio",
  location: "Florence, Italy",
  continent: "Europe",
  type: "Arch",
  era: "Medieval",
  year: "1345",
  description: "Medieval stone arch bridge noted for still having shops built along it, as was common in the Renaissance period.",
  image: "https://images.unsplash.com/photo-1543429257-3eb0b65d9e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  category: "historical",
  facts: ["Survived World War II when all other bridges in Florence were destroyed", "Originally hosted butchers and tanners, now jewelry shops", "Has a secret corridor (Vasari Corridor) built above it"]
}, {
  id: 3,
  name: "Anji Bridge",
  location: "Hebei Province, China",
  continent: "Asia",
  type: "Arch",
  era: "Ancient",
  year: "605 AD",
  description: "The world's oldest open-spandrel stone segmental arch bridge, built during the Sui Dynasty.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Zhaozhou_Bridge_2018.jpg/1200px-Zhaozhou_Bridge_2018.jpg",
  category: "historical",
  facts: ["Over 1,400 years old and still in use", "Spans 37.4 meters", "Designed by engineer Li Chun"]
},
// Record-Breaking Bridges
{
  id: 4,
  name: "Akashi Kaikyō Bridge",
  location: "Kobe-Naruto, Japan",
  continent: "Asia",
  type: "Suspension",
  era: "Modern",
  year: "1998",
  description: "The world's longest suspension bridge with a main span of 1,991 meters, connecting Kobe and Awaji Island.",
  image: "https://images.unsplash.com/photo-1578301978162-7bde6db6ead3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  category: "record-breaking",
  records: ["Longest central span of any suspension bridge (1,991m)", "Towers rise 282.8 meters (928 ft) above sea level", "Designed to withstand 290 km/h winds and magnitude 8.5 earthquakes"]
}, {
  id: 5,
  name: "Millau Viaduct",
  location: "Millau, France",
  continent: "Europe",
  type: "Cable-Stayed",
  era: "Modern",
  year: "2004",
  description: "The tallest bridge in the world with one mast's summit at 343 meters above the base of the structure.",
  image: "https://images.unsplash.com/photo-1581092919535-7146ff43d226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  category: "record-breaking",
  records: ["Tallest bridge in the world (343m)", "Deck height of 270m above the Tarn River", "Designed by architect Norman Foster"]
}, {
  id: 6,
  name: "Danyang–Kunshan Grand Bridge",
  location: "Jiangsu, China",
  continent: "Asia",
  type: "Beam",
  era: "Modern",
  year: "2010",
  description: "The world's longest bridge, spanning 164.8 kilometers and part of the Beijing-Shanghai High-Speed Railway.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/DanyangKunshanGrandBridge.jpg/1200px-DanyangKunshanGrandBridge.jpg",
  category: "record-breaking",
  records: ["Longest bridge in the world (164.8 km)", "Cost approximately $8.5 billion", "Used 450,000 tons of steel"]
},
// Iconic Bridges
{
  id: 7,
  name: "Golden Gate Bridge",
  location: "San Francisco, USA",
  continent: "North America",
  type: "Suspension",
  era: "Modern",
  year: "1937",
  description: "One of the most internationally recognized symbols of San Francisco and the United States, spanning the Golden Gate Strait.",
  image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  category: "iconic",
  facts: ["Distinctive orange-red color known as 'International Orange'", "Main span of 1,280 meters", "Took four years to build"]
}, {
  id: 8,
  name: "Tower Bridge",
  location: "London, United Kingdom",
  continent: "Europe",
  type: "Bascule",
  era: "Modern",
  year: "1894",
  description: "A combined bascule and suspension bridge, which has become an iconic symbol of London.",
  image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  category: "iconic",
  facts: ["Bascules can be raised to an angle of 86 degrees", "High-level walkways offer panoramic views", "Originally painted chocolate brown"]
}, {
  id: 9,
  name: "Sydney Harbour Bridge",
  location: "Sydney, Australia",
  continent: "Australia",
  type: "Arch",
  era: "Modern",
  year: "1932",
  description: "The world's largest steel arch bridge, nicknamed 'The Coathanger' due to its arch-based design.",
  image: "https://images.unsplash.com/photo-1506374322094-6021fc3926f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  category: "iconic",
  facts: ["Took 8 years to build", "Contains 6 million hand-driven rivets", "Visitors can climb to the top of the arch"]
},
// Modern Bridges
{
  id: 10,
  name: "Helix Bridge",
  location: "Singapore",
  continent: "Asia",
  type: "Modern",
  era: "Modern",
  year: "2010",
  description: "A pedestrian bridge in the form of a DNA helix structure, illuminated with dynamic lighting at night.",
  image: "https://images.unsplash.com/photo-1577093001887-d8cb93c4b39c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  category: "modern",
  facts: ["World's first curved double helix bridge", "Uses 5 times less steel than a conventional box girder bridge", "Features canopies for shelter"]
}, {
  id: 11,
  name: "Henderson Waves",
  location: "Singapore",
  continent: "Asia",
  type: "Modern",
  era: "Modern",
  year: "2008",
  description: "Singapore's highest pedestrian bridge, connecting Mount Faber Park and Telok Blangah Hill Park.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Henderson_Waves_2.jpg/1200px-Henderson_Waves_2.jpg",
  category: "modern",
  facts: ["36 meters above Henderson Road", "Distinctive wave-form made of seven undulating curved 'ribs'", "274 meters long"]
}, {
  id: 12,
  name: "Gateshead Millennium Bridge",
  location: "Newcastle upon Tyne, United Kingdom",
  continent: "Europe",
  type: "Tilt",
  era: "Modern",
  year: "2001",
  description: "A pedestrian and cyclist tilt bridge that rotates to allow ships to pass beneath, resembling a blinking eye.",
  image: "https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  category: "modern",
  facts: ["Only takes 4.5 minutes to rotate", "Often called the 'Blinking Eye Bridge'", "Weighs 850 tonnes"]
}];
export const continents = ["All Continents", "Europe", "Asia", "North America", "South America", "Africa", "Australia"];
export const bridgeTypes = ["All Types", "Arch", "Suspension", "Cable-Stayed", "Beam", "Bascule", "Tilt", "Modern"];
export const eras = ["All Eras", "Ancient", "Medieval", "Modern"];
export const categories = [{
  id: "all",
  name: "All Bridges"
}, {
  id: "historical",
  name: "Historical"
}, {
  id: "record-breaking",
  name: "Record-Breaking"
}, {
  id: "iconic",
  name: "Iconic"
}, {
  id: "modern",
  name: "Modern"
}];