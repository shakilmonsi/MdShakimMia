import React from 'react';
import { Code, Database, Globe, Zap, Heart, Gamepad2, Plane } from 'lucide-react';

const AboutMe = () => {
  const skills = [
    { icon: 'html5', name: 'HTML5', color: '#E34F26' },
    { icon: 'css3', name: 'CSS3', color: '#1572B6' },
    { icon: 'bootstrap', name: 'Bootstrap', color: '#7952B3' },
    { icon: 'tailwind', name: 'Tailwind', color: '#06B6D4' },
    { icon: 'javascript', name: 'JavaScript', color: '#F7DF1E' },
    { icon: 'react', name: 'React', color: '#61DAFB' },
    { icon: 'git', name: 'Git', color: '#F05032' },
    { icon: 'firebase', name: 'Firebase', color: '#FFCA28' },
    { icon: 'nodejs', name: 'Node.js', color: '#339933' },
    { icon: 'express', name: 'Express', color: '#000000' },
    { icon: 'mongodb', name: 'MongoDB', color: '#47A248' },
    { icon: 'figma', name: 'Figma', color: '#F24E1E' }
  ];

  const cms = [
    { name: 'WordPress', gradient: 'linear-gradient(135deg, #21759b 0%, #0087be 100%)' },
    { name: 'Wix', gradient: 'linear-gradient(135deg, #0c6efd 0%, #0353ca 100%)' },
    { name: 'Crocoblock', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)' },
    { name: 'Elementor Pro', gradient: 'linear-gradient(135deg, #d946ef 0%, #a855f7 100%)' },
    { name: 'WooCommerce', gradient: 'linear-gradient(135deg, #7f54b3 0%, #96588a 100%)' }
  ];

  const stats = [
    { icon: 'wordpress', count: '100+', label: 'WordPress', color: '#21759b' },
    { icon: 'react', count: '20+', label: 'React.js', color: '#61DAFB' },
    { icon: 'nextjs', count: '8+', label: 'Next.js', color: '#ffffff' },
    { icon: 'crocoblock', count: '30+', label: 'Crocoblock', color: '#8b5cf6' },
    { icon: 'wix', count: '4+', label: 'Wix', color: '#0c6efd' },
    { icon: 'javascript', count: '15+', label: 'JavaScript', color: '#F7DF1E' }
  ];

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: #0a0a1a;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        
        .about-section {
          background: linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #2d1b4e 100%);
          min-height: 100vh;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        
        .particle-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(168, 85, 247, 0.4);
          border-radius: 50%;
          animation: float 20s infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-title h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .section-title .highlight {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .section-title .underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #a855f7, #ec4899);
          margin: 20px auto;
          border-radius: 2px;
        }
        
        /* Know Who I'M Section */
        .intro-section {
          margin-bottom: 80px;
        }
        
        .intro-content {
          background: rgba(26, 10, 46, 0.6);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 20px;
          padding: 40px;
          backdrop-filter: blur(10px);
        }
        
        .intro-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 30px;
        }
        
        .intro-text h2 .highlight {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .intro-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #d1d5db;
          margin-bottom: 20px;
        }
        
        .intro-text .purple-text {
          color: #c084fc;
          font-weight: 600;
        }
        
        .intro-text .company-link {
          color: #a855f7;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }
        
        .intro-text .company-link:hover {
          color: #ec4899;
        }
        
        .activities-list {
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }
        
        .activities-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: #d1d5db;
        }
        
        .activities-list li svg {
          color: #a855f7;
        }
        
        .intro-image {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .developer-illustration {
          width: 100%;
          max-width: 400px;
          height: auto;
          animation: floatImage 3s ease-in-out infinite;
        }
        
        @keyframes floatImage {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        /* At a Glance Stats Section */
        .stats-section {
          margin-bottom: 80px;
        }
        
        .stat-card {
          background: rgba(26, 10, 46, 0.6);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          transition: all 0.4s;
          height: 100%;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .stat-card:hover {
          transform: translateY(-10px);
          border-color: rgba(168, 85, 247, 0.6);
          box-shadow: 0 10px 40px rgba(168, 85, 247, 0.3);
        }
        
        .stat-card:hover::before {
          opacity: 1;
        }
        
        .stat-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 20px;
          background: rgba(168, 85, 247, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        
        .stat-count {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }
        
        .stat-label {
          font-size: 1.1rem;
          color: #9ca3af;
          font-weight: 500;
          position: relative;
          z-index: 1;
        }
        
        /* Professional Skillset Section */
        .skills-section {
          margin-bottom: 80px;
        }
        
        .skill-card {
          background: rgba(26, 10, 46, 0.6);
          border: 2px solid rgba(168, 85, 247, 0.3);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          transition: all 0.4s;
          height: 100%;
          backdrop-filter: blur(10px);
        }
        
        .skill-card:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: rgba(168, 85, 247, 0.8);
          box-shadow: 0 15px 50px rgba(168, 85, 247, 0.4);
        }
        
        .skill-icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: rgba(168, 85, 247, 0.15);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .skill-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border-radius: 15px;
          opacity: 0;
          transition: opacity 0.4s;
          z-index: -1;
        }
        
        .skill-card:hover .skill-icon-wrapper::before {
          opacity: 1;
        }
        
        .skill-icon {
          font-size: 3rem;
        }
        
        .skill-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #d1d5db;
          margin-top: 15px;
        }
        
        /* CMS & E-commerce Section */
        .cms-section {
          margin-bottom: 80px;
        }
        
        .cms-card {
          background: rgba(26, 10, 46, 0.6);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          transition: all 0.4s;
          height: 100%;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }
        
        .cms-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .cms-card:hover {
          transform: translateY(-8px);
          border-color: rgba(168, 85, 247, 0.6);
          box-shadow: 0 10px 40px rgba(168, 85, 247, 0.3);
        }
        
        .cms-card:hover::before {
          opacity: 1;
        }
        
        .cms-name {
          font-size: 1.3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 1;
        }
        
        @media (max-width: 768px) {
          .section-title h1 {
            font-size: 2rem;
          }
          
          .intro-text h2 {
            font-size: 1.8rem;
          }
          
          .stat-count {
            font-size: 2.5rem;
          }
          
          .intro-content {
            padding: 25px;
          }
        }
      `}</style>

      <div className="about-section">
        {/* Particle Background */}
        <div className="particle-bg">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="container position-relative">
          {/* Know Who I'M Section */}
          <div className="intro-section">
            <div className="section-title">
              <h1>
                Know Who <span className="highlight">I'M</span>
              </h1>
              <div className="underline"></div>
            </div>

            <div className="intro-content">
              <div className="row align-items-center g-4">
                <div className="col-lg-7">
                  <div className="intro-text">
                    <p>
                      Hi Everyone, I am <span className="purple-text">Shakil Monsi</span> from <span className="purple-text">Netrakona, Bangladesh</span>.
                    </p>
                    <p>
                      I am a <span className="purple-text">professional Web Developer</span> with strong experience in modern web technologies and user-focused design.
                    </p>
                    <p>
                      I have <span className="purple-text">18 months of experience</span> working at <a href="#" className="company-link">MTS Software Company</a>, where I completed and delivered several successful client projects. Additionally, I worked for <span className="purple-text">6 months</span> at <a href="#" className="company-link">Bdtask Software Company</a>, gaining valuable hands-on experience in professional software development and teamwork.
                    </p>
                    <p style={{ marginTop: '30px', fontWeight: '600' }}>
                      Apart from coding, some other activities that I love to do:
                    </p>
                    <ul className="activities-list">
                      <li>
                        <Gamepad2 size={20} />
                        Playing Games
                      </li>
                      <li>
                        <Plane size={20} />
                        Travelling
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="intro-image">
                    <svg className="developer-illustration" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="400" fill="none"/>
                      <circle cx="200" cy="200" r="150" fill="url(#grad1)" opacity="0.2"/>
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      <path d="M150 180 L200 160 L250 180 L250 240 L200 260 L150 240 Z" fill="#a855f7" opacity="0.3"/>
                      <circle cx="200" cy="150" r="40" fill="#ec4899" opacity="0.4"/>
                      <rect x="180" y="190" width="40" height="80" rx="5" fill="#8b5cf6" opacity="0.5"/>
                      <path d="M160 210 L140 250 M240 210 L260 250" stroke="#a855f7" strokeWidth="8" strokeLinecap="round"/>
                      <circle cx="185" cy="145" r="5" fill="#fff"/>
                      <circle cx="215" cy="145" r="5" fill="#fff"/>
                      <path d="M185 160 Q200 170 215 160" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* At a Glance Section */}
          <div className="stats-section">
            <div className="section-title">
              <h1>
                At a <span className="highlight">Glance</span>
              </h1>
              <div className="underline"></div>
            </div>

            <div className="row g-4">
              {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <div className="stat-card">
                    <div className="stat-icon">
                      <Code size={30} color={stat.color} />
                    </div>
                    <div className="stat-count">{stat.count}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skillset Section */}
          <div className="skills-section">
            <div className="section-title">
              <h1>
                Professional <span className="highlight">Skillset</span>
              </h1>
              <div className="underline"></div>
            </div>

            <div className="row g-4">
              {skills.map((skill, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <div className="skill-card">
                    <div className="skill-icon-wrapper">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon === 'html5' && '⟨/⟩'}
                        {skill.icon === 'css3' && '{ }'}
                        {skill.icon === 'bootstrap' && 'B'}
                        {skill.icon === 'tailwind' && '~'}
                        {skill.icon === 'javascript' && 'JS'}
                        {skill.icon === 'react' && '⚛'}
                        {skill.icon === 'git' && '⎇'}
                        {skill.icon === 'firebase' && '🔥'}
                        {skill.icon === 'nodejs' && 'N'}
                        {skill.icon === 'express' && 'ex'}
                        {skill.icon === 'mongodb' && '🍃'}
                        {skill.icon === 'figma' && '◐'}
                      </div>
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CMS & E-commerce Section */}
          <div className="cms-section">
            <div className="section-title">
              <h1>
                CMS & <span className="highlight">E-commerce Expertise</span>
              </h1>
              <div className="underline"></div>
            </div>

            <div className="row g-4">
              {cms.map((item, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4">
                  <div className="cms-card">
                    <div className="cms-name">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;