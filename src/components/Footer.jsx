import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-wheat text-black text-center p-8 justify-center items-center">
      &copy; {new Date().getFullYear()} Happiness Plans. All rights reserved.
    </footer>
  );
}
