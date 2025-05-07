/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Assignmentsection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const assignments = [
    {
      number: "01",
      title: "Discipleship",
      description: "Nurturing spiritual growth through biblical teaching and mentoring.",
      color: "from-blue-400 to-indigo-600"
    },
    {
      number: "02",
      title: "Community Outreach",
      description: "Serving the local community with practical compassion and Christ's love.",
      color: "from-purple-400 to-indigo-600"
    },
    {
      number: "03",
      title: "Worship",
      description: "Creating transformative experiences that lead people into God's presence.",
      color: "from-indigo-400 to-blue-600"
    },
    {
      number: "04",
      title: "Global Mission",
      description: "Extending our reach to share the Gospel around the world.",
      color: "from-sky-400 to-indigo-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Abstract background shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-50 rounded-full opacity-70"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-50 rounded-full opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            The Assignment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600"
          >
            Our divine assignment encompasses these four key pillars that guide our ministry and outreach.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assignments.map((assignment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-3 bg-gradient-to-r ${assignment.color}`}></div>
              <div className="p-8">
                <div className="flex items-start">
                  <span className={`text-6xl font-bold bg-gradient-to-r ${assignment.color} bg-clip-text text-transparent opacity-30`}>
                    {assignment.number}
                  </span>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {assignment.title}
                    </h3>
                    <p className="text-gray-600">
                      {assignment.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Join Our Mission
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Assignmentsection;