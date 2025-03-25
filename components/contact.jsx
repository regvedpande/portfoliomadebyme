"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  CircularProgress,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material"
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Send as SendIcon,
} from "@mui/icons-material"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
  const theme = useTheme()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validate = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)

    try {
      // Using EmailJS to send the email with your credentials
      const result = await emailjs.sendForm("service_n1cf1q8", "template_zrbzoay", formRef.current, "5s4sKSixCFlgC7aX5")

      if (result.text === "OK") {
        setSnackbar({
          open: true,
          message: "Message sent successfully! I'll get back to you soon.",
          severity: "success",
        })

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Email sending failed:", error)
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again later.",
        severity: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        background: (theme) => theme.palette.background.default,
      }}
      id="contact"
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
              Get In Touch
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
              Have a project in mind or want to discuss opportunities? Let's talk!
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card
                elevation={2}
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  background: (theme) =>
                    theme.palette.mode === "light"
                      ? "linear-gradient(135deg, #ffffff, #f5f5f5)"
                      : "linear-gradient(135deg, #1e1e1e, #252525)",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: "8px",
                    width: "100%",
                    background: (theme) =>
                      theme.palette.mode === "light"
                        ? "linear-gradient(90deg, #333333, #555555)"
                        : "linear-gradient(90deg, #f5f5f5, #bbbbbb)",
                  }}
                />
                <CardHeader
                  title={
                    <Typography variant="h5" fontWeight={600}>
                      Contact Information
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary">
                      Feel free to reach out through any of these channels
                    </Typography>
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent>
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          borderRadius: "12px",
                          backgroundColor: (theme) => `${theme.palette.primary.main}20`,
                          mr: 2,
                        }}
                      >
                        <EmailIcon color="primary" fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Email
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                          regregd@outlook.com
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          borderRadius: "12px",
                          backgroundColor: (theme) => `${theme.palette.primary.main}20`,
                          mr: 2,
                        }}
                      >
                        <PhoneIcon color="primary" fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Phone
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                          +91 9049874883
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          borderRadius: "12px",
                          backgroundColor: (theme) => `${theme.palette.primary.main}20`,
                          mr: 2,
                        }}
                      >
                        <LocationIcon color="primary" fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Location
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                          Nagpur, Maharashtra 441103
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                    <IconButton
                      component="a"
                      href="https://github.com/regvedpande"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                        color: "primary.main",
                        transition: "transform 0.2s ease, background-color 0.2s ease",
                        "&:hover": {
                          backgroundColor: (theme) => `${theme.palette.primary.main}20`,
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                        color: "primary.main",
                        transition: "transform 0.2s ease, background-color 0.2s ease",
                        "&:hover": {
                          backgroundColor: (theme) => `${theme.palette.primary.main}20`,
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="mailto:regregd@outlook.com"
                      sx={{
                        backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                        color: "primary.main",
                        transition: "transform 0.2s ease, background-color 0.2s ease",
                        "&:hover": {
                          backgroundColor: (theme) => `${theme.palette.primary.main}20`,
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <EmailIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card
                elevation={2}
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: theme.shadows[10],
                  },
                }}
              >
                <Box
                  sx={{
                    height: "8px",
                    width: "100%",
                    background: (theme) =>
                      theme.palette.mode === "light"
                        ? "linear-gradient(90deg, #333333, #555555)"
                        : "linear-gradient(90deg, #f5f5f5, #bbbbbb)",
                  }}
                />
                <CardHeader
                  title={
                    <Typography variant="h5" fontWeight={600}>
                      Send a Message
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary">
                      Fill out the form below and I'll get back to you as soon as possible
                    </Typography>
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          error={!!formErrors.name}
                          helperText={formErrors.name}
                          required
                          variant="outlined"
                          margin="normal"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "10px",
                              transition: "transform 0.2s ease, box-shadow 0.2s ease",
                              "&:hover": {
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                              },
                              "&.Mui-focused": {
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!formErrors.email}
                          helperText={formErrors.email}
                          required
                          variant="outlined"
                          margin="normal"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "10px",
                              transition: "transform 0.2s ease, box-shadow 0.2s ease",
                              "&:hover": {
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                              },
                              "&.Mui-focused": {
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          error={!!formErrors.subject}
                          helperText={formErrors.subject}
                          required
                          variant="outlined"
                          margin="normal"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "10px",
                              transition: "transform 0.2s ease, box-shadow 0.2s ease",
                              "&:hover": {
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                              },
                              "&.Mui-focused": {
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          error={!!formErrors.message}
                          helperText={formErrors.message}
                          required
                          multiline
                          rows={4}
                          variant="outlined"
                          margin="normal"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "10px",
                              transition: "transform 0.2s ease, box-shadow 0.2s ease",
                              "&:hover": {
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                              },
                              "&.Mui-focused": {
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          size="large"
                          disabled={isSubmitting}
                          endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                          sx={{
                            mt: 2,
                            py: 1.5,
                            borderRadius: "10px",
                            boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            "&:hover": {
                              transform: "translateY(-2px)",
                              boxShadow: "0 6px 20px 0 rgba(0,0,0,0.15)",
                            },
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

