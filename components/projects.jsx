"use client"

import {
  Close as CloseIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Fullscreen as FullscreenIcon,
  GitHub as GitHubIcon,
  Language as LanguageIcon,
  Pause as PauseIcon,
  PlayArrow as PlayIcon,
  Star as StarIcon,
  VolumeOff as VolumeOffIcon,
  VolumeUp as VolumeUpIcon,
} from "@mui/icons-material"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slider,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null)
  const [tabValue, setTabValue] = useState("all")
  const [techDialogOpen, setTechDialogOpen] = useState(false)
  const [selectedTech, setSelectedTech] = useState([])
  const [videoDialogOpen, setVideoDialogOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // Video player state
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const openTechDialog = (technologies) => {
    setSelectedTech(technologies)
    setTechDialogOpen(true)
  }

  const openVideoDialog = (project) => {
    setIsLoading(true)
    setCurrentProject(project)
    setVideoDialogOpen(true)

    // Add a simulated loading time
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  const closeVideoDialog = () => {
    setVideoDialogOpen(false)
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  // Video player controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (event, newValue) => {
    if (videoRef.current) {
      videoRef.current.volume = newValue
      setVolume(newValue)
      setIsMuted(newValue === 0)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (event, newValue) => {
    if (videoRef.current) {
      videoRef.current.currentTime = newValue
      setCurrentTime(newValue)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen()
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen()
      }
    }
  }

  // Format time in MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const handleVideoLoaded = () => {
    setIsLoading(false)
  }

  const projects = [
    // .NET Projects
    {
      id: "companyPages",
      title: "Reliance Motor Claims Platform",
      description: "End-to-end motor-claims processing across OD, Theft, and PA claim types, supporting 10,000+ claims a year from FNOL to garage settlement and payout.",
      image: "/reliance.jpg?height=300&width=500",
      category: "net",
      "technologies": [
        "ASP.NET Core Web API",
        "WebForms",
        "WCF",
        "SOAP",
        "IIS",
        "BizTalk",
        "Savvion BPM",
        "Azure Functions",
        "EF Core",
        "SQL Server",
        "GitHub Copilot",
        "Claude"
      ],
      live: "https://your-company-website.com",
      liveProject: true,
      videoUrl: "",
      "longDescription":"Developed and maintained ASP.NET Core Web APIs, WebForms, and Savvion BPM features for Reliance Motor Claims across OD, Theft, and PA claim types. Built and consumed WCF/SOAP services on IIS to integrate insurers, 50+ surveyor portals, and 200+ garages through BizTalk message routing and fault handling. Built 6 scheduled Azure Functions for daily claims reporting and reconciliation, then tuned high-volume SQL Server stored procedures and EF Core queries to deliver 30% faster report generation and 25% lower peak database load."
},
    {
      id: "net1",
      title: "UTI Compliance and Declaration System",
      description:
        "8 fiscal-year compliance forms for UTI Mutual Fund with a year-based eligibility engine, RBAC, audit logging, and validation rules aligned to regulatory workflows.",
      image: "/uti-mutual-fund.png?height=300&width=500",
      category: "net",
      technologies: [
        "ASP.NET Core MVC",
        "Razor Pages",
        "Dapper",
        "ADO.NET",
        "PostgreSQL",
        "JWT",
        "Serilog",
        "RBAC",
        "jQuery",
      ],
      live: "https://ecommerce-demo.vercel.app",
      featured: true,
      liveProject: true,
      videoUrl: "",
      longDescription:
        "Delivered 8 fiscal-year compliance and declaration forms for UTI Mutual Fund using ASP.NET Core MVC, Razor Pages, Dapper, and PostgreSQL. Built year-based submission eligibility, role-based access, validation rules, and audit logging so administrators could track form status, user actions, and compliance history with confidence.",
    },
    {
      id: "net2",
      title: "Nuvama Financial Invocation System",
      description:
        "12+ RESTful APIs powering a maker-checker-risk approval dashboard with audit trail, role-based access, and production-grade transaction workflow support.",
      image: "/Nuvama-Wealth-Management.jpg?height=300&width=500",
      category: "net",
      technologies: ["ASP.NET Core Web API", "React", "SQL Server", "JWT", "ADO.NET", "Serilog", "xUnit", "Health Checks"],
      live: "https://healthcare-demo.vercel.app",
      liveProject: true,
      videoUrl: "",
      longDescription:
        "Built and deployed 12+ RESTful Web APIs for Nuvama's financial transactions platform with a React approval dashboard, SQL Server backend, JWT authentication, structured Serilog logging, health checks, and xUnit coverage. The system supported maker-checker-risk approvals, audit trail requirements, and 99.5% uptime during rollout.",
    },
    {
  id: "net3",
  title: "Perfect Pitch CRM",
  description:
    "Internal CRM with 5 modules, real-time SignalR notifications, and a live pipeline-tracking dashboard built on C#, .NET 6, EF Core, React, and SQL Server.",
  image: "/Screenshot 2025-03-20 114617.png?height=300&width=500",
  category: "net",
  technologies: ["C#", ".NET 6", "ASP.NET Core", "EF Core", "React", "Bootstrap", "SignalR", "SQL Server", "GitHub Actions"],
  live: "https://crm-demo.vercel.app",
  liveProject: true,
  videoUrl: "/Sales.mp4",
  longDescription:
    "Contributed to Perfect Pitch CRM during early .NET training, building UI components, CRUD features, REST API endpoints, JWT-secured workflows, and SQL Server queries with senior developer guidance. The work strengthened production habits around code reviews, EF Core LINQ, code-first migrations, Swagger documentation, Agile delivery, Git branching, pull requests, and GitHub Actions CI/CD.",
},
    {
      id: "net5",
      title: "Secure ASP.NET Core API Starter",
      description: "A production-minded Web API starter focused on JWT authentication, Swagger/OpenAPI documentation, health checks, structured logging, and clean service boundaries.",
      image: "/agenda-analysis-business-plan-businessman.jpg?height=300&width=500",
      category: "net",
      technologies: [".NET 6", "ASP.NET Core", "JWT", "Entity Framework Core", "SQL Server", "Swagger", "Serilog", "xUnit"],
      github: "https://github.com/regvedpande/nextgenapi",
      live: "https://finance-tracker-demo.vercel.app",
      liveProject: false,
      videoUrl: "/Untitled video - Made with Clipchamp (5).mp4",
      longDescription:
        "A secure ASP.NET Core API foundation that reflects the backend patterns used across my client work: token-based authentication, Swagger/OpenAPI documentation, EF Core data access, structured Serilog logs, health-check endpoints, and testable service boundaries. Built to demonstrate clean, practical API engineering rather than a throwaway demo.",
    },
    {
      id: "net6",
      title: "Razor Pages Real-Time Insight Platform",
      description:
        "A Razor Pages and SignalR prototype for real-time dashboards, cloud-ready events, secure helper services, and operational logging.",
      image: "/skw6fead.png?height=300&width=500",
      category: "net",
      technologies: [
        "Razor Pages",
        ".NET Core",
        "SignalR",
        "Azure",
        "Serilog",
        "C#",
        "Dependency Injection",
        "Entity Framework",
      ],
      github: "https://github.com/regvedpande/razoriot",
      live: "https://task-manager-demo.vercel.app",
      liveProject: false,
      videoUrl: "/Untitled video - Made with Clipchamp (6).mp4",
      longDescription:
        "A real-time dashboard prototype using Razor Pages, SignalR, EF Core, and Azure-ready service patterns. It highlights the same fundamentals I use in enterprise systems: dependency injection, secure helper services, operational logs, responsive server-rendered pages, and live updates that keep users close to changing data.",
    },
    {
      id: "net7",
      title: "Inventory Management API",
      description: "A .NET API for inventory records, reporting endpoints, JWT role-based authorization, SQL Server queries, and Swagger-backed testing.",
      image: "/360_F_550146337_826DHUXoFx18MRTMUauX3fyRw9R7S1BO.jpg?height=300&width=500",
      category: "net",
      technologies: [".NET 8", "C#", "ASP.NET Core Web API", "SQL Server", "JWT", "Swagger", "LINQ"],
      github: "https://github.com/regvedpande/inventorymanagement",
      live: "https://document-management-demo.vercel.app",
      featured: false,
      liveProject: false,
      videoUrl: "Untitled video - Made with Clipchamp (2).mp4",
      longDescription:
        "A practical inventory API shaped around the backend tasks I handled during internship work: CRUD endpoints, JWT-secured access, SQL Server reporting queries, Swagger documentation, LINQ-based data access, and incremental performance improvements for read-heavy screens.",
    },
    {
      id: "net8",
      title: "Role-Based Portal Prototype",
      description:
        "A secure portal concept demonstrating role-based access, protected records, API-first workflows, and Azure-ready deployment patterns.",
      image: "/istockphoto-1256189055-612x612.jpg?height=300&width=500",
      category: "net",
      technologies: [".NET 7", "C#", "Entity Framework Core", "JWT", "Azure", "Repository Pattern"],
      github: "https://github.com/regvedpande/healthcareportal",
      live: "https://healthcare-portal-demo.vercel.app",
      featured: false,
      liveProject: false,
      videoUrl: "",
      longDescription:
        "A secure role-based portal prototype that demonstrates authenticated access, protected records, clean data boundaries, and Azure-ready architecture. The project mirrors the access-control thinking used in compliance and financial approval systems without positioning it as a live healthcare product.",
    },
    {
      id: "net9",
      title: "Learning Management API Concept",
      description: "A .NET and real-time communication concept for course workflows, progress tracking, SignalR updates, and identity-aware access.",
      image: "/angular9826.logowik.com.jpg?height=300&width=500",
      category: "net",
      technologies: [".NET 6", "React", "SQL Server", "SignalR", "Identity", "Azure"],
      github: "https://github.com/regvedpande/elearningplatform",
      live: "https://elearning-demo.vercel.app",
      featured: false,
      liveProject: false,
      videoUrl: "",
      longDescription:
        "A learning-management concept used to explore .NET API design, React screens, SQL Server persistence, identity-aware access, and SignalR updates. It keeps the focus on architecture, API contracts, and workflow modeling rather than inflated feature claims.",
    },

    // Python/ML Projects - consolidated into one category
    {
      id: "python1",
      title: "CipherVault",
      description:
        "A Flask and React file-security project using AES encryption, PBKDF2 key derivation, and a practical workflow for protecting sensitive documents.",
      image: "/hq720.jpg?height=300&width=500",
      category: "python",
      technologies: ["Python", "Flask", "React", "Cryptography", "AES", "PBKDF2", "PyInstaller"],
      github: "https://github.com/regvedpande/encryptanddecrypt.git",
      live: "https://ciphervault-demo.example.com",
      featured: true,
      videoUrl: "DECRY(1).mp4",
      longDescription:
        "CipherVault is a file encryption and decryption application built with Flask and React. It uses AES encryption, PBKDF2 key derivation, and a clean user flow for protecting documents, showing my interest in secure application patterns beyond the .NET ecosystem.",
    },
    {
      id: "python4",
      title: "Dream Journal Sentiment Analyzer API",
      description: "A FastAPI project that analyzes text sentiment, extracts lightweight themes, and returns structured responses through Pydantic models.",
      image: "/FastAPI_b.jpg?height=300&width=500",
      category: "python",
      technologies: ["Python", "FastAPI", "TextBlob", "NLTK", "Pydantic"],
      github: "https://github.com/regvedpande/dreamjournalapi",
      live: "https://dream-analyzer-api-demo.vercel.app",
      videoUrl: "/Faster.mp4",
      longDescription:
        "A FastAPI-based text analysis project that processes user-submitted content, applies TextBlob and NLTK for sentiment/theme extraction, and returns typed Pydantic responses. It complements my API background with lightweight natural-language processing.",
    },
    {
      id: "python3",
      title: "Deep Learning Image Recognition API",
      description: "A Flask API that wraps TensorFlow and OpenCV image-recognition workflows for upload, preprocessing, prediction, and response formatting.",
      image: "/1706850719554.png?height=300&width=500",
      category: "python",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
      github: "https://github.com/regvedpande/imagerecognitionapi.git",
      live: "https://your-live-demo-link.com",
      videoUrl: "/pot.mp4",
      longDescription:
        "An image-recognition API that uses a pre-trained TensorFlow model with OpenCV preprocessing to return predictions and confidence scores. It demonstrates practical API wrapping, request handling, and Docker-friendly deployment around AI workloads.",
    },
    {
      id: "ai1",
      title: "AI Debate Simulator",
      description: "A Gemini API web app that generates structured multi-round debates between contrasting personas from a user-submitted topic.",
      image:
        "/1-Google-Rolls-Out-Gemini-2.0-Flash-as-Default-Introduces-2.0-Pro-Experimental-Trial-Source-winbuzzer.com_.jpg?height=300&width=500",
      category: "python",
      technologies: ["Python", "Flask", "Gemini API", "HTML", "CSS"],
      github: "https://github.com/regvedpande/ai-debate-simulator",
      live: "https://ai-debate-simulator-demo.vercel.app",
      featured: true,
      videoUrl: "/aiiNTEGRATION.mp4",
      longDescription:
        "A Flask-based Gemini API application that turns a user topic into a structured debate between contrasting personas. The project connects directly to my resume's AI-integration focus: prompt design, API orchestration, response formatting, and clear front-end presentation.",
    },
    {
      id: "ai2",
      title: "Gemini Powered Tutor",
      description:
        "A Django and React tutoring assistant that connects to the Gemini API and returns guided learning responses through a responsive chat flow.",
      image: "/f34d81945efec19e43ad4899cbb737e1.png?height=300&width=500",
      category: "python",
      technologies: ["Python", "Django", "React", "Gemini API", "CORS"],
      github: "https://github.com/regvedpande/geminipoweredtutor.git",
      live: "https://predictive-maintenance-demo.vercel.app",
      videoUrl: "/Gemini.mp4",
      longDescription:
        "A Django and React tutoring assistant powered by the Gemini API. It demonstrates the AI integration work highlighted in my resume: request routing, CORS configuration, prompt handling, chat-style UX, and clean API responses for learning-oriented interactions.",
    },
    {
      id: "ai3",
      title: "Stable Diffusion Image Generator",
      description:
        "A text-to-image generation project using Diffusers, PyTorch, Gradio, configuration files, and prompt-driven image output.",
      image: "/creating-easy-stable-diffusion-3-sd3-image-with-old-model-v0-1mf0wtfgq5kc1.jpg?height=300&width=500",
      category: "python",
      technologies: ["Python", "Diffusers", "Torch", "Gradio", "PyYAML", "Pillow"],
      github: "https://github.com/regvedpande/stablediffusion",
      live: "https://your-deployed-app-url.com",
      videoUrl: "/Pipeline.mp4",
      longDescription:
        "A Stable Diffusion image-generation project using Diffusers, Gradio, PyTorch, PyYAML, and Pillow. It supports prompt-based generation, configurable models, automatic image saving, and a simple UI/CLI flow for experimenting with generative AI pipelines.",
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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "rgba(245, 245, 245, 0.5)" : "rgba(30, 30, 30, 0.5)",
      }}
      id="projects"
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
              My Projects
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
              Over the past 2+ years, I've built ASP.NET Core APIs, Azure automation, React dashboards, and secure data workflows for insurance, fintech, compliance, and CRM teams.
            </Typography>
          </Box>
        </motion.div>

        {/* Client Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                display: "flex",
                alignItems: "center",
                color: "text.primary",
                justifyContent: "center",
              }}
            >
              <StarIcon sx={{ mr: 1, color: "rgb(234, 179, 8)" }} />
              My Clients
            </Typography>

            <Grid container spacing={3}>
              {projects
                .filter((project) => project.liveProject === true)
                .map((project) => (
                  <Grid item xs={12} sm={6} md={3} key={project.id}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{ height: "100%" }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: "16px",
                          boxShadow: theme.shadows[4],
                          transition: "transform 0.3s ease, box-shadow 0.3s ease",
                          "&:hover": {
                            boxShadow: theme.shadows[8],
                            transform: "translateY(-5px)",
                          },
                        }}
                      >
                        <Box sx={{ position: "relative", height: { xs: "180px", md: "160px" }, overflow: "hidden" }}>
                          <CardMedia
                            component="img"
                            height={isMobile ? "180" : "160"}
                            image={project.image}
                            alt={project.title}
                            sx={{
                              transition: "transform 0.5s ease",
                              objectFit: "cover",
                              width: "100%",
                              "&:hover": {
                                transform: "scale(1.1)",
                              },
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                              display: "flex",
                              alignItems: "flex-end",
                              padding: 2,
                              "&:hover": {
                                opacity: 1,
                              },
                            }}
                          >
                            <Box sx={{ display: "flex", gap: 1 }}>
                              {!(
                                project.id === "net1" ||
                                project.id === "net2" ||
                                project.id === "net3" ||
                                project.id === "companyPages"
                              ) && (
                                <Button
                                  variant="contained"
                                  size="small"
                                  startIcon={<LanguageIcon />}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    openVideoDialog(project)
                                  }}
                                  sx={{
                                    backgroundColor: "rgba(255,255,255,0.2)",
                                    backdropFilter: "blur(4px)",
                                    "&:hover": {
                                      backgroundColor: "rgba(255,255,255,0.3)",
                                    },
                                  }}
                                >
                                  Demo
                                </Button>
                              )}
                            </Box>
                          </Box>
                        </Box>

                        <CardContent sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
                          <Typography variant="h6" component="h3" gutterBottom>
                            {project.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                            {project.description}
                          </Typography>
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: "auto" }}>
                            {project.technologies.slice(0, 3).map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                  backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                                  color: "text.primary",
                                  fontSize: "0.7rem",
                                }}
                              />
                            ))}
                            {project.technologies.length > 3 && (
                              <Chip
                                label={`+${project.technologies.length - 3}`}
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  openTechDialog(project.technologies)
                                }}
                                sx={{
                                  backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                                  color: "text.primary",
                                  fontSize: "0.7rem",
                                  cursor: "pointer",
                                }}
                              />
                            )}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </motion.div>

        {/* All Projects with Tabs */}
        <Box sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              mb: 6,
              "& .MuiTabs-flexContainer": {
                justifyContent: { xs: "flex-start", md: "center" },
              },
              "& .MuiTab-root": {
                minWidth: { xs: 120, md: 150 },
                fontWeight: 500,
                fontSize: "1rem",
                textTransform: "none",
                mx: 1,
              },
              "& .Mui-selected": {
                color: "primary.main",
                fontWeight: 700,
              },
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
              "& .MuiTabs-scrollButtons": {
                display: { xs: "flex", md: "none" },
              },
            }}
          >
            <Tab label="All Projects" value="all" />
            <Tab label=".NET Projects" value="net" />
            <Tab label="AI & Integration" value="python" />
          </Tabs>

          <Grid container spacing={4}>
            {projects
              .filter(
                (project) =>
                  tabValue === "all" ||
                  (tabValue === "net" && project.category === "net") ||
                  (tabValue !== "net" && project.category === tabValue),
              )
              .map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <motion.div
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    style={{ height: "100%" }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "16px",
                        boxShadow: theme.shadows[2],
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          boxShadow: theme.shadows[6],
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Box sx={{ position: "relative", height: "180px", overflow: "hidden" }}>
                        <CardMedia
                          component="img"
                          height="180"
                          image={project.image}
                          alt={project.title}
                          loading="lazy"
                          sx={{
                            transition: "transform 0.3s ease",
                            objectFit: "cover",
                            width: "100%",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                        />
                      </Box>
                      <CardContent sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, flexGrow: 1 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                                color: "text.primary",
                                fontSize: "0.7rem",
                              }}
                            />
                          ))}
                          {project.technologies.length > 3 && (
                            <Chip
                              label={`+${project.technologies.length - 3}`}
                              size="small"
                              onClick={(e) => {
                                e.stopPropagation()
                                openTechDialog(project.technologies)
                              }}
                              sx={{
                                backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                                color: "text.primary",
                                fontSize: "0.7rem",
                                cursor: "pointer",
                              }}
                            />
                          )}
                        </Box>

                        {expandedId === project.id && (
                          <Box sx={{ mt: 2, mb: 2 }}>
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {project.longDescription}
                            </Typography>
                          </Box>
                        )}

                        <Button
                          variant="text"
                          color="primary"
                          fullWidth
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleExpand(project.id)
                          }}
                          endIcon={expandedId === project.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                          sx={{ mb: 1, mt: "auto" }}
                        >
                          {expandedId === project.id ? "Show Less" : "Show More"}
                        </Button>
                      </CardContent>
                      <CardActions sx={{ p: 3, pt: 0, justifyContent: "space-between" }}>
                        {!project.liveProject && (
                          <Button
                            size="small"
                            startIcon={<GitHubIcon />}
                            component="a"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            variant="outlined"
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                              borderRadius: "8px",
                              transition: "transform 0.2s ease, background-color 0.2s ease",
                              "&:hover": {
                                transform: "translateY(-2px)",
                              },
                            }}
                          >
                            GitHub
                          </Button>
                        )}
                        {/* Hide Live Demo button for specific projects */}
                        {!(
                          project.id === "net1" ||
                          project.id === "net2" ||
                          project.id === "net3" ||
                          project.id === "companyPages"
                        ) && (
                          <Button
                            size="small"
                            startIcon={<LanguageIcon />}
                            aria-label="Live Demo"
                            variant="contained"
                            onClick={(e) => {
                              e.stopPropagation()
                              openVideoDialog(project)
                            }}
                            sx={{
                              borderRadius: "8px",
                              transition: "transform 0.2s ease, box-shadow 0.2s ease",
                              marginLeft: !project.liveProject ? "auto" : "0",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                              },
                            }}
                          >
                            Live Demo
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* Technologies Dialog */}
        <Dialog open={techDialogOpen} onClose={() => setTechDialogOpen(false)} aria-labelledby="tech-dialog-title">
          <DialogTitle id="tech-dialog-title">Technologies Used</DialogTitle>
          <DialogContent>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {selectedTech.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                    color: "text.primary",
                  }}
                />
              ))}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setTechDialogOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>

        {/* Video Player Dialog */}
        <Dialog
          open={videoDialogOpen}
          onClose={closeVideoDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: "12px",
              overflow: "hidden",
              bgcolor: "background.paper",
            },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <IconButton
              aria-label="close"
              onClick={closeVideoDialog}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
                bgcolor: "rgba(0,0,0,0.5)",
                zIndex: 2,
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.7)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box sx={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
              <video
                ref={videoRef}
                src={currentProject?.videoUrl}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onLoadedData={handleVideoLoaded}
                onEnded={() => setIsPlaying(false)}
              />
              {isLoading && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "3px solid rgba(255,255,255,0.3)",
                      borderTop: "3px solid #fff",
                      animation: "spin 1s linear infinite",
                      "@keyframes spin": {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" },
                      },
                    }}
                  />
                </Box>
              )}

              {/* Video Controls Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 2,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {/* Progress Bar */}
                <Slider
                  value={currentTime}
                  min={0}
                  max={duration || 100}
                  onChange={handleSeek}
                  sx={{
                    color: "#f00",
                    height: 4,
                    "& .MuiSlider-thumb": {
                      width: 12,
                      height: 12,
                      transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                      "&:hover, &.Mui-focusVisible": {
                        boxShadow: "0px 0px 0px 8px rgba(255, 0, 0, 0.16)",
                      },
                      "&.Mui-active": {
                        width: 16,
                        height: 16,
                      },
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.28,
                    },
                  }}
                />

                {/* Controls */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton onClick={togglePlay} sx={{ color: "white" }}>
                      {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </IconButton>

                    <Box sx={{ display: "flex", alignItems: "center", width: "140px" }}>
                      <IconButton onClick={toggleMute} sx={{ color: "white" }}>
                        {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                      </IconButton>
                      <Slider
                        value={isMuted ? 0 : volume}
                        min={0}
                        max={1}
                        step={0.1}
                        onChange={handleVolumeChange}
                        sx={{
                          color: "white",
                          width: "80px",
                          "& .MuiSlider-thumb": {
                            width: 10,
                            height: 10,
                          },
                        }}
                      />
                    </Box>

                    <Typography variant="body2" sx={{ color: "white", ml: 1 }}>
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </Typography>
                  </Box>

                  <IconButton onClick={handleFullscreen} sx={{ color: "white" }}>
                    <FullscreenIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            {/* Video Title */}
            <Box sx={{ p: 2, bgcolor: "background.paper" }}>
              <Typography variant="h6" component="h3">
                {currentProject?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {currentProject?.description}
              </Typography>
            </Box>
          </Box>
        </Dialog>
      </Container>
    </Box>
  )
}
