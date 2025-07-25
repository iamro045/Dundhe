import {createClient} from '@sanity/client'

export default createClient({
  projectId: 'hs9xzcg0', // Paste your project ID here
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-07-21',
})