"use client"

import { useState, useEffect } from "react"
import { Snackbar, Alert } from "@mui/material"

export function Toaster() {
  const [toast, setToast] = useState(null)

  useEffect(() => {
    // Listen for toast events
    const handleToast = (event) => {
      if (event.detail) {
        setToast({
          title: event.detail.title,
          description: event.detail.description,
          severity: event.detail.severity || "info",
          open: true,
        })
      }
    }

    window.addEventListener("toast", handleToast)
    return () => window.removeEventListener("toast", handleToast)
  }, [])

  const handleClose = () => {
    setToast((prev) => ({ ...prev, open: false }))
  }

  if (!toast) return null

  return (
    <Snackbar
      open={toast?.open || false}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      TransitionProps={{ appear: false, enter: false, exit: false }}
    >
      <Alert onClose={handleClose} severity={toast.severity} variant="filled" sx={{ width: "100%" }}>
        <div>
          {toast.title && <div style={{ fontWeight: "bold" }}>{toast.title}</div>}
          {toast.description && <div>{toast.description}</div>}
        </div>
      </Alert>
    </Snackbar>
  )
}

export const useToast = () => {
  const toast = ({ title, description, severity }) => {
    window.dispatchEvent(
      new CustomEvent("toast", {
        detail: {
          title,
          description,
          severity,
        },
      }),
    )
  }

  return { toast }
}

