import { useState } from "react"

type ToastProps = {
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    setToasts((current) => [...current, props])
  }

  return {
    toast,
    toasts,
    dismiss: (index: number) => {
      setToasts((current) => current.filter((_, i) => i !== index))
    }
  }
} 