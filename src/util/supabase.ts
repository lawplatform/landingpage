import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://flicqgzpvnuglbpqegec.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsaWNxZ3pwdm51Z2xicHFlZ2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzODA1MjcsImV4cCI6MjAwNjk1NjUyN30.agtq-_bPLLCGSIHZwTnPE-eF3A_EFVjdvzD9u0EolK0'
export const supabase = createClient(supabaseUrl, supabaseKey)
