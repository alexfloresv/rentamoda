'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'

const feedbackSchema = z.object({
  feedback: z.string().min(10, 'El feedback debe tener al menos 10 caracteres'),
})

type FeedbackForm = z.infer<typeof feedbackSchema>

export function FeedbackForm({ onSuccess }: { onSuccess: () => void }) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackForm>({
    resolver: zodResolver(feedbackSchema),
  })

  const onSubmit = async (data: FeedbackForm) => {
    try {
      setIsLoading(true)
      // Aquí irá la lógica para guardar el feedback
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación
      toast({
        title: '¡Gracias por tu feedback!',
        description: 'Tu opinión es muy importante para nosotros.',
      })
      onSuccess()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un error al enviar tu feedback. Por favor, intenta de nuevo.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Textarea
          placeholder="Comparte con nosotros tus comentarios, sugerencias o expectativas..."
          className={`min-h-[150px] ${errors.feedback ? 'border-red-500' : ''}`}
          {...register('feedback')}
        />
        {errors.feedback && (
          <p className="text-red-500 text-sm mt-1">{errors.feedback.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar feedback'}
      </Button>
    </form>
  )
} 