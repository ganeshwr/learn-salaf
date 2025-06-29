import React from 'react';
import { Book, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Book className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Manhaj Salaf</h3>
                <p className="text-primary-200 text-sm">Path of the Salaf</p>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              Educational platform dedicated to clarifying the authentic methodology of the Salaf as-Salih with wisdom, knowledge, and proper understanding.
            </p>
          </div>

          {/* Important Notice */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Important Notice</h4>
            <div className="text-primary-200 text-sm space-y-2">
              <p>This platform is for educational purposes only.</p>
              <p>Always consult qualified scholars for religious guidance.</p>
              <p>May Allah guide us all to the straight path.</p>
            </div>
          </div>

          {/* Islamic Greeting */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">As-Salāmu ʿAlaykum</h4>
            <div className="text-primary-200 text-sm space-y-2">
              <p>Peace be upon you, dear brother/sister in Islam.</p>
              <p>May this knowledge benefit you in this life and the hereafter.</p>
              <p className="font-arabic text-right">بارك الله فيك</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-primary-300 text-sm">
              © 2024 Manhaj Salaf Educational Platform
            </p>
            <p className="text-primary-300 text-sm flex items-center mt-2 sm:mt-0">
              Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for the Ummah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;