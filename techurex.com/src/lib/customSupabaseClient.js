import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xznuhnfffnjklcgoqggr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6bnVobmZmZm5qa2xjZ29xZ2dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MzE1NjgsImV4cCI6MjA2NzQwNzU2OH0.y7l4HWkMUi6aIb0176fZYez9WM2ncypw9WKfLCquiaI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);