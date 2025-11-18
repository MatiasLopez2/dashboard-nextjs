import 'dotenv/config';
import postgres from "postgres";

if (!process.env.POSTGRES_URL) {
  console.error("❌ ERROR: POSTGRES_URL no está definida en el .env");
  process.exit(1);
}

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

async function init() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    console.log("✅ Extensión creada correctamente");
  } catch (err) {
    console.error("❌ Error ejecutando el script:");
    console.error(err);
  } finally {
    process.exit(0);
  }
}

init();
