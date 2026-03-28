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
  "company": "Datamatics Global Services Limited",
  "location": "Mumbai, Maharashtra",
  "period": "June 2025 – Present",
  "description": [
    "Develop & maintain ASP.NET Core Web API modules on the Reliance Motor Claims platform, handling OD, PA, and Theft claim lifecycle across 10,000+ annual claims.",
    "Designed WCF services on IIS (basicHttpBinding / wsHttpBinding) for SOAP-based exchange with 3 insurers, 50+ surveyor portals, and 200+ garages via BizTalk middleware.",
    "Built 4 Azure Functions on daily schedules generating claims reports for 200+ garages, replacing a manual Excel-based process.",
    "Used GitHub Copilot & Claude for stored procedure scaffolding and API boilerplate, cutting feature delivery time by 20%."
  ],
  "skills": [
    "ASP.NET Core",
    "C#",
    "WCF/SOAP",
    "IIS",
    "Azure Functions",
    "BizTalk",
    "SQL Server",
    "REST API",
    "Git",
    "Agile/Scrum",
    "SQL Query Optimization",
    "GitHub Copilot"
  ]
},
    {
      "title": "Software Developer",
      "company": "Cylsys Software Solution Private Limited",
      "location": "Narsinghpur, Madhya Pradesh",
      "period": "July 2024 – March 2025",
      "description": [
        "Built 8 compliance & declaration forms (Antifraud, Conflict of Interest, NDA, HR onboarding) for UTI Mutual Fund using ASP.NET Core 5 MVC, ADO.NET, Dapper, and PostgreSQL with fiscal-year eligibility checks.",
        "Developed 12+ RESTful APIs with ADO.NET and SQL Server for Nuvama's financial transactions system, handling role-based approval workflows for makers, checkers, and risk approvers.",
        "Implemented file upload/download with ZIP compression, token-based auth middleware, Serilog structured logging, and health-check endpoints."
      ],
      "skills": ["ASP.NET Core 5", "ADO.NET", "Dapper", "PostgreSQL", "SQL Server", "JWT", "Serilog", "RESTful APIs", "Azure", ".NET 5/6/8"]
    },
    {
      "title": "Associate Software Developer",
      "company": "MKP IT Services Private Limited",
      "location": "Nagpur, Maharashtra",
      "period": "December 2023 - May 2024",
      "description": [
        "Developed 5 CRM modules with ASP.NET MVC (.NET 6), Entity Framework Core, and a React dashboard using CQRS/MediatR, managing 50,000+ customer records across 3 departments.",
        "Built 8 Inventory Management Web API endpoints with JWT role-based authorization, improving response times by 25% on read-heavy reporting endpoints.",
        "Led refactoring of 15+ raw SQL queries to EF Core LINQ with code-first migrations, cutting query time by 20% on reporting pages."
      ],
      "skills": [".NET 6", "ASP.NET MVC", "Entity Framework Core", "CQRS", "MediatR", "React", "SQL Server", "JWT", "LINQ", "Agile", "CI/CD"]
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

                      <Box component="ul" sx={{ mb: 3, flexGrow: 1, pl: 2, m: 0, listStyle: "none" }}>
                        {(Array.isArray(exp.description) ? exp.description : [exp.description]).map((point, i) => (
                          <Box component="li" key={i} sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                            <Box component="span" sx={{ mr: 1, mt: "3px", color: "primary.main", fontSize: "0.6rem", flexShrink: 0 }}>▸</Box>
                            <Typography variant="body2" color="text.secondary">{point}</Typography>
                          </Box>
                        ))}
                      </Box>

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

