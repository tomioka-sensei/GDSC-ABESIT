import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const AnnouncementBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBannerVisible(true);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <>
      {isBannerVisible && (
        <div className="fixed inset-x-0 bottom-0 p-4">
          <div className="relative flex items-center justify-between gap-4 rounded-lg bg-emerald-800 px-4 py-3 text-white shadow-lg">
            <p className="text-sm font-medium">
              We're organising DevScript 2023! Come{' '}
              <a href="https://dev-script.tech" className="inline-block underline">
                check it out!
              </a>
            </p>

            <button
              aria-label="Close"
              className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
              onClick={closeBanner}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementBanner;
