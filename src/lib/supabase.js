import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xzebpkekrnjotsqnpqaw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZWJwa2Vrcm5qb3RzcW5wcWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NzUzMzYsImV4cCI6MjA1NjA1MTMzNn0.GU4A1SI0_fRYYbcRinHFD_MuoN1TUcF6-yLEJGyzBPo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false // Disable session persistence
  }
})
