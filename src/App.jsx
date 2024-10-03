// import One from "./questions/One"
// import Two from "./questions/Two"
// import Fifteen from "./questions/Fifteen"
// import Fourteen from "./questions/Fourteen"

// import Sixteen from "./questions/Sixteen"

// import Thirteen from "./questions/Thirteen"

// import Twelve from "./questions/Twelve"

// import Eleven from "./questions/Eleven"

// import Ten from "./questions/Ten"

// import Eight from "./questions/Eight"
// import Nine from "./questions/Nine"

// import Seven from "./questions/Seven"

// import Six from "./questions/Six"

// import Five from "./questions/Five"

// import Four from "./questions/Four"

// // import Three from "./questions/Three"
import { useThemeContext } from "./context/ThemeContext"
import Eighteen from "./questions/Eighteen"
// import Seventeen from "./questions/Seventeen"
const App = () => {
  const { isDarkMode } = useThemeContext()
  const toggleTheme = isDarkMode ? "bg-zinc-800 text-white" : "bg-white text-black"
  // const items = ['item1', 'item2', 'item3', 'another item', "another item2"]
  return (
    <div className={`w-full h-screen ${toggleTheme}`}>
      {/* <One /> */}
      {/* <Two />
      {/* <Three /> */}
      {/* <Four /> */}
      {/* <Five /> */}
      {/* <Six /> */}
      {/* <Seven /> */}
      {/* <Eight /> */}
      {/* <Nine /> */}
      {/* <Ten /> */}
      {/* <Eleven/> */}
      {/* <Twelve items={items}/> */}
      {/* <Thirteen items={items} itemsPerPage={2}/> */}
      {/* <Fourteen /> */}
      {/* <Fifteen /> */}
      {/* <Sixteen /> */}
      {/* <Seventeen /> */}
      <Eighteen />
    </div>
  )
}

export default App