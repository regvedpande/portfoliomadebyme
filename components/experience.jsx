"use client"

import { Box, Chip, Container, Grid, Paper, Typography, useTheme } from "@mui/material"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function Experience() {
  const theme = useTheme()
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 })
  const [animatedStats, setAnimatedStats] = useState({
    net: 0,
    java: 0,
    analysis: 0,
    projects: 0,
  })

  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000 // 2 seconds
      const interval = 20 // Update every 20ms
      const steps = duration / interval

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setAnimatedStats({
          net: Math.min(Math.floor(8 * progress), 8),
          java: Math.min(Math.floor(6 * progress), 6),
          analysis: Math.min(Math.floor(3 * progress), 3),
          projects: Math.min(Math.floor(17 * progress), 17),
        })

        if (step >= steps) clearInterval(timer)
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isStatsInView])

  const experiences = [
    {
      "title": "Software Developer",
      "company": "Cylsys Software Solution Private Limited",
      "location": "Narsinghpur, Madhya Pradesh",
      "period": "July 2024 - March 2025",
      "description": "Implemented MVC architecture with ADO.NET, Crypto Helper, PostgreSQL, and developed robust RESTful APIs , enabling secure transaction processing for over 200K users.",
      "skills": [".NET Core", "MVC", "ADO.NET", "PostgreSQL", "JWT", "Azure", "RESTful API"]
    },
    {
      title: "Java Full Stack Intern",
      company: "MKP IT Services",
      location: "Nagpur, Maharashtra",
      period: "October 2023 - June 2024",
      description:
        "Engineered full-stack web applications utilizing Java backend technologies (Spring Boot, Hibernate ORM, RESTful APIs) integrated with React.js frontend, implementing responsive designs.",
      skills: ["Java", "Spring Boot", "React.js", "RESTful APIs", "Hibernate", "Maven"],
    },
    {
      title: "Technology Associate",
      company: "Acmegrade Private Limited",
      location: "Bengaluru, Karnataka",
      period: "January 2023 - March 2023",
      description: "Surpassed expectations by consistently exceeding targets and delivering measurable results within the tech landscape. Trusted advisor to C-suite executives, building and nurturing strong relationships with leadership teams. Secured key partnerships through strategic problem-solving and effective collaboration.",
      skills: ["Data Analytics", "Python", "Strategic Problem Solving", "Microsoft Excel"]
    }

  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Box component="section" sx={{ py: 10 }} id="experience">
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
              Professional Experience
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
              My journey building enterprise solutions and driving technological innovation
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} md={4} key={exp.title}>
                <motion.div
                  variants={item}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  style={{ height: "100%" }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      borderRadius: "16px",
                      "&:hover": {
                        boxShadow: (theme) => theme.shadows[8],
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "4px",
                        background: (theme) =>
                          theme.palette.mode === "light"
                            ? "linear-gradient(90deg, #333333, #555555)"
                            : "linear-gradient(90deg, #f5f5f5, #bbbbbb)",
                      },
                    }}
                  >
                    <Box
                      sx={{ position: "relative", zIndex: 1, flexGrow: 1, display: "flex", flexDirection: "column" }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h5" component="h3" color="text.primary" fontWeight={600}>
                          {exp.title}
                        </Typography>

                        <Box sx={{ mt: 1 }}>
                          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            {exp.company}
                          </Typography>

                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 0.5 }}>
                            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                              {exp.location}
                            </Typography>

                            <Chip
                              label={exp.period}
                              size="small"
                              sx={{
                                backgroundColor: (theme) => `${theme.palette.primary.main}20`,
                                color: "primary.main",
                                fontWeight: 500,
                                fontSize: "0.7rem",
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>

                      <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3, flexGrow: 1 }}>
                        {exp.description}
                      </Typography>

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
                        {exp.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                              color: "text.primary",
                              "&:hover": {
                                backgroundColor: (theme) => `${theme.palette.primary.main}20`,
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
            <Typography variant="h5" color="text.primary" fontWeight={600} gutterBottom>
              Education
            </Typography>
            <Box sx={{ mt: 3, mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Box>
                  <Typography variant="h6" color="text.primary">
                    Bachelor of Technology in Computer Science and Engineering
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
                    (Specialisation in Artificial Intelligence and Machine Learning)
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Lovely Professional University - Phagwara, Punjab
                  </Typography>
                </Box>
                <Chip
                  label="2019 - 2023"
                  size="small"
                  sx={{
                    alignSelf: { xs: "flex-start", md: "center" },
                    mt: { xs: 1, md: 0 },
                    backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                    color: "text.primary",
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

