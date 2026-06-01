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
  "location": "Mumbai, Maharashtra (Remote)",
  "period": "Jun 2025 - May 2026",
  "description": [
    "Developed and maintained ASP.NET Core Web APIs, WebForms, and Savvion BPM features for the Reliance Motor Claims platform across OD, Theft, and PA claim types, supporting 10,000+ claims a year from FNOL to payout.",
    "Built and consumed WCF/SOAP services on IIS for insurer, surveyor, and garage integrations, including message contracts, claim-status updates, and fault-tolerant BizTalk routing.",
    "Built 6 scheduled Azure Functions for daily claims reporting and reconciliation across 200+ garages and surveyors, helping reduce manual reporting effort.",
    "Tuned high-volume SQL Server stored procedures and EF Core queries, achieving 30% faster report generation and 25% lower peak database load during daily reporting windows."
  ],
  "skills": [
    "ASP.NET Core",
    "C#",
    "WebForms",
    "WCF/SOAP",
    "IIS",
    "Azure Functions",
    "BizTalk",
    "Savvion BPM",
    "SQL Server",
    "EF Core",
    "REST API",
    "SQL Query Optimization",
    "GitHub Copilot",
    "Claude"
  ]
},
    {
      "title": "Software Developer",
      "company": "Cylsys Software Solution Private Limited",
      "location": "Narsinghpur, Madhya Pradesh",
      "period": "Jul 2024 - Mar 2025",
      "description": [
        "Delivered 8 fiscal-year compliance forms for UTI Mutual Fund on ASP.NET Core MVC with Razor Pages, Dapper, and PostgreSQL, including a year-based eligibility engine, RBAC, validation rules, and audit logging.",
        "Built and deployed 12+ RESTful Web APIs for the Nuvama financial transactions platform with a React approval dashboard, maker-checker-risk workflows, audit trail, and SQL Server backend.",
        "Implemented JWT authentication middleware, Serilog structured logging, health checks, and xUnit tests across core approval workflows while coordinating with QA and cross-functional teams."
      ],
      "skills": ["ASP.NET Core MVC", "Razor Pages", "React", "ADO.NET", "Dapper", "PostgreSQL", "SQL Server", "JWT", "Serilog", "xUnit", "Health Checks"]
    },
    {
      "title": "Software Developer Intern (Contract)",
      "company": "MKP IT Services Private Limited",
      "location": "Nagpur, Maharashtra",
      "period": "December 2023 - May 2024",
      "description": [
        "Ramped up quickly on C#, ASP.NET Core, and EF Core while building UI components and CRUD features for an internal CRM on a React, Bootstrap, and SQL Server stack.",
        "Built and tested REST API endpoints with JWT authentication and Swagger documentation, plus SQL Server queries, stored procedures, EF Core LINQ, code-first migrations, and xUnit basics.",
        "Contributed across Agile ceremonies, Git branching, pull requests, code reviews, and GitHub Actions CI/CD while delivering small features and bug fixes independently."
      ],
      "skills": ["C#", ".NET 6", "ASP.NET Core", "Entity Framework Core", "React", "Bootstrap", "SQL Server", "JWT", "Swagger", "LINQ", "GitHub Actions"]
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
              My journey building production software for insurance, fintech, compliance, and CRM teams
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} md={4} key={`${exp.company}-${exp.period}`}>
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
                    Bachelor of Technology in Computer Science & Engineering
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
                    (Specialisation in Artificial Intelligence and Machine Learning)
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Lovely Professional University - Phagwara, Punjab
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Certifications: AZ-900 Azure Fundamentals (2025), Microsoft Generative AI Certification (2025), Advanced C# Development
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

