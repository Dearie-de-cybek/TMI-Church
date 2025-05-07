/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MandateSection = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax and fade effects using Framer Motion
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <section 
      ref={sectionRef}
      className="py-28 bg-indigo-900 relative overflow-hidden"
    >
      {/* Abstract geometric shapes for visual interest */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full border-4 border-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-4 border-white"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 tracking-tight">
            Our Divine Mandate
          </h2>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-10 transform hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-200">
                Transformative Worship
              </h3>
              <p className="text-lg leading-relaxed">
                To create an atmosphere where the presence of God transforms lives, 
                bringing healing, restoration, and a deeper connection with the divine purpose.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-10 transform hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-200">
                Community Empowerment
              </h3>
              <p className="text-lg leading-relaxed">
                To equip and empower every believer to discover their spiritual gifts,
                develop their God-given potential, and fulfill their unique calling in Christ.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-10 transform hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-200">
                Global Impact
              </h3>
              <p className="text-lg leading-relaxed">
                To extend the love and message of Christ beyond our walls, reaching the marginalized,
                the broken, and the lost with compassion, service, and the unchanging truth of the Gospel.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MandateSection;