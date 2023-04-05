import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://liaxxzyhsmonxjinncfc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpYXh4enloc21vbnhqaW5uY2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NjEyMzUsImV4cCI6MTk5NjIzNzIzNX0.M46uGLP9BU8VbLaT98gKS28PYvzL8wxt2bmkby5g73c'

export const supabase = createClient(supabaseUrl, supabaseKey)
