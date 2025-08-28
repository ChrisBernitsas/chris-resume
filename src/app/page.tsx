"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, Award, Calendar, FileText, Lightbulb, Cpu, Eye, Truck, Puzzle } from 'lucide-react';

// Logo component that uses local images with fallback
const CompanyLogo = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`${className} object-contain scale-150`}
    onError={(e) => {
      // Fallback to a simple text representation if image fails to load
      const target = e.target as HTMLImageElement;
      target.style.display = 'none';
      const parent = target.parentElement;
      if (parent) {
        parent.innerHTML = `<div class="w-7 h-7 bg-white/20 rounded flex items-center justify-center text-xs font-bold">${alt.slice(0, 2).toUpperCase()}</div>`;
      }
    }}
  />
);

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  color: string;
  icon: React.ReactNode;
};

type Project = {
  name: string;
  description: string;
  tech: string[];
  date: string;
  color: string;
  icon: React.ReactNode;
  github?: string;
};

interface Research {
  title: string;
  type: string;
  period: string;
  description: string;
  impact: string;
  color: string;
  link?: string;
}

interface SkillGroup {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

const ResumeSite = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastUpdatedMousePosition, setLastUpdatedMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      const distance = Math.sqrt(
        Math.pow(currentX - lastUpdatedMousePosition.x, 2) +
        Math.pow(currentY - lastUpdatedMousePosition.y, 2)
      );

      const threshold = 50; // Adjust this value as needed

      if (distance > threshold) {
        setMousePosition({ x: currentX, y: currentY });
        setLastUpdatedMousePosition({ x: currentX, y: currentY });
      }
    };

    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'research', 'skills'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences: Experience[] = [
    {
      company: "Apple",
      role: "CoreOS Software Developer Intern",
      period: "May 2025 - August 2025",
      description: "Implemented tooling and services support for dynamic future silicon simulator configuration for restore and boot",
      tech: ["Python", "APIs", "CoreOS"],
      color: "from-gray-600 to-black",
      icon: <CompanyLogo src="/logos/apple.png" alt="Apple" className="w-7 h-7 text-white" />
    },
    {
      company: "Vortex Hydro Power",
      role: "Robotics Engineering Intern",
      period: "June 2024 - August 2024",
      description: "Designed power take-off system configurations and achieved 60% power increase with regenerative braking system using VESC",
      tech: ["Arduino", "C++", "Circuits", "VESC", "Power Systems"],
      color: "from-blue-500 to-cyan-500",
      icon: <CompanyLogo src="/logos/vortex-hydro-power.svg" alt="Vortex Hydro Power" className="w-7 h-7" />
    },
    {
      company: "Vortex Hydro Power",
      role: "Software Engineering Intern",
      period: "June 2023 - August 2023",
      description: "Designed GUI with Tkinter integrated with LCM for real-time monitoring of electrical parameters",
      tech: ["Rasberry Pi", "Tkinter", "LCM", "GUI", "Real-time Systems"],
      color: "from-green-500 to-teal-500",
      icon: <CompanyLogo src="/logos/vortex-hydro-power.svg" alt="Vortex Hydro Power" className="w-7 h-7" />
    },
    {
      company: "University of Michigan",
      role: "Research Intern - Marine Renewable Energy Lab",
      period: "2017 - 2022",
      description: "Developed marine hydrokinetic energy harvester using flow-induced oscillations that mimic fish undulations",
      tech: ["MATLAB", "Fluid Dynamics", "Energy Systems", "Research"],
      color: "from-purple-500 to-indigo-500",
      icon: <CompanyLogo src="/logos/university-of-michigan.png" alt="University of Michigan" className="w-7 h-7" />
    }
  ];

  const research: Research[] = [
    {
      title: "Experimental investigation on synergistic flow-induced oscillation of three rough tandem-cylinders in hydrokinetic energy conversion",
      type: "Article",
      period: "April 2024",
      description: "Harnessing hydrokinetic energy via FIO of three rough tandem cylinders; experiments varied spacing, damping, stiffness, and Reynolds number.",
      impact: "Achieved 75% of Betz limit for converted power. Galloping harnessed power 3-4 times greater than VIV. Three cylinders harnessed 3.4 to 26.4 times the power of a single isolated cylinder.",
      color: "from-blue-500 to-cyan-500",
      link: "https://www.researchgate.net/scientific-contributions/Christopher-Bernitsas-2186067858"
    },
    {
      title: "Three Cylinders with Large Turbulence Stimulation in Flow Induced Oscillations (VIV & Galloping): Experimental Data",
      type: "Technical Report",
      period: "January 2023",
      description: "Investigates FIO (VIV & galloping) in three cylinders with large turbulence stimulation, exploring PTC application and mechanical power analysis.",
      impact: "Relevant to VIVACE converter for hydrokinetic energy harnessing. PTC enhances FIO and broadens high-response flow speed range.",
      color: "from-green-500 to-teal-500",
      link: "https://www.researchgate.net/scientific-contributions/Christopher-Bernitsas-2186067858"
    },
    {
      title: "Effect of Obesity on Retinal Integrity in African Americans and Caucasian Americans With Relapsing Multiple Sclerosis",
      type: "Article",
      period: "November 2021",
      description: "Investigates obesity's impact on retinal structures in RRMS patients (AAs vs. CAs) using OCT to measure retinal parameters.",
      impact: "Obesity is associated with retinal structural abnormalities in RRMS patients, with a potentially more pronounced impact in African Americans. Large longitudinal studies are needed for validation.",
      color: "from-purple-500 to-indigo-500",
      link: "https://www.researchgate.net/scientific-contributions/Christopher-Bernitsas-2186067858"
    },
    {
      title: "Synergistic Flow-Induced Oscillation of Multiple Cylinders in Harvesting Marine Hydrokinetic Energy",
      type: "Patent Filed",
      period: "January 2023",
      description: "Filed provisional patent for novel marine energy harvesting system using multiple VIVACE oscillators for maximum power extraction from slow currents.",
      impact: "Patent Disclosure #2022-268 with University of Michigan - Addresses critical need for renewable energy extraction from low-velocity water currents",
      color: "from-emerald-500 to-teal-500",
      link: "https://www.researchgate.net/scientific-contributions/Christopher-Bernitsas-2186067858"
    },
    {
      title: "Hydrokinetic Power Conversion Using Vortex-Induced Oscillation with Cubic Restoring Force",
      type: "Research Publication",
      period: "June 2020",
      description: "Co-authored research on cubic-spring restoring function to improve marine hydrokinetic power harvesting via vortex-induced vibrations.",
      impact: "Published research contributing to advancement of marine renewable energy technology and VIVACE converter optimization",
      color: "from-blue-500 to-indigo-500",
      link: "https://www.researchgate.net/scientific-contributions/Christopher-Bernitsas-2186067858"
    }
  ];

  const projects: Project[] = [
    {
      name: "Lip Reading Web Application",
      description: "Developed CNN + Bidirectional LSTM neural network achieving 84% accuracy on validation set for word prediction from video input",
      tech: ["PyTorch", "OpenCV", "NumPy", "Computer Vision", "Deep Learning"],
      date: "Aug 2024",
      color: "from-purple-500 to-pink-500",
      icon: <Eye className="w-6 h-6 text-white" />,
      github: "https://github.com/ChrisBernitsas"
    },
    {
      name: "EyeSpy",
      description: "Real-time object detection using modified YOLO model integrated with public cameras across the US for event searching",
      tech: ["Flask", "MongoDB", "PyTorch", "YOLO", "OpenCV"],
      date: "Jul 2024 - Present",
      color: "from-red-500 to-orange-500",
      icon: <Eye className="w-6 h-6 text-white" />,
      github: "https://github.com/ChrisBernitsas"
    },
    {
      name: "Freight Route Optimization",
      description: "End-to-end logistics optimization system with algorithmic route optimization using multiple APIs for real-time adjustments",
      tech: ["Flutter", "Dart", "Flask", "Google Maps API", "API Integration"],
      date: "Feb 2024",
      color: "from-indigo-500 to-blue-500",
      icon: <Truck className="w-6 h-6 text-white" />,
      github: "https://github.com/ChrisBernitsas"
    },
    {
      name: "Advanced Sudoku Engine",
      description: "Created comprehensive Sudoku game with multiple challenging variations, custom board generation algorithm, and AI solver using backtracking",
      tech: ["Python", "OOP", "MVC", "Algorithm Design"],
      date: "Nov-Dec 2022",
      color: "from-green-500 to-cyan-500",
      icon: <Puzzle className="w-6 h-6 text-white" />,
      github: "https://github.com/ChrisBernitsas"
    }
  ];

  const skills: SkillGroup[] = [
    {
      category: "Programming Languages",
      items: ["Python", "C/C++", "SystemVerilog", "x86 Assembly", "Standard ML/OCaml"],
      icon: <Code className="w-5 h-5" />
    },
    {
      category: "Backend & Databases",
      items: ["Node.js", "Flask", "MongoDB", "REST APIs", "LCM"],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      category: "AI/ML & Tools",
      items: ["PyTorch", "OpenCV", "NumPy", "MATLAB", "Computer Vision"],
      icon: <Lightbulb className="w-5 h-5" />
    }
  ];

  const achievements: string[] = [
    "CMU Electrical & Computer Engineering Dean's List",
    "Top 200 in IMC Prosperity Trading Competition", 
    "Top 100 in Michigan Math Prize Competition",
    "2x AIME Qualifier",
    "2nd Place Michigan Science Fair",
    "Published Research & Patent Filed"
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 opacity-20">
        <div 
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4) 0%, rgba(34, 197, 94, 0.2) 30%, transparent 70%)`
          }}
        />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating particles effect - only render on client */}
      {isClient && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Chris Bernitsas
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Research', 'Skills'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-blue-400 relative group ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.toLowerCase() ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-blue-500 via-cyan-500 to-green-400 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl animate-pulse border-4 border-white/10">
              CB
            </div>
            <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
              Chris Bernitsas
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-200 mb-4 font-semibold">
              Electrical & Computer Engineering Student
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Carnegie Mellon University • Apple Intern • Software Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="mailto:cbernits@andrew.cmu.edu" className="flex items-center space-x-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-blue-600 hover:to-blue-500 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-slate-600 hover:border-blue-400">
                <Mail size={22} />
                <span className="font-medium">Email</span>
              </a>
              
              <a href="https://linkedin.com/in/Christopher-Bernitsas" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-blue-700 hover:to-blue-600 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-slate-600 hover:border-blue-400">
                <Linkedin size={22} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/ChrisBernitsas" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-gray-600 hover:to-gray-500 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-slate-600 hover:border-gray-400">
                <Github size={22} />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
            <ChevronDown size={40} className="mx-auto text-blue-400 hover:text-blue-300 transition-colors drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl">
                <GraduationCap className="text-blue-400 mb-6" size={40} />
                <h3 className="text-3xl font-bold mb-4 text-white">Education</h3>
                <h4 className="text-2xl font-semibold text-blue-300 mb-2">Carnegie Mellon University</h4>
                <p className="text-slate-200 text-lg mb-2">Bachelor of Science in Electrical and Computer Engineering</p>
                <p className="text-slate-400 text-lg">Expected Graduation: May 2026</p>
                <div className="mt-6 p-4 bg-slate-700/30 rounded-2xl">
                  <p className="text-slate-300"><strong>Relevant Courses:</strong> Computer Systems (C, x86), Embedded Systems, ML for Engineers (Numpy, Python), HW/SW Interface (C, Python), Digital Systems (SystemVerilog), Signals & Systems, Functional Programming (SML), Data Structures (C)</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl">
                <Award className="text-green-400 mb-6" size={40} />
                <h3 className="text-3xl font-bold mb-6 text-white">Achievements</h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center text-slate-200 text-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${exp.color} mr-4 flex items-center justify-center`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-1">{exp.company}</h3>
                          <h4 className="text-xl text-blue-300 font-semibold">{exp.role}</h4>
                        </div>
                      </div>
                      <p className="text-slate-400 flex items-center mb-4 text-lg"><Calendar size={18} className="mr-3" />{exp.period}</p>
                      <p className="text-slate-200 mb-6 leading-relaxed text-lg">{exp.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {exp.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-slate-700/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-600 hover:border-blue-400 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Research & Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            {research.map((item, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => item.link && window.open(item.link, '_blank')}>
                <div className={`bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl ${item.link ? 'cursor-pointer' : ''}`}>
                  <div className="flex items-start mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} mr-6 flex-shrink-0`}>
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h3 className="text-2xl font-bold text-white mb-2 flex-1">{item.title}</h3>
                            {item.link && (
                              <ExternalLink className="w-5 h-5 text-slate-400 hover:text-emerald-400 transition-colors ml-4 flex-shrink-0" />
                            )}
                          </div>
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">{item.type}</span>
                            <span className="text-slate-400 flex items-center"><Calendar size={16} className="mr-2" />{item.period}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-200 mb-4 leading-relaxed text-lg">{item.description}</p>
                      <div className="bg-slate-700/30 rounded-2xl p-4 mb-4">
                        <p className="text-emerald-300 font-medium"><strong>Impact:</strong> {item.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://www.researchgate.net/scientific-contributions/Christopher-Bernitsas-2186067858" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-white font-semibold relative z-10">
              <ExternalLink size={20} />
              <span>View Full Publications</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className="flex items-center mb-6">
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                      <p className="text-slate-400 text-sm mt-1">{project.date}</p>
                    </div>
                  </div>
                  <p className="text-slate-200 mb-6 leading-relaxed text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-700/50 text-purple-300 px-3 py-2 rounded-full text-sm font-medium border border-slate-600 hover:border-purple-400 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors">
                      <Github size={18} />
                      <span>View on GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mr-4">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-orange-300">{skillGroup.category}</h3>
                </div>
                <div className="grid gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-slate-700/40 text-slate-200 px-4 py-3 rounded-xl text-lg hover:bg-orange-600/20 hover:text-orange-200 transition-all cursor-default border border-slate-600/50 hover:border-orange-400/50">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 px-6 border-t border-slate-700/50 bg-slate-900/50 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="mailto:cbernits@andrew.cmu.edu" className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Mail size={28} />
            </a>
            <a href="https://linkedin.com/in/Christopher-Bernitsas" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/ChrisBernitsas" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Chris Bernitsas
            </h3>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default ResumeSite;