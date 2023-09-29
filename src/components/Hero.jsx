/* eslint-disable no-unused-vars */

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/DaduDev");
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize articles with
        <br className="max-md:hidden" />
        <h1 className="orange_gradient">OpenAI GPT-4</h1>
      </h1>
      <h2 className="desc">
        Simplify your reading experience with our AI-powered summarizer.
      </h2>
    </header>
  );
};

export default Hero;
