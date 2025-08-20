"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, Award, Calendar, FileText, Lightbulb, Cpu, Eye, Truck, Puzzle, School } from 'lucide-react';

// Custom Apple logo component
const AppleLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
  </svg>
);

// Custom Water Drop for hydro power
const WaterDrop = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-4.97 4.97-8 9.03-8 14 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.97-3.03-9.03-8-14z"/>
  </svg>
);

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  color: string;
  icon: React.ReactNode;
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  date: string;
  color: string;
  icon: React.ReactNode;
}

interface Research {
  title: string;
  type: string;
  period: string;
  description: string;
  impact: string;
  tech: string[];
  color: string;
}

interface SkillGroup {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

const ResumeSite = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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
      tech: ["C++", "System Programming", "iOS", "CoreOS"],
      color: "from-gray-600 to-black",
      icon: <AppleLogo className="w-7 h-7 text-white" />
    },
    {
      company: "Vortex Hydro Power",
      role: "Robotics Engineering Intern",
      period: "June 2024 - August 2024",
      description: "Designed power take-off system configurations and achieved 60% power increase with regenerative braking system using VESC",
      tech: ["Arduino", "C++", "Robotics", "VESC", "Power Systems"],
      color: "from-blue-500 to-cyan-500",
      icon: <WaterDrop className="w-7 h-7 text-white" />
    },
    {
      company: "Vortex Hydro Power",
      role: "Software Engineering Intern",
      period: "June 2023 - August 2023",
      description: "Designed GUI with Tkinter integrated with LCM for real-time monitoring of electrical parameters",
      tech: ["Python", "Tkinter", "LCM", "GUI", "Real-time Systems"],
      color: "from-green-500 to-teal-500",
      icon: <Code className="w-7 h-7 text-white" />
    },
    {
      company: "University of Michigan",
      role: "Research Intern - Marine Renewable Energy Lab",
      period: "2017 - 2022",
      description: "Developed marine hydrokinetic energy harvester using flow-induced oscillations that mimic fish undulations",
      tech: ["MATLAB", "Fluid Dynamics", "Energy Systems", "Research"],
      color: "from-purple-500 to-indigo-500",
      icon: <School className="w-7 h-7 text-white" />
    }
  ];

  const research: Research[] = [
    {
      title: "Marine Hydrokinetic Energy Harvester with Multiple VIVACE Oscillators in Synergy",
      type: "Patent Filed",
      period: "January 2023",
      description: "Filed provisional patent for novel marine energy harvesting system utilizing multiple Vortex Induced Vibration Aquatic Clean Energy (VIVACE) oscillators working in synergy to maximize power extraction from slow ocean/river currents.",
      impact: "Patent Disclosure #2022-268 with University of Michigan",
      tech: ["Fluid Dynamics", "VIVACE", "Marine Engineering", "Energy Harvesting"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "VIVACE Converter Energy Optimization",
      type: "Research Publication",
      period: "2017 - 2022",
      description: "Investigated flow-induced oscillations (FIO) that enhance vortex-induced vibrations to harness hydrokinetic energy from marine currents. Research focused on optimizing power take-off systems and achieving maximum energy conversion efficiency.",
      impact: "Published findings in academic journals with focus on sustainable marine energy solutions",
      tech: ["Vortex-Induced Vibrations", "Hydrokinetic Energy", "Marine Structures", "Flow Dynamics"],
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const projects: Project[] = [
    {
      name: "Lip Reading Web Application",
      description: "Developed CNN + Bidirectional LSTM neural network achieving 84% accuracy on validation set for word prediction from video input",
      tech: ["PyTorch", "OpenCV", "NumPy", "Computer Vision", "Deep Learning"],
      date: "Aug 2024",
      color: "from-purple-500 to-pink-500",
      icon: <Eye className="w-6 h-6 text-white" />
    },
    {
      name: "EyeSpy",
      description: "Real-time object detection using modified YOLO model integrated with public cameras across the US for event searching",
      tech: ["Flask", "MongoDB", "PyTorch", "YOLO", "OpenCV", "Web Scraping"],
      date: "Jul 2024 - Present",
      color: "from-red-500 to-orange-500",
      icon: <Eye className="w-6 h-6 text-white" />
    },
    {
      name: "Freight Route Optimization",
      description: "End-to-end logistics optimization system with algorithmic route optimization using multiple APIs for real-time adjustments",
      tech: ["Flutter", "Dart", "Flask", "Google Maps API", "Weather API"],
      date: "Feb 2024",
      color: "from-indigo-500 to-blue-500",
      icon: <Truck className="w-6 h-6 text-white" />
    },
    {
      name: "Advanced Sudoku Engine",
      description: "Created comprehensive Sudoku game with multiple challenging variations, custom board generation algorithm, and AI solver using backtracking",
      tech: ["Python", "OOP", "MVC", "Algorithm Design", "Game Development"],
      date: "Nov-Dec 2022",
      color: "from-green-500 to-cyan-500",
      icon: <Puzzle className="w-6 h-6 text-white" />
    }
  ];

  const skills: SkillGroup[] = [
    { 
      category: "Programming Languages", 
      items: ["Python", "C/C++", "JavaScript/TypeScript", "SystemVerilog", "x86 Assembly", "Standard ML/OCaml"],
      icon: <Code className="w-5 h-5" />
    },
    { 
      category: "Frontend Development", 
      items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Flutter", "Dart"],
      icon: <Cpu className="w-5 h-5" />
    },
    { 
      category: "Backend & Databases", 
      items: ["Node.js", "Flask", "MongoDB", "REST APIs", "LCM"],
      icon: <Briefcase className="w-5 h-5" />
    },
    { 
      category: "AI/ML & Tools", 
      items: ["PyTorch", "OpenCV", "NumPy", "MATLAB", "TensorFlow", "Computer Vision"],
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

      {/* Floating particles effect */}
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
              Carnegie Mellon University • Apple Intern • Marine Energy Researcher • AI/ML Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="mailto:cbernits@andrew.cmu.edu" className="flex items-center space-x-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-blue-600 hover:to-blue-500 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-slate-600 hover:border-blue-400">
                <Mail size={22} />
                <span className="font-medium">Email</span>
              </a>
              <a href="tel:(734)205-7634" className="flex items-center space-x-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-green-600 hover:to-green-500 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-slate-600 hover:border-green-400">
                <Phone size={22} />
                <span className="font-medium">Call</span>
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
                  <p className="text-slate-300"><strong>Relevant Courses:</strong> Computer Systems, Digital Systems, Signals & Systems, Functional Programming, Data Structures</p>
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
              <div key={index} className="group cursor-pointer">
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
                  <div className="flex items-start mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} mr-6 flex-shrink-0`}>
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
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
                      <div className="flex flex-wrap gap-3">
                        {item.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-slate-700/50 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-600 hover:border-emerald-400 transition-colors">
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
          <div className="text-center mt-12">
            <a href="https://www.researchgate.net/scientific-contributions/Christopher-Bernitsas-2186067858" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-white font-semibold">
              <ExternalLink size={20} />
              <span>View Full Research Profile</span>
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
              <div key={index} className="group cursor-pointer">
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color} mr-4 flex items-center justify-center`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                      <p className="text-slate-400 text-sm mt-1">{project.date}</p>
                    </div>
                  </div>
                  <p className="text-slate-200 mb-6 leading-relaxed text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-700/50 text-purple-300 px-3 py-2 rounded-full text-sm font-medium border border-slate-600 hover:border-purple-400 transition-colors">
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
      <footer className="py-16 px-6 border-t border-slate-700/50 bg-slate-900/50">
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
            <p className="text-slate-300 text-lg">Building the future through innovative engineering and research</p>
          </div>
          <p className="text-slate-400 text-lg">© 2025 Chris Bernitsas. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeSite;