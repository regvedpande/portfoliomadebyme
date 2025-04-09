"use client"

import {
  Close as CloseIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Menu as MenuIcon,
} from "@mui/icons-material"
import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { ColorModeContext } from "./theme-registry"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [scrolled, setScrolled] = useState(false)
  // Add this state for the resume dialog
  const [openResumeDialog, setOpenResumeDialog] = useState(false)

  // Add these functions to handle the resume dialog
  const handleOpenResumeDialog = () => {
    setOpenResumeDialog(true)
  }

  const handleCloseResumeDialog = () => {
    setOpenResumeDialog(false)
  }

  const handleDownloadResume = (resumePath) => {
    const link = document.createElement("a")
    link.href = resumePath
    link.setAttribute("download", "")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    handleCloseResumeDialog()
  }

  // Use scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen, isMobile])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          backgroundColor: scrolled
            ? (theme) => (theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(18, 18, 18, 0.9)")
            : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "background-color 0.3s ease",
          borderBottom: scrolled
            ? (theme) => `1px solid ${theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}`
            : "none",
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Button
              href="#"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: (theme) => (theme.palette.mode === "light" ? "text.primary" : "white"),
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "primary.main",
                }}
              >
                <img
                  src="/WhatsApp Image 2025-03-18 at 20.51.59_31b61cd3.jpg"
                  alt="RP"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                component="span"
                sx={{
                  color: (theme) => (theme.palette.mode === "light" ? "text.primary" : "white"),
                }}
              >
                Regved Pande
              </Typography>
            </Button>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  href={item.href}
                  sx={{
                    fontWeight: 500,
                    position: "relative",
                    color: (theme) => (theme.palette.mode === "light" ? "text.primary" : "white"),
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "primary.main",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "70%",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                onClick={colorMode.toggleColorMode}
                sx={{
                  transition: "transform 0.3s ease",
                  color: (theme) => (theme.palette.mode === "light" ? "text.primary" : "white"),
                  "&:hover": {
                    transform: "rotate(30deg)",
                  },
                }}
              >
                {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              <Button
                variant="outlined"
                color="primary"
                onClick={handleOpenResumeDialog}
                sx={{
                  display: { xs: "none", md: "flex" },
                  borderWidth: "1.5px",
                  "&:hover": {
                    borderWidth: "1.5px",
                    backgroundColor: "rgba(0,0,0,0.04)",
                  },
                }}
              >
                Download CV
              </Button>

              <IconButton
                onClick={toggleMenu}
                sx={{
                  display: { md: "none" },
                  transition: "transform 0.2s ease",
                  color: (theme) => (theme.palette.mode === "light" ? "text.primary" : "white"),
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleMenu}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "100%",
            boxSizing: "border-box",
            background: (theme) => theme.palette.background.default,
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={toggleMenu}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ pt: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={toggleMenu}
                sx={{
                  py: 2,
                  "&:hover": {
                    backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    variant: "h6",
                    sx: { fontWeight: 500 },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, mt: "auto" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              toggleMenu()
              handleOpenResumeDialog()
            }}
            fullWidth
            size="large"
            sx={{
              py: 1.5,
              borderWidth: "1.5px",
              "&:hover": {
                borderWidth: "1.5px",
              },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
      {/* Resume Download Dialog */}
      <Dialog
        open={openResumeDialog}
        onClose={handleCloseResumeDialog}
        PaperProps={{
          sx: {
            borderRadius: "12px",
            maxWidth: "500px",
            width: "100%",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            pt: 3,
            pb: 1,
          }}
        >
          Select Resume Version
        </DialogTitle>
        <DialogContent sx={{ pb: 3 }}>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {[
               {
                title: "For .NET Developer Profile",
                description: "Based on my .Net Development skills and projects",
                path: "/MyDotNetResume.pdf",
              },
            ].map((resume, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={0}
                  onClick={() => handleDownloadResume(resume.path)}
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {resume.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {resume.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleCloseResumeDialog} color="inherit">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

