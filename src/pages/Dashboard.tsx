
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import CanvaStylePortfolioEditor from '@/components/portfolio/CanvaStylePortfolioEditor';
import { LogOut, User, Eye, Download } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-900">Portfolio Builder</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Eye size={16} />
                <span>Preview</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download size={16} />
                <span>Export</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User size={16} />
                <span>Profile</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => navigate('/login')}
                className="flex items-center gap-2"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="py-10">
        <CanvaStylePortfolioEditor />
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Portfolio Builder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
