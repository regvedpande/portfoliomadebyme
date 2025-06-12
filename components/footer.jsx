"use client"

import { Email as EmailIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material"
import { Box, Container, Divider, Grid, IconButton, Link, Typography, useTheme } from "@mui/material"

export default function Footer() {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "rgba(245, 245, 245, 0.8)" : "rgba(30, 30, 30, 0.8)",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Link
                href="#"
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "text.primary",
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
                    src="\WhatsApp Image 2025-03-18 at 20.51.59_31b61cd3.jpg" 
                    alt="RP" 
                    style={{
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover", 
                    }}
                  />
                </Box>
                <Typography variant="h6" component="span" fontWeight="bold">
                  Regved's Portfolio
                </Typography>
              </Link>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              Building innovative solutions with modern technologies.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "text.secondary",
                  transition: "transform 0.2s ease, color 0.2s ease",
                  "&:hover": {
                    color: "primary.main",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "text.secondary",
                  transition: "transform 0.2s ease, color 0.2s ease",
                  "&:hover": {
                    color: "primary.main",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:example@example.com"
                size="small"
                sx={{
                  color: "text.secondary",
                  transition: "transform 0.2s ease, color 0.2s ease",
                  "&:hover": {
                    color: "primary.main",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <EmailIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" color="text.primary" gutterBottom fontWeight={600}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Home", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    underline="hover"
                    color="text.secondary"
                    sx={{
                      fontSize: "0.875rem",
                      transition: "color 0.2s ease, transform 0.2s ease",
                      display: "inline-block",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateX(3px)",
                      },
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle2" color="text.primary" gutterBottom fontWeight={600}>
              Technologies
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {[".NET", "AI & ML", "Web Development"].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    underline="hover"
                    color="text.secondary"
                    sx={{
                      fontSize: "0.875rem",
                      transition: "color 0.2s ease, transform 0.2s ease",
                      display: "inline-block",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateX(3px)",
                      },
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" color="text.primary" gutterBottom fontWeight={600}>
              Contact
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Nagpur, Maharashtra
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  href="mailto:example@example.com"
                  underline="hover"
                  color="text.secondary"
                  sx={{
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  regregd@outlook.com
                </Link>
              </Box>
              <Box component="li">
                <Link
                  href="tel:+15551234567"
                  underline="hover"
                  color="text.secondary"
                  sx={{
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  +91 9049874883
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Regved's Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

