import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",

  datasource: {
    provider: "mysql",
    url: "mysql://root:@localhost:3306/db_antrian",
  },

  migrations: {
    path: "./prisma/migrations",
  },

  engine: "classic",
});