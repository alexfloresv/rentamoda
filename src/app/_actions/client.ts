'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function createOrUpdateClient(data: {
  name: string
  email: string
  phone: string
  sessionId: string
}) {
  try {
    const client = await db.client.upsert({
      where: {
        sessionId: data.sessionId,
      },
      update: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
      create: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        sessionId: data.sessionId,
      },
    })

    revalidatePath('/')
    return { success: true, data: client }
  } catch (error) {
    console.error('Error creating/updating client:', error)
    return { success: false, error: 'Error al procesar el registro' }
  }
}

export async function createWebinarRegistration(data: {
  clientId: number
  webinarId: number
}) {
  try {
    const registration = await db.webinarRegistrant.create({
      data: {
        clientId: data.clientId,
        webinarId: data.webinarId,
      },
    })

    revalidatePath('/webinar')
    return { success: true, data: registration }
  } catch (error) {
    console.error('Error creating webinar registration:', error)
    return { success: false, error: 'Error al registrar en el webinar' }
  }
}

export async function createFeedback(data: {
  clientId: number
  feedback: string
}) {
  try {
    const feedback = await db.feedback.create({
      data: {
        clientId: data.clientId,
        feedback: data.feedback,
      },
    })

    revalidatePath('/')
    return { success: true, data: feedback }
  } catch (error) {
    console.error('Error creating feedback:', error)
    return { success: false, error: 'Error al guardar el feedback' }
  }
} 