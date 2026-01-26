import { createServer } from 'node:http';
import { handler } from '../build/handler.js';

let server;

async function ensureServer() {
	if (server) return server;

	server = createServer(handler);
	return new Promise((resolve) => {
		server.listen(0, () => resolve(server));
	});
}

export default async (req, res) => {
	const srv = await ensureServer();

	// Convert Vercel request/response to Node.js http format
	return new Promise((resolve) => {
		handler(req, res);
		res.on('finish', resolve);
	});
};
