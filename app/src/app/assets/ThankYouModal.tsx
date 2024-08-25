import React from 'react';
import { Dialog } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';
import { PiSealCheckFill } from "react-icons/pi";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Thank You! Contact Me</h2>

        <div className="flex justify-center items-center text-center text-lightBlue">
             <PiSealCheckFill size={100} />
        </div>

        <div className='text-center'>
            <p className='my-1'>Your message has been sent successfully!</p>
            <p className='my-1'>Hasitha Dhananjaya will get back to you shortly.</p>
        </div>
        <div className='flex justify-center items-center text-center my-2'>
            <button type="button" className='px-7 py-2 bg-lightBlue text-white rounded-lg hover:bg-hoverPrimary' onClick={onClose}>Ok</button>
        </div>
        
      </div>
    </Dialog>
  );
};

export default ThankYouModal;
