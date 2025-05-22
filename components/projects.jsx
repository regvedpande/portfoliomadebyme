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
      id: "net1",
      title: "UTI Compliance and Declaration System",
      description:
        "A robust platform for managing employee declarations and compliance at Mutual Fund. It features modules for anti-fraud declarations, NDAs, and compliance forms, ensuring data security and efficiency.",
      image: "/uti-mutual-fund.png?height=300&width=500",
      category: "net",
      technologies: [
        ".NET Core",
        "Dapper",
        "Auth",
        "JavaScript/jQuery",
        "C#",
        "PostgreSQL",
        "Azure",
        "Entity Framework",
      ],
      live: "https://ecommerce-demo.vercel.app",
      featured: true,
      liveProject: true,
      videoUrl: "",
      longDescription:
        "A comprehensive platform designed to manage employee declarations and compliance within UTI Mutual Fund. This system integrates multiple modules for handling anti-fraud declarations, non-disclosure agreements, and other compliance-related forms. Built using ASP.NET MVC, PostgreSQL, and Dapper, it ensures data integrity, security, and operational efficiency. The system supports user authentication, form submissions, and eligibility checks, providing a robust solution for HR and compliance management.",
    },
    {
      id: "net2",
      title: "Nuvama Manual Invocation System",
      description:
        "A sophisticated platform for managing manual invocation processes in financial services, featuring robust API integration and secure authentication.",
      image: "/Nuvama-Wealth-Management.jpg?height=300&width=500",
      category: "net",
      technologies: [".NET Core", "C#", "SQL Server", "Dapper", "Azure", "Bearer Token Authentication", "RESTful API"],
      live: "https://healthcare-demo.vercel.app",
      liveProject: true,
      videoUrl: "",
      longDescription:
        "The Manual Invocation System is designed to streamline the manual invocation process for financial instruments, providing a comprehensive solution for handling invocation requests, approvals, and data management. The system features a robust RESTful API secured with Bearer token authentication, enabling seamless integration with external financial applications and services. Key functionalities include user authentication, detailed logging, and efficient data handling through Dapper and PostgreSQL. The API supports various endpoints for managing invocation requests, updating approval statuses, and retrieving detailed data, ensuring efficient and secure data exchange. The system's architecture is designed for scalability and maintainability, making it a reliable tool for financial institutions.",
    },
    {
  id: "net3",
  title: "Advanced CRM Solution",
  description:
    "Empower your sales team with a comprehensive CRM system designed to streamline customer interactions and boost productivity.",
  image: "/Screenshot 2025-03-20 114617.png?height=300&width=500",
  category: "liveNet",
  technologies: [".NET MVC", "Entity Framework Core", "AI Integration", "JavaScript", "HTML", "Bootstrap"],
  live: "https://crm-demo.vercel.app",
  liveProject: true,
  videoUrl: "/Sales.mp4",
  longDescription:
    "This AI-powered CRM system is built using .NET MVC for structured and scalable application development, with Entity Framework Core enabling seamless and efficient database interactions. By integrating AI capabilities for predictive analytics and intelligent automation, it significantly boosts customer engagement and sales performance. The backend is powered by .NET, ensuring enterprise-level security, reliability, and scalability, while the frontend remains dynamic and responsive for an optimal user experience. Leveraging machine learning models, the system provides features like lead scoring, sentiment analysis, and trend forecasting—equipping businesses with actionable, data-driven insights. With EF Core, data persistence, query optimization, and transaction handling are streamlined, supporting complex operations in real time. Whether managing customer data, streamlining communication, or automating workflows, this CRM delivers next-gen intelligence and enterprise-grade efficiency.",
},
    {
      id: "companyPages",
      title: "Official Company Website",
      description: "A professional website showcasing our company's services and portfolio.",
      image: "/Screenshot 2025-03-20 122335.png?height=300&width=500",
      category: "officialWebsite",
      technologies: ["HTML", "Bootstrap", "JavaScript", "CSS"],
      live: "https://your-company-website.com",
      liveProject: true,
      videoUrl: "",
      longDescription:
        "Our official company website is designed to provide a seamless user experience with a modern and responsive layout. Built using HTML, Bootstrap, and JavaScript, it features service descriptions, client testimonials, a contact form, and an interactive portfolio. The website ensures accessibility and performance optimization to enhance user engagement.",
    },
    {
      id: "net5",
      title: "NextGen Secure API",
      description: "A robust, high-performance .NET API featuring advanced authentication and secure services.",
      image: "/agenda-analysis-business-plan-businessman.jpg?height=300&width=500",
      category: "net",
      technologies: [".NET 6", "JWT", "Entity Framework Core", "PostgreSQL", "C#", "Swagger", "ASP.NET Core"],
      github: "https://github.com/regvedpande/nextgenapi",
      live: "https://finance-tracker-demo.vercel.app",
      liveProject: false,
      videoUrl: "/Untitled video - Made with Clipchamp (5).mp4",
      longDescription:
        "NextGen Secure API is a state-of-the-art backend solution built on .NET 6 and designed for modern financial institutions. It leverages robust, token-based authentication using JWT to ensure enterprise-grade security and user integrity. With advanced data access powered by Entity Framework Core and SQL Server, this API offers unmatched scalability and performance. Its microservices-inspired architecture ensures that it can easily integrate with diverse frontend systems while maintaining top-notch security practices. This project exemplifies modern software craftsmanship and is engineered to meet the demands of today's high-security, high-performance environments.",
    },
    {
      id: "net6",
      title: "Razor IoT : Real-Time Insight Platform",
      description:
        "An avant-garde IoT solution built delivering real-time data, unmatched scalability, and a futuristic user experience.",
      image: "/skw6fead.png?height=300&width=500",
      category: "net",
      technologies: [
        "Razor Pages",
        ".NET Core",
        "CryptoHelper",
        "Logger",
        "Azure IoT",
        "C#",
        "SignalR",
        "Entity Framework",
      ],
      github: "https://github.com/regvedpande/razoriot",
      live: "https://task-manager-demo.vercel.app",
      liveProject: false,
      videoUrl: "/Untitled video - Made with Clipchamp (6).mp4",
      longDescription:
        "Razor IoT is a state-of-the-art real-time monitoring and control platform that leverages Razor Pages to deliver a sleek, responsive interface for managing connected devices. With cutting-edge technologies like SignalR for live updates and Azure IoT integration for robust cloud connectivity, this platform provides actionable insights and unparalleled scalability. Advanced crypto capabilities via CryptoHelper and comprehensive logging ensure secure and reliable operations. Designed to empower businesses and developers alike, Razor IoT sets a new benchmark in IoT innovation and performance.",
    },
    {
      id: "net7",
      title: "Inventory Management System",
      description: "A system for tracking inventory levels, orders, sales, and deliveries for retail businesses.",
      image: "/360_F_550146337_826DHUXoFx18MRTMUauX3fyRw9R7S1BO.jpg?height=300&width=500",
      category: "net",
      technologies: [".NET 8", "C#", "SQL Server", ".Net MVC", "Elasticsearch"],
      github: "https://github.com/regvedpande/inventorymanagement",
      live: "https://document-management-demo.vercel.app",
      featured: false,
      liveProject: false,
      videoUrl: "Untitled video - Made with Clipchamp (2).mp4",
      longDescription:
        "This inventory management system helps businesses track their stock levels, manage orders, and monitor sales and deliveries. It features real-time inventory updates, low-stock alerts, barcode scanning integration, and comprehensive reporting tools. The system is designed to be scalable and can be customized for different types of retail businesses.",
    },
    {
      id: "net8",
      title: "Healthcare Patient Portal",
      description:
        "A secure patient portal for healthcare providers with appointment scheduling and medical records access.",
      image: "/istockphoto-1256189055-612x612.jpg?height=300&width=500",
      category: "net",
      technologies: [".NET 7", "C#", "Entity Framework Core", "Identity Server", "HIPAA Compliance", "Azure"],
      github: "https://github.com/regvedpande/healthcareportal",
      live: "https://healthcare-portal-demo.vercel.app",
      featured: false,
      liveProject: false,
      videoUrl: "",
      longDescription:
        "This healthcare patient portal provides a secure interface for patients to access their medical records, schedule appointments, and communicate with healthcare providers. Built with .NET 7 and Entity Framework Core, it ensures HIPAA compliance and data security. The system features role-based access control, secure messaging, appointment management, and integration with electronic health records systems.",
    },
    {
      id: "net9",
      title: "E-Learning Management System",
      description: "A comprehensive learning management system for educational institutions and corporate training.",
      image: "/angular9826.logowik.com.jpg?height=300&width=500",
      category: "net",
      technologies: [".NET 6", "Angular", "SQL Server", "SignalR", "Azure Media Services", "Identity"],
      github: "https://github.com/regvedpande/elearningplatform",
      live: "https://elearning-demo.vercel.app",
      featured: false,
      liveProject: false,
      videoUrl: "",
      longDescription:
        "This E-Learning Management System provides a complete solution for creating, delivering, and managing educational content. Built with .NET 6 and Blazor, it offers features such as course creation, student enrollment, progress tracking, assessment tools, and real-time collaboration using SignalR. The platform supports video content delivery through Azure Media Services and includes features for discussion forums, assignment submission, and automated grading. It's designed to be scalable and can be customized for various educational contexts from K-12 to corporate training environments.",
    },

    // Python/ML Projects - consolidated into one category
    {
      id: "python1",
      title: "CipherVault",
      description:
        "A next-generation encryption and decryption web application that transforms your files into digital fortresses.",
      image: "/hq720.jpg?height=300&width=500",
      category: "python",
      technologies: ["Python", "Flask", "React", "Cryptography", "AES", "PBKDF2", "PyInstaller"],
      github: "https://github.com/regvedpande/encryptanddecrypt.git",
      live: "https://ciphervault-demo.example.com",
      featured: true,
      videoUrl: "DECRY(1).mp4",
      longDescription:
        "CipherVault is a next-generation encryption and decryption web application designed to secure your most sensitive documents with enterprise-grade cryptography. Built with Flask and React, CipherVault leverages advanced AES encryption, robust key derivation, and modern security practices to transform your files into digital fortresses. Whether you're protecting confidential reports or personal files, CipherVault ensures that your data remains safe from prying eyes—making it the ultimate tool for secure file sharing in the modern cyber landscape.",
    },
    {
      id: "python4",
      title: "Dream Journal Sentiment Analyzer API",
      description: "An API that analyzes dream descriptions, detects sentiment, and provides quirky interpretations.",
      image: "/FastAPI_b.jpg?height=300&width=500",
      category: "python",
      technologies: ["Python", "FastAPI", "TextBlob", "NLTK", "Pydantic"],
      github: "https://github.com/regvedpande/dreamjournalapi",
      live: "https://dream-analyzer-api-demo.vercel.app",
      videoUrl: "/Faster.mp4",
      longDescription:
        "This Dream Journal Sentiment Analyzer API uses FastAPI to process user-submitted dream descriptions. It leverages TextBlob and NLTK for sentiment analysis and theme extraction, providing users with a sentiment score, dominant emotion, key themes, and a creative interpretation of their dreams.",
    },
    {
      id: "python3",
      title: "Deep Learning Image Recognition API",
      description: "A powerful deep learning-based image recognition API using TensorFlow, OpenCV, and Flask.",
      image: "/1706850719554.png?height=300&width=500",
      category: "python",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
      github: "https://github.com/regvedpande/imagerecognitionapi.git",
      live: "https://your-live-demo-link.com",
      videoUrl: "/pot.mp4",
      longDescription:
        "This Image Recognition API provides deep learning capabilities to identify objects, scenes, and people in images. Using a pre-trained MobileNetV2 model from TensorFlow, it processes images and returns top predictions with confidence scores. The API is built with Flask for easy integration, OpenCV for image preprocessing, and supports deployment via Docker. Ideal for use cases such as automated tagging, visual search, and content moderation.",
    },
    {
      id: "ai1",
      title: "AI Debate Simulator",
      description: "A web app that generates debates between an optimist and a skeptic using the Gemini API.",
      image:
        "/1-Google-Rolls-Out-Gemini-2.0-Flash-as-Default-Introduces-2.0-Pro-Experimental-Trial-Source-winbuzzer.com_.jpg?height=300&width=500",
      category: "python",
      technologies: ["Python", "Flask", "Gemini API", "HTML", "CSS"],
      github: "https://github.com/regvedpande/ai-debate-simulator",
      live: "https://ai-debate-simulator-demo.vercel.app",
      featured: true,
      videoUrl: "/aiiNTEGRATION.mp4",
      longDescription:
        "The AI Debate Simulator is a Flask-based web application that leverages the Gemini API to generate dynamic debates. Users input a topic, and the app creates a multi-round debate between a confident optimist and a critical skeptic. Features include a user-friendly interface for topic submission, real-time debate generation, and styled debate cards to display arguments. The app is ideal for exploring AI-driven argumentation and can be extended with additional personas or debate rounds.",
    },
    {
      id: "ai2",
      title: "Gemini Powered Tutor",
      description:
        "A web-based tutoring system powered by the Gemini API, providing intelligent responses to user queries.",
      image: "/f34d81945efec19e43ad4899cbb737e1.png?height=300&width=500",
      category: "python",
      technologies: ["Python", "Django", "React", "Gemini API", "CORS"],
      github: "https://github.com/regvedpande/geminipoweredtutor.git",
      live: "https://predictive-maintenance-demo.vercel.app",
      videoUrl: "/Gemini.mp4",
      longDescription:
        "Gemini Powered Tutor is an AI-powered web application that leverages the Gemini API to provide intelligent tutoring responses to user queries. Built with a Django backend and a React frontend, the system allows users to ask questions and receive detailed answers in real-time. Features include a responsive chat interface, seamless API integration, and CORS configuration for secure cross-origin communication. The project demonstrates the integration of modern web technologies with AI to create an interactive learning experience.",
    },
    {
      id: "ai3",
      title: "Stable Diffusion Image Generator",
      description:
        "A web application that generates images from text prompts using Stability AI's Stable Diffusion model.",
      image: "/creating-easy-stable-diffusion-3-sd3-image-with-old-model-v0-1mf0wtfgq5kc1.jpg?height=300&width=500",
      category: "python",
      technologies: ["Python", "Diffusers", "Torch", "Gradio", "PyYAML", "Pillow"],
      github: "https://github.com/regvedpande/stablediffusion",
      live: "https://your-deployed-app-url.com",
      videoUrl: "/Pipeline.mp4",
      longDescription:
        "This project is a Stable Diffusion-based image generator using `diffusers`, `Gradio`, and `PyTorch`. It allows users to generate images from text prompts via an interactive UI or command-line. The application supports CPU and GPU (CUDA) processing, with configurable models in `config.yaml`. Users can run the Gradio UI or generate images through a CLI command, with automatic image saving. The system is easy to set up and deploy.",
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
              Over the past 2 years, I've worked with various clients, delivering impactful solutions across a range of technologies, showcasing my adaptability and commitment to excellence.
            </Typography>
          </Box>
        </motion.div>

        {/* Featured Projects */}
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
              Live Projects
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
            <Tab label="Python & ML" value="python" />
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

