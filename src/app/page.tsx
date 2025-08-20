export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8 max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Chris Bernitsas</h1>
        <div className="text-gray-600 space-y-1">
          <p>📧 cbernits@andrew.cmu.edu | 📱 (734) 205-7634</p>
          <p>
            <a href="https://linkedin.com/in/Christopher-Bernitsas" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            {" | "}
            <a href="https://github.com/ChrisBernitsas" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </p>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">Education</h2>
        <div>
          <h3 className="font-bold text-lg">Carnegie Mellon University</h3>
          <p className="text-gray-700">Bachelor of Science in Electrical and Computer Engineering</p>
          <p className="text-gray-600">Expected Graduation: May 2026</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">Experience</h2>
        
        <div className="mb-4">
          <h3 className="font-bold text-lg">Apple - CoreOS Software Developer Intern</h3>
          <p className="text-gray-600 italic">May 2025 - August 2025</p>
          <p className="text-gray-700 mt-1">Implemented tooling and services support for dynamic future silicon simulator configuration for restore and boot</p>
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-lg">Vortex Hydro Power - Robotics Engineering Intern</h3>
          <p className="text-gray-600 italic">June 2024 - August 2024</p>
          <ul className="text-gray-700 mt-1 list-disc list-inside space-y-1">
            <li>Designed various configurations for power take-off system optimization</li>
            <li>Achieved 60% power increase implementing regenerative braking system</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Languages:</h4>
            <p className="text-gray-700">Python, C/C++, JavaScript/TypeScript, SystemVerilog</p>
          </div>
          <div>
            <h4 className="font-semibold">Technologies:</h4>
            <p className="text-gray-700">React, Node.js, MongoDB, Flask, Next.js, OpenCV</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-12 pt-8 border-t">
        <p>© 2025 Chris Bernitsas</p>
      </footer>
    </div>
  );
}