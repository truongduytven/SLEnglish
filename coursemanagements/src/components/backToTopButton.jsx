import React from 'react';
import BackToTopProvider, { useBackToTop } from '../context/backToTop.jsx';
import clsx from 'clsx'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function BackToTopButton() {
  const { isVisible, handleBackTop } = useBackToTop();

  return (
    <button
      className={clsx(
        isVisible ? 'translate-y-16 opacity-100' : '-translate-y-0 opacity-100',
        'cursor-pointer h-12 w-12 fixed bottom-4 right-4 bg-gray-300 text-white p-2 rounded-full transition-transform duration-32200'
      )}
      onClick={handleBackTop}
    >
      <ArrowUpwardIcon/>
    </button>
  );
}

export { BackToTopButton, BackToTopProvider };
