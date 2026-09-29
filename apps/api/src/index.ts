import { createApp } from "./app.js";

const { app, port } = await createApp({ port: Number(process.env.PORT ?? 8787) });
await app.listen({ host: "0.0.0.0", port });
console.log(`MANUFACTORY — bench online on :${port}`);
console.log(`  web      http://localhost:${port}/`);
console.log(`  api      http://localhost:${port}/api/artifacts`);
console.log(`  ghost    http://localhost:${port}/ghost/favicon.ico  (BSC-001, live)`);
