import React, { useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Jeffrin Nadar</h1>
            <div className="flex gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-600 transition-colors ${
                    activeSection === section ? 'text-blue-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm Jeffrin Nadar
            </h2>
            <p className="text-2xl text-gray-600 mb-8">
              Software Developer | Problem Solver | Tech Enthusiast
            </p>
            <p className="text-lg text-gray-700 mb-8">
              I build elegant solutions to complex problems. Currently seeking opportunities to contribute to innovative teams.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">About Me</h3>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-4">
              I'm a passionate developer with a strong foundation in modern web technologies. I love creating user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              With experience in both frontend and backend development, I bring a holistic approach to building digital products. I'm always eager to learn new technologies and take on challenging projects.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• React / Next.js</li>
                <li>• JavaScript / TypeScript</li>
                <li>• HTML / CSS</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Backend</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Node.js / Express</li>
                <li>• Python / Django</li>
                <li>• REST APIs</li>
                <li>• Database Management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Tools & Other</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Git / GitHub</li>
                <li>• Docker</li>
                <li>• AWS / Cloud Services</li>
                <li>• Agile / Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Project Name {project}</h4>
                  <p className="text-gray-700 mb-4">
                    Brief description of your project. What problem does it solve? What technologies did you use?
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Node.js</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <Github size={18} />
                      Code
                    </a>
                    <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}