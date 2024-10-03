import { useThemeContext } from "../context/ThemeContext"


const Sixteen = () => {
  const { isDarkMode, toggleTheme } = useThemeContext()
  return (
    <div>
      <label className="text-2xl ml-6 p-3">
        {isDarkMode ? "Light" : "Dark"}
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} className="ml-3 cursor-pointer" />
      </label>

    </div>
  )
}

export default Sixteen