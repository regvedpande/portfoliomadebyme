"use client"

import * as React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { useMediaQuery } from "@mui/material"

// Create a context for color mode
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light",
})

export function ThemeRegistry({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light")

  React.useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light")
  }, [prefersDarkMode])

  // Create a theme instance that can be accessed globally
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // Light mode - grey and white theme
                primary: {
                  main: "#333333",
                },
                secondary: {
                  main: "#555555",
                },
                background: {
                  default: "#ffffff",
                  paper: "#ffffff",
                  muted: "#f5f5f5",
                },
                text: {
                  primary: "#333333",
                  secondary: "#666666",
                  muted: "#888888",
                },
              }
            : {
                // Dark mode
                primary: {
                  main: "#f5f5f5",
                },
                secondary: {
                  main: "#aaaaaa",
                },
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                  muted: "#252525",
                },
                text: {
                  primary: "#f5f5f5",
                  secondary: "#bbbbbb",
                  muted: "#888888",
                },
              }),
        },
        typography: {
          fontFamily: "Inter, sans-serif",
          h1: {
            fontWeight: 700,
          },
          h2: {
            fontWeight: 700,
          },
          h3: {
            fontWeight: 600,
          },
          h4: {
            fontWeight: 600,
          },
          h5: {
            fontWeight: 600,
          },
          h6: {
            fontWeight: 600,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: "0.5rem",
                fontWeight: 500,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: "0.75rem",
                boxShadow:
                  mode === "light"
                    ? "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
                    : "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
                height: "100%",
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: "0.5rem",
              },
            },
          },
          MuiTabs: {
            styleOverrides: {
              root: {
                "& .MuiTabs-flexContainer": {
                  justifyContent: "center",
                },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
              },
            },
          },
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                scrollBehavior: "smooth",
                overflowX: "hidden",
              },
            },
          },
        },
      }),
    [mode],
  )

  // Create a context to share the theme mode and toggle function
  const colorModeContext = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
      mode,
    }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorModeContext}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

