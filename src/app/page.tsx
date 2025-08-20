"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, Award, Zap, Calendar, MapPin } from 'lucide-react';

const ResumeSite = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills'];
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

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      company: "Apple",
      role: "CoreOS Software Developer Intern",
      period: "May 2025 - August 2025",
      description: "Implemented tooling and services support for dynamic future silicon simulator configuration for restore and boot",
      tech: ["C++", "System Programming", "iOS"],
      color: "from-gray-600 to-black"
    },
    {
      company: "Vortex Hydro Power",
      role: "Robotics Engineering Intern",
      period: "June 2024 - August 2024",
      description: "Designed power take-off system configurations and achieved 60% power increase with regenerative braking system using VESC",
      tech: ["Arduino", "C++", "Robotics", "VESC"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Vortex Hydro Power",
      role: "Software Engineering Intern",
      period: "June 2023 - August 2023",
      description: "Designed GUI with Tkinter integrated with LCM for real-time monitoring of electrical parameters",
      tech: ["Python", "Tkinter", "LCM", "GUI"],
      color: "from-green-500 to-teal-500"
    }
  ];

  const projects = [
    {
      name: "Lip Reading Web Application",
      description: "Developed CNN + Bidirectional LSTM neural network achieving 84% accuracy on validation set for word prediction from video input",
      tech: ["PyTorch", "OpenCV", "NumPy", "Computer Vision"],
      date: "Aug 2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "EyeSpy",
      description: "Real-time object detection using modified YOLO model integrated with public cameras across the US for event searching",
      tech: ["Flask", "MongoDB", "PyTorch", "YOLO", "OpenCV"],
      date: "Jul 2024 - Present",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Freight Route Optimization",
      description: "End-to-end logistics optimization system with algorithmic route optimization using multiple APIs for real-time adjustments",
      tech: ["Flutter", "Dart", "Flask", "Google Maps API"],
      date: "Feb 2024",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "C/C++", "JavaScript/TypeScript", "SystemVerilog", "x86", "Standard ML"] },
    { category: "Frontend", items: ["React", "Next.js", "HTML/CSS", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Flask", "MongoDB"] },
    { category: "Tools & Tech", items: ["MATLAB", "NumPy", "OpenCV", "PyTorch", "Git"] }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen relative overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          transition: 'background-image 0.3s ease'
        }}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CB
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400 border-b-2 border-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
              CB
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Chris Bernitsas
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Electrical & Computer Engineering Student at Carnegie Mellon University
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="mailto:cbernits@andrew.cmu.edu" className="flex items-center space-x-2 bg-slate-800 hover:bg-blue-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a href="tel:(734)205-7634" className="flex items-center space-x-2 bg-slate-800 hover:bg-green-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Phone size={20} />
                <span>Call</span>
              </a>
              <a href="https://linkedin.com/in/Christopher-Bernitsas" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-slate-800 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/ChrisBernitsas" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-slate-800 hover:bg-gray-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div className="animate-bounce">
            <ChevronDown 
              size={32} 
              className="mx-auto cursor-pointer text-blue-400 hover:text-blue-300 transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <GraduationCap className="text-blue-400 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">Education</h3>
                <h4 className="text-xl font-semibold text-blue-300">Carnegie Mellon University</h4>
                <p className="text-slate-300">Bachelor of Science in Electrical and Computer Engineering</p>
                <p className="text-slate-400">Expected Graduation: May 2026</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                <Award className="text-green-400 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">Achievements</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• CMU Dean's List Spring 2023</li>
                  <li>• Top 200 IMC Prosperity Trading Competition</li>
                  <li>• Top 100 Michigan Math Prize Competition</li>
                  <li>• Published Research & Patent Filed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                      <h4 className="text-xl text-blue-300 mb-2">{exp.role}</h4>
                      <p className="text-slate-400 flex items-center"><Calendar size={16} className="mr-2" />{exp.period}</p>
                    </div>
                    <div className={`hidden md:block w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-700 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4`}>
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-700 text-blue-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-300">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-slate-700 text-slate-200 px-3 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:cbernits@andrew.cmu.edu" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/Christopher-Bernitsas" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/ChrisBernitsas" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
          <p className="text-slate-400">© 2025 Chris Bernitsas. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default ResumeSite;