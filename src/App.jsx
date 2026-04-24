import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Jeffrin Nadar</h1>
            <div className="flex gap-3 md:gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-600 transition-colors text-sm md:text-base ${
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
              I build innovative solutions to complex problems. Currently seeking opportunities to contribute to creative teams.
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
          <div className="max-w-4xl">
            <p className="text-lg text-gray-700 mb-4">
              I'm a passionate developer with a strong foundation in modern web technologies.
              I love creating user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              With experience in both frontend and backend development, I bring a holistic approach to building digital products.
              I'm always eager to learn new technologies and take on challenging projects.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies, reading a novel, or going to the gym.
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
                <li>• REST APIs</li>
                <li>• Database Management</li>
                <li>• Fast API</li>
                <li>• Flask </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Tools & Other</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Git / GitHub</li>
                <li>• GitHub Actions</li>
                <li>• VS Code</li>
                <li>• Claude Code</li>
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

            {/* Project 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">DubTech</h4>
                <p className="text-gray-700 mb-4">
                  A fully-functional e-commerce website built with a classic web stack.
                  The frontend is powered by HTML, CSS, and Vanilla JavaScript for a lightweight and dynamic user experience.
                  The backend is built using Node.js with Express and uses SQLite for data persistence.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML/CSS</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">SQLite</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/JeffrinNadar/dubtech"
                  target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Multimodal Product Classifier</h4>
                <p className="text-gray-700 mb-4">
                  A deep learning model that classifies products based on both images and text descriptions.
                  The model uses a combination of convolutional neural networks (CNNs) for image processing and natural language processing (NLP) techniques for text analysis.
                  It achieves high accuracy in categorizing products, making it ideal for e-commerce applications.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Pytorch</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Python</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Study Assistant</h4>
                <p className="text-gray-700 mb-4">
                  A study assistant that allows users to upload PDF documents and ask questions about the content.
                  The assistant uses AI to analyze the document and provide accurate answers, making it easier for students to understand complex materials.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">FastAPI</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">SQLite</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">FAISS</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://study-assistant-green.vercel.app"
                  target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:text-green-700">
                    🌐 Website
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Automated Stock Portfolio Tracker</h4>
                <p className="text-gray-700 mb-4">
                  An automated stock portfolio tracker that provides real-time updates and analytics for stock portfolio.
                  The tracker uses market data to send alerts on stock price changes. Utilizes AWS Lambda for serverless execution, SNS for notifications, and DynamoDB for data storage.
                  Event driven architecture ensures efficient and scalable performance, making it an essential tool for investors to stay informed about their portfolios.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">AWS Lambda</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">SNS</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">DynamoDB</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Pinyin Lyrics App</h4>
                <p className="text-gray-700 mb-4">
                  A web app that helps users learn Chinese lyrics with pinyin pronunciation.
                  The app pulls lyrics from Spotify API and uses a pinyin conversion library to display the lyrics in both Chinese characters and pinyin.
                  Built with React for the front end and Flask for the backend, it provides an educational experience for music lovers looking to learn Chinese through songs.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Flask</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Spotify API</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="mailto:anthony.jeffrin.b@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a
                href="https://linkedin.com/in/jeffrinnadar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/JeffrinNadar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 Jeffrin Nadar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}