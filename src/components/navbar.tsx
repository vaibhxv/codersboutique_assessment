import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, User, Settings, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-gray-800" />
            <span className="ml-2 text-xl font-serif font-semibold text-gray-800">Elegant Tasks</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="ml-2 text-gray-600 hover:text-gray-800">
              <User className="h-5 w-5" />
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="ml-auto text-gray-600 hover:text-gray-800">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;