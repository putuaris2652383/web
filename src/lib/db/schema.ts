import { integer, numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const carbonSubmissions = pgTable("carbon_submissions", {
  id: serial("id").primaryKey(),
  agentName: text("agent_name").notNull(),
  agentGroup: text("agent_group"),
  agentDate: text("agent_date"),
  totalScore: integer("total_score").notNull().default(0),
  totalAvoidedCo2e: numeric("total_avoided_co2e", { precision: 10, scale: 3 }).notNull().default("0"),
  totalEmittedCo2e: numeric("total_emitted_co2e", { precision: 10, scale: 3 }).notNull().default("0"),
  favoriteTkp: text("favorite_tkp"),
  commitment: text("commitment"),
  tkp1Grams: numeric("tkp1_grams", { precision: 10, scale: 2 }).notNull().default("0"),
  tkp2Grams: numeric("tkp2_grams", { precision: 10, scale: 2 }).notNull().default("0"),
  tkp3Sheets: numeric("tkp3_sheets", { precision: 10, scale: 2 }).notNull().default("0"),
  tkp4Km: numeric("tkp4_km", { precision: 10, scale: 2 }).notNull().default("0"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type CarbonSubmission = typeof carbonSubmissions.$inferSelect;
export type NewCarbonSubmission = typeof carbonSubmissions.$inferInsert;
