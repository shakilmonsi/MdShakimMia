import React, { useState, useEffect, useRef } from 'react';
import { Folder, Package, Users, Globe, ThumbsUp, Award } from 'lucide-react';

import { FaWordpressSimple } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaWix } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";


const CounterCard = ({ icon: Icon, count, label, suffix = '+', delay = 0 }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = count / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setDisplayCount(Math.floor(increment * currentStep));
        } else {
          setDisplayCount(count);
          clearInterval(counter);
        }
      }, stepDuration);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, count, delay]);

  return (
    <div ref={cardRef} className="counter-card-wrapper">
      <div className="glow-border"></div>
      <div className="counter-card">
        <div className="d-flex flex-column align-items-center">
          <div className="icon-wrapper mb-4">
            <div className="icon-glow"></div>
            <div className="icon-box">
              <Icon className="counter-icon" strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="text-center">
            <div className="counter-number">
              {displayCount}{suffix}
            </div>
            <div className="counter-label mt-2">
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCounter = () => {
  const stats = [
    { icon: FaWordpressSimple, count: 100, label: 'WordPress', delay: 0 },
    { icon: FaReact, count: 20, label: 'React.js', delay: 100 },
    { icon: SiNextdotjs, count: 8, label: 'Next.js', delay: 200 },
    { icon: CiSettings, count: 30, label: 'Crocoblock', delay: 300 },
    { icon: FaWix, count: 4, label: 'Wix', delay: 400 },
    { icon: IoLogoJavascript, count: 15, label: 'JavaScript', delay: 500 }
  ];

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        body {
          margin: 0;
          padding: 0;
        }
        
        .main-container {
          
          overflow: hidden;
        }
        
        .header-section {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .header-subtitle {
          color: #c084fc;
          font-weight: 600;
          font-size: 1.125rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        
        .header-title {
          font-size: 3.75rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        
        .title-normal {
          color: white;
        }
        
        .title-gradient {
          background: linear-gradient(to right, #c084fc, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .header-divider {
          width: 6rem;
          height: 0.25rem;
          background: linear-gradient(to right, #a855f7, #ec4899, #a855f7);
          margin: 0 auto;
          border-radius: 9999px;
          box-shadow: 0 10px 25px rgba(168, 85, 247, 0.5);
        }
        
        .counter-card-wrapper {
          position: relative;
          margin-bottom: 1.5rem;
        }
        
        .glow-border {
          position: absolute;
          inset: -2px;
          background: linear-gradient(to right, #9333ea, #db2777);
          border-radius: 0.5rem;
          opacity: 0.3;
          filter: blur(4px);
          transition: opacity 0.5s;
        }
        
        .counter-card-wrapper:hover .glow-border {
          opacity: 0.6;
        }
        
        .counter-card {
          position: relative;
          background: linear-gradient(to bottom right, #111827, #1f2937);
          border-radius: 0.5rem;
          padding: 1.5rem;
          border: 1px solid rgba(168, 85, 247, 0.3);
          transition: all 0.5s;
        }
        
        .counter-card-wrapper:hover .counter-card {
          border-color: rgba(168, 85, 247, 0.6);
          transform: translateY(-0.5rem);
        }
        
        .icon-wrapper {
          position: relative;
        }
        
        .icon-glow {
          position: absolute;
          inset: 0;
          background: #a855f7;
          border-radius: 0.5rem;
          filter: blur(1rem);
          opacity: 0.4;
          transition: opacity 0.5s;
        }
        
        .counter-card-wrapper:hover .icon-glow {
          opacity: 0.6;
        }
        
        .icon-box {
          position: relative;
          background: linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(219, 39, 119, 0.2));
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(168, 85, 247, 0.5);
          transition: transform 0.5s;
        }
        
        .counter-card-wrapper:hover .icon-box {
          transform: scale(1.1);
        }
        
        .counter-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: #c084fc;
          transition: color 0.3s;
        }
        
        .counter-card-wrapper:hover .counter-icon {
          color: #e9d5ff;
        }
        
        .counter-number {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(to right, #c084fc, #f9a8d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .counter-label {
          color: #9ca3af;
          font-weight: 500;
          font-size: 1rem;
        }
        
        .bottom-accent {
          margin-top: 4rem;
          text-align: center;
        }
        
        .accent-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(to right, #1f2937, #111827);
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid rgba(168, 85, 247, 0.3);
          box-shadow: 0 10px 25px rgba(168, 85, 247, 0.2);
        }
        
        .pulse-dot {
          width: 0.75rem;
          height: 0.75rem;
          background: #a855f7;
          border-radius: 9999px;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .accent-text {
          color: #d1d5db;
          font-weight: 500;
        }
        
        .bg-decoration-1 {
          position: fixed;
          top: 5rem;
          left: 2.5rem;
          width: 18rem;
          height: 18rem;
          background: rgba(168, 85, 247, 0.1);
          border-radius: 9999px;
          filter: blur(3rem);
          pointer-events: none;
        }
        
        .bg-decoration-2 {
          position: fixed;
          bottom: 5rem;
          right: 2.5rem;
          width: 18rem;
          height: 18rem;
          background: rgba(236, 72, 153, 0.1);
          border-radius: 9999px;
          filter: blur(3rem);
          pointer-events: none;
        }
        
        @media (max-width: 768px) {
          .header-title {
            font-size: 2.5rem;
          }
          
          .counter-number {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="main-container">
        <div className="container">
          <div className="header-section">
            <h1 className="header-title">
              <span className="title-normal">At a </span>
              <span className="title-gradient">Glance</span>
            </h1>
            <div className="header-divider"></div>
          </div>

          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <CounterCard
                  icon={stat.icon}
                  count={stat.count}
                  label={stat.label}
                  delay={stat.delay}
                />
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </>
  );
};

export default ProjectCounter;