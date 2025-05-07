/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const CallSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView && textRef.current) {
      gsap.fromTo(
        textRef.current,
        { backgroundSize: "0% 100%" },
        { 
          backgroundSize: "100% 100%", 
          duration: 1.5,
          ease: "power3.inOut"
        }
      );
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="py-28 relative bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url("/images/church-interior.jpg")' 
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-10"
          >
            The Call
          </motion.h2>
          
          <div className="overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm p-10 md:p-16 border border-white/10">
            <p
              ref={textRef}
              className="text-xl md:text-3xl font-serif text-white leading-relaxed font-light"
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
                backgroundSize: "0% 2px",
              }}
            >
              "To be a beacon of God's transformative love and truth in a broken world, 
              inviting all to experience the restoration and purpose found only in Christ."
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-indigo-900 rounded-md font-medium text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Learn About Our Ministry
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallSection;