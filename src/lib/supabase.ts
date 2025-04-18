import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yueurywuxkrwzozastsq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1ZXVyeXd1eGtyd3pvemFzdHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NzE2MzksImV4cCI6MjA2MDU0NzYzOX0.MZuxZxdNoeqly4Iq0dak5kzE6YPCSejMJX-H0i5y7mQ'

export const supabase = createClient(supabaseUrl, supabaseKey) 