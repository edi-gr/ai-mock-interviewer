/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:jEkc80dqrWQN@ep-purple-wind-a1d6qvrj.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
};
