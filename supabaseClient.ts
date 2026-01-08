import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kfiqfhvsdvwpbxaecasp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmaXFmaHZzZHZ3cGJ4YWVjYXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4OTk4MTgsImV4cCI6MjA4MzQ3NTgxOH0.t6Ut5nSf9c8waNS1q2GRxJGy64qWwhtB0--G0EbNVYg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
