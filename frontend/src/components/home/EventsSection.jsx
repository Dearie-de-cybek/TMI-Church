/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EventsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const events = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      description: "Join us for a transformative worship experience with inspiring messages and uplifting music.",
      image: "/images/worship.jpg"
    },
    {
      title: "Annual Charity Gala",
      date: "June 15, 2025",
      time: "6:00 PM - 10:00 PM",
      description: "An elegant evening supporting our community outreach programs and international missions.",
      image: "/images/gala.jpg"
    },
    {
      title: "Youth Summer Camp",
      date: "July 10-17, 2025",
      time: "All Day",
      description: "A week of adventure, spiritual growth, and lasting friendships for teenagers ages 13-18.",
      image: "/images/youth-camp.jpg"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gray-50 relative"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            Recent Events
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-indigo-600 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl text-gray-600"
          >
            Stay connected with our community through these upcoming events and gatherings.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-indigo-900 opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
                  <p className="font-bold text-indigo-900 text-sm">{event.date}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-indigo-600 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {event.time}
                  </span>
                </p>
                <p className="text-gray-600 mb-6">
                  {event.description}
                </p>
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-md font-medium text-sm transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-md font-medium transition duration-300">
            View All Events
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;