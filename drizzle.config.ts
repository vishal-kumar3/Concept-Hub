import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || '',
    database: "postgres",
    port: 5432,
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    user: "postgres.dubuckbhabixzvbpshii",
    password: process.env.PW || '',
  },
})
