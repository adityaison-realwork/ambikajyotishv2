import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dgfgmbrkwhxonocusamu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnZmdtYnJrd2h4b25vY3VzYW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyODkyMDIsImV4cCI6MjA4MDg2NTIwMn0.ifOk3dd5AtUm6-ZvZ6V4CtlTMGKDcC--asYnC99LJ5k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);