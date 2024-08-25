import React from 'react';
import { Dialog } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';
import { PiSealWarningFill } from "react-icons/pi";


interface ErrorModalProps {
  isOpenErrorModle: boolean;
  onCloseErrorModle : () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpenErrorModle, onCloseErrorModle }) => {
  return (
    <Dialog open={isOpenErrorModle} onClose={onCloseErrorModle} className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onCloseErrorModle}
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Some things went wrong!</h2>

        <div className="flex justify-center items-center text-center text-red-500">
             <PiSealWarningFill size={100} />
        </div>

        <div className='text-center'>
            <p className='my-1'>Your message has been not sent successfully!</p>
            <p className='my-1'>Try to contact Hasitha Dhananjaya on 
                <a className='text-lightBlue hover:text-hoverPrimary ml-1 text-lg' href="https://www.linkedin.com/in/hasitha-dhananjaya-337baa226/" target="_blank" rel="noopener noreferrer">linkedin</a></p>
        </div>
        <div className='flex justify-center items-center text-center my-2'>
            <button type="button" className='px-7 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400' onClick={onCloseErrorModle}>Ok</button>
        </div>
        
      </div>
    </Dialog>
  );
};

export default ErrorModal;
