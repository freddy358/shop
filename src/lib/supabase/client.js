import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and Anon Key
const supabaseUrl = 'https://iomijszslhbrznsnvlsa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvbWlqc3pzbGhicnpuc252bHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMDY1MTAsImV4cCI6MjA1Njg4MjUxMH0.XzhFBsFa2EP_O07kleMGAqjUPD1vrSsPU5kUidb9eXk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);