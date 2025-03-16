
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Layers, User, Palette, Globe } from "lucide-react";

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <header className="w-full py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">Portfolio Builder</div>
        <Button onClick={() => navigate('/login')} variant="outline" className="flex items-center gap-2">
          <User size={16} />
          <span>Sign In</span>
        </Button>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Build Your Professional Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
          Create a stunning online portfolio to showcase your work, skills, and achievements to potential clients and employers.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            onClick={() => navigate('/login')} 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => alert("Demo coming soon!")}
          >
            View Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">Simple and intuitive interface to build your portfolio without any coding skills.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Beautiful Templates</h3>
            <p className="text-gray-600">Choose from a variety of professional templates to make your portfolio stand out.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Professional Domains</h3>
            <p className="text-gray-600">Get your own custom domain to share your portfolio with the world.</p>
          </div>
        </div>
      </main>
      
      <footer className="w-full py-6 px-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Portfolio Builder. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
