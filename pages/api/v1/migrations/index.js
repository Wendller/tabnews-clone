import migrationRunner from "node-pg-migrate";
import database from "infra/database.js";
import { join } from "node:path";

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();

  if (isDryRunRequest(request)) {
    const pendingMigrations = await migrationRunnerByMode("dryRun", dbClient);
    await dbClient.end();
    return response.status(200).json(pendingMigrations);
  }

  if (isLiveRunRequest(request)) {
    const migratedMigrations = await migrationRunnerByMode("liveRun", dbClient);
    await dbClient.end();
    const anyMigrationExecuted = migratedMigrations.length > 0;

    return anyMigrationExecuted
      ? response.status(201).json(migratedMigrations)
      : response.status(200).json(migratedMigrations);
  }

  // await dbClient.end();
  return response.status(405).end();
}

function isDryRunRequest(request) {
  return request.method === "GET";
}

function isLiveRunRequest(request) {
  return request.method === "POST";
}

async function migrationRunnerByMode(mode, dbClient) {
  const migrations = await migrationRunner({
    dbClient: dbClient,
    dir: join("infra", "migrations"),
    dryRun: mode === "dryRun",
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  });

  return migrations;
}
