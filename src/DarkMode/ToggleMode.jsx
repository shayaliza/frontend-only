import { Moon, Sun } from "lucide-react"

import { Button } from "../components/ui/button"

import { useTheme } from "./ThemeProvider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
  
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
    }
  
    return (
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        {theme === "light" ? (
          <Sun className="h-[1.5rem] w-[1.5rem] transition-all" />
        ) : (
          <Moon className="h-[1.5rem] w-[1.5rem] transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }
