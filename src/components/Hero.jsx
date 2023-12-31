import React from "react";

import { download } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={download} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/amanguleria-1", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with Just <br className='max-md:hidden' />
        <span className='orange_gradient '>A click of a button</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summarize, just paste the link down below to Summarize the Article!
      </h2>
    </header>
  );
};

export default Hero;