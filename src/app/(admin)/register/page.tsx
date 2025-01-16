'use client'

import { useState } from 'react'
import { RegisterForm } from '@/components/forms/register-form'
import { FeedbackForm } from '@/components/forms/feedback-form'
import { CheckCircle2 } from 'lucide-react'

export default function RegisterPage() {
  const [step, setStep] = useState<'register' | 'feedback' | 'success'>('register')

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          {step === 'register' && (
            <>
              <h1 className="text-2xl font-bold text-center mb-6">
                Registro para el Webinar
              </h1>
              <RegisterForm onSuccess={() => setStep('feedback')} />
            </>
          )}

          {step === 'feedback' && (
            <>
              <h1 className="text-2xl font-bold text-center mb-6">
                ¡Gracias por registrarte!
              </h1>
              <p className="text-gray-600 text-center mb-6">
                Nos encantaría saber tu opinión sobre nuestro servicio
              </p>
              <FeedbackForm onSuccess={() => setStep('success')} />
            </>
          )}

          {step === 'success' && (
            <div className="text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-4">
                ¡Registro Completado!
              </h1>
              <p className="text-gray-600">
                Gracias por tu registro y feedback. Te esperamos en el webinar.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
