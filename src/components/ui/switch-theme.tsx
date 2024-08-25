import useThemeStore from "../../store/themeStore";
import { Switch } from "./switch";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="flex items-center">
      <span
        className={`mr-2 ${
          theme === "light" ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        🌞
      </span>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="bg-gray-300 dark:bg-gray-700"
      />
      <span
        className={`ml-2 ${
          theme === "dark" ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        🌙
      </span>
    </div>
  );
};

export default ThemeSwitch;
