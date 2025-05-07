/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const AffirmationSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView && textRef.current) {
      // Create a GSAP SplitText instance for character-based animation
      const splitText = new SplitText(textRef.current, { type: "chars, words" });
      
      gsap.from(splitText.chars, {
        opacity: 0,
        y: 20,
        rotationX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-indigo-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-indigo-900 mb-12 inline-block relative"
          >
            Our Affirmation
            <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transform scale-x-0 origin-left transition-transform duration-700"
              style={{ transform: isInView ? 'scaleX(1)' : 'scaleX(0)' }}
            ></span>
          </motion.h2>

          <div className="bg-white rounded-lg shadow-xl p-10 md:p-16 transform transition-all duration-700"
            style={{ 
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            <p 
              ref={textRef}
              className="text-xl md:text-2xl leading-relaxed text-gray-800 font-serif italic"
            >
              "We affirm that through faith in Jesus Christ, we are called to be a light in the world, 
              a sanctuary of hope, and a community of love. We stand steadfast in our commitment to the 
              teachings of Christ, embracing His truth with unwavering conviction and sharing His grace 
              with boundless compassion."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffirmationSection;