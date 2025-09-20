const { exec } = require("node:child_process");

let progressBar = "[          ]";
const fullProgressBar = "[██████████]";
let progressPercentage = 0;

function updateStdOut(message) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(message);
}

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      if (progressPercentage < 90) {
        progressPercentage += 10;
        progressBar = progressBar.replace(" ", "█");
      }

      updateStdOut(
        `🔴 Waiting Postgres to be ready for connections: ${progressBar} ${progressPercentage}%`,
      );
      checkPostgres();
      return;
    }

    updateStdOut(
      `🔴 Waiting Postgres to be ready for connections: ${fullProgressBar} 100%`,
    );
    console.log("\n🟢 Postgres is ready!");
    return;
  }
}

process.stdout.write("🔴 Waiting Postgres to be ready for connections: ");
checkPostgres();
