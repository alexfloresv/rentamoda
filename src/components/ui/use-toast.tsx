import * as React from "react"
import {
  Toast,
  ToastProvider,
  ToastViewport,
} from "@/components/ui/toast"

type ToastProps = {
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
}

const ToastContext = React.createContext<{
  toast: (props: ToastProps) => void
  dismiss: (id: number) => void
}>({
  toast: () => {},
  dismiss: () => {},
})

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  return (
    <ToastContext.Provider
      value={{
        toast: (props) => setToasts((current) => [...current, props]),
        dismiss: (index) => setToasts((current) => current.filter((_, i) => i !== index)),
      }}
    >
      <ToastProvider>
        {children}
        {toasts.map((toast, index) => (
          <Toast key={index} {...toast} />
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return React.useContext(ToastContext)
} 