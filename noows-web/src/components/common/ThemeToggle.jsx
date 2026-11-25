import "./ThemeToggle.css";
import ThemeProvider from "../../context/ThemeProvider";
import useTheme from "../../hook/UseTheme";

export default function ThemeToggle() {

    const { theme, toggleTheme } = useTheme("");

    return (

        <button

            className="theme-toggle"

            onClick={toggleTheme}>
            {

                theme === "light"? "🌙": "☀️"

            }

        </button>

    );

}