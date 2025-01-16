import { useContext } from "react";
import { ThemeContext, ThemeContextInterface } from "../context/ThemeProvider";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";



const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext
  ) as ThemeContextInterface;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md relative"
    >
      <div className="relative w-[1.5rem] h-[1.5rem]">
        {/* Sun icon - show in dark theme */}
        <IoSunnyOutline
        color="#eab308"
          className={`absolute h-[1.5rem] w-[1.3rem] transition-all duration-300
            ${!darkTheme ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}
        />
        {/* Moon icon - show in light theme */}
        <FiMoon
        color="#1e3a8a"
          className={`absolute h-[1.5rem] w-[1.3rem] transition-all duration-300
            ${!darkTheme ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;