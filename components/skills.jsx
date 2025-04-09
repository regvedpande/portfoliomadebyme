"use client"

import {
  Analytics as AnalyticsIcon,
  Api as ApiIcon,
  SmartToy as BotIcon,
  BrokenImage as BracesIcon,
  Psychology as BrainIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Storage as DatabaseIcon,
  DataObject as DataObjectIcon,
  Dataset as DatasetIcon,
  Dns as DnsIcon,
  Layers as LayersIcon,
  Hub as NetworkIcon,
  Extension as PuzzleIcon,
  Memory as ServerIcon,
  AccountTree as WorkflowIcon
} from "@mui/icons-material"
import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material"
import { motion } from "framer-motion"

export default function Skills() {
  const theme = useTheme()

  const skills = [
    // .NET & C# Development Skills (previously .NET Core)
    {
      name: ".NET Framework",
      icon: <CodeIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: ".NET & C# Development",
    },
    {
      name: "C#",
      icon: <BracesIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(37, 37, 37)" : "rgb(220, 220, 220)",
      category: ".NET & C# Development",
    },
    {
      name: ".NET 5/6/7/8",
      icon: <CodeIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: ".NET & C# Development",
    },
    {
      name: "Razor Pages",
      icon: <LayersIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: ".NET & C# Development",
    },
    {
      name: "Microservices",
      icon: <NetworkIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: ".NET & C# Development",
    },
    {
      name: "SignalR - Real-time",
      icon: <NetworkIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: ".NET & C# Development",
    },

    // Web API & ASP.NET Core Skills (previously ASP.NET)
    {
      name: "ASP.NET MVC",
      icon: <WorkflowIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(29, 29, 29)" : "rgb(210, 210, 210)",
      category: "Web API & ASP.NET Core",
    },
    {
      name: "RESTful API",
      icon: <ApiIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(37, 37, 37)" : "rgb(220, 220, 220)",
      category: "Web API & ASP.NET Core",
    },
    {
      name: "Web API (Controllers)",
      icon: <ApiIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(37, 37, 37)" : "rgb(220, 220, 220)",
      category: "Web API & ASP.NET Core",
    },
    {
      name: "JWT & Authentication",
      icon: <DnsIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Web API & ASP.NET Core",
    },
    {
      name: "Custom Middleware",
      icon: <PuzzleIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Web API & ASP.NET Core",
    },
    {
      name: "Dependency Injection",
      icon: <WorkflowIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(29, 29, 29)" : "rgb(210, 210, 210)",
      category: "Web API & ASP.NET Core",
    },

    // Database, ORM & Cloud Services Skills (previously Data)
    {
      name: "Entity Framework Core",
      icon: <DatabaseIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(96, 96, 96)" : "rgb(180, 180, 180)",
      category: "Database, ORM & Cloud Services",
    },
    {
      name: "SQL Server",
      icon: <DatabaseIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Database, ORM & Cloud Services",
    },
    {
      name: "Dapper Micro ORM",
      icon: <DataObjectIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Database, ORM & Cloud Services",
    },
    {
      name: "Azure Cloud Services",
      icon: <CloudIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Database, ORM & Cloud Services",
    },
    {
      name: "PostgreSQL",
      icon: <DatabaseIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Database, ORM & Cloud Services",
    },
    {
      name: "CI/CD Pipelines",
      icon: <DnsIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Database, ORM & Cloud Services",
    },

    // Python AI/ML Skills (kept as requested)
    {
      name: "Python",
      icon: <ServerIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Python",
    },
    {
      name: "Machine Learning",
      icon: <BrainIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Python",
    },
    {
      name: "Deep Learning",
      icon: <NetworkIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Python",
    },
    {
      name: "NLP",
      icon: <BotIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Python",
    },
    {
      name: "TensorFlow/PyTorch",
      icon: <DatasetIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Python",
    },
    {
      name: "Data Analysis",
      icon: <AnalyticsIcon fontSize="medium" />,
      color: theme.palette.mode === "light" ? "rgb(59, 59, 59)" : "rgb(200, 200, 200)",
      category: "Python",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "rgba(245, 245, 245, 0.5)" : "rgba(30, 30, 30, 0.5)",
      }}
      id="skills"
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 2,
                color: "text.primary",
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Skills & Expertise
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: "700px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              I've worked with a variety of technologies and frameworks to create robust and scalable applications.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* .NET & C# Development Skills */}
          <Grid item xs={12} md={6} lg={3}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                <DnsIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                .NET Development
              </Typography>

              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                {skills
                  .filter((skill) => skill.category === ".NET & C# Development")
                  .map((skill) => (
                    <motion.div key={skill.name} variants={item} whileHover={{ x: 5 }}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                              ? `${theme.palette.primary.main}10`
                              : `${theme.palette.primary.main}20`,
                          color: "text.primary",
                          borderRadius: "10px",
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                          "&:hover": {
                            transform: "scale(1.02)",
                            boxShadow: theme.shadows[3],
                          },
                        }}
                      >
                        <Box sx={{ mr: 2, color: theme.palette.primary.main }}>{skill.icon}</Box>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          </Grid>

          {/* Web API & ASP.NET Core Skills */}
          <Grid item xs={12} md={6} lg={3}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                <ApiIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                ASP.NET Core
              </Typography>

              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                {skills
                  .filter((skill) => skill.category === "Web API & ASP.NET Core")
                  .map((skill) => (
                    <motion.div key={skill.name} variants={item} whileHover={{ x: 5 }}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                              ? `${theme.palette.primary.main}10`
                              : `${theme.palette.primary.main}20`,
                          color: "text.primary",
                          borderRadius: "10px",
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                          "&:hover": {
                            transform: "scale(1.02)",
                            boxShadow: theme.shadows[3],
                          },
                        }}
                      >
                        <Box sx={{ mr: 2, color: theme.palette.primary.main }}>{skill.icon}</Box>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          </Grid>

          {/* Database, ORM & Cloud Services Skills */}
          <Grid item xs={12} md={6} lg={3}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                <CloudIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                Databases &amp; Cloud
              </Typography>

              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                {skills
                  .filter((skill) => skill.category === "Database, ORM & Cloud Services")
                  .map((skill) => (
                    <motion.div key={skill.name} variants={item} whileHover={{ x: 5 }}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                              ? `${theme.palette.primary.main}10`
                              : `${theme.palette.primary.main}20`,
                          color: "text.primary",
                          borderRadius: "10px",
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                          "&:hover": {
                            transform: "scale(1.02)",
                            boxShadow: theme.shadows[3],
                          },
                        }}
                      >
                        <Box sx={{ mr: 2, color: theme.palette.primary.main }}>{skill.icon}</Box>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          </Grid>

          {/* Python AI/ML Skills */}
          <Grid item xs={12} md={6} lg={3}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                <BrainIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                Python AI/ML
              </Typography>

              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                {skills
                  .filter((skill) => skill.category === "Python")
                  .map((skill) => (
                    <motion.div key={skill.name} variants={item} whileHover={{ x: 5 }}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                              ? `${theme.palette.primary.main}10`
                              : `${theme.palette.primary.main}20`,
                          color: "text.primary",
                          borderRadius: "10px",
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                          "&:hover": {
                            transform: "scale(1.02)",
                            boxShadow: theme.shadows[3],
                          },
                        }}
                      >
                        <Box sx={{ mr: 2, color: theme.palette.primary.main }}>{skill.icon}</Box>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginTop: "3rem" }}
        >
          <Paper
            elevation={2}
            sx={{
              p: 4,
              borderRadius: "16px",
              background: (theme) =>
                theme.palette.mode === "light"
                  ? "linear-gradient(135deg, rgba(51,51,51,0.03), rgba(85,85,85,0.03))"
                  : "linear-gradient(135deg, rgba(245,245,245,0.03), rgba(187,187,187,0.03))",
              border: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Grid container spacing={2} textAlign="center">
              <Grid item xs={6} md={3}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "12px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[4],
                      bgcolor: (theme) => `${theme.palette.primary.main}10`,
                    },
                  }}
                >
                  <Typography variant="h3" color="primary" fontWeight="bold">
                    18+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Months .NET
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "12px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[4],
                      bgcolor: (theme) => `${theme.palette.primary.main}10`,
                    },
                  }}
                >
                  <Typography variant="h3" color="primary" fontWeight="bold">
                    6+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    .NET Projects
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "12px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[4],
                      bgcolor: (theme) => `${theme.palette.primary.main}10`,
                    },
                  }}
                >
                  <Typography variant="h3" color="primary" fontWeight="bold">
                    3+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Months ML/AI
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "12px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[4],
                      bgcolor: (theme) => `${theme.palette.primary.main}10`,
                    },
                  }}
                >
                  <Typography variant="h3" color="primary" fontWeight="bold">
                    12+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Projects
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

