import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
})

export interface Evento {
  _id: string
  titolo: string
  data: string
  descrizione: string
  immagine?: { asset: { url: string } }
  attivo: boolean
}

export async function getEventi(): Promise<Evento[]> {
  return sanityClient.fetch(
    `*[_type == "evento" && attivo == true] | order(data asc) {
      _id, titolo, data, descrizione, attivo,
      immagine { asset -> { url } }
    }`
  )
}
