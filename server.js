const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive'
  });
  res.end('OK from Node');
});

// Prevent Node from aggressively closing idle connections between stress waves
server.keepAliveTimeout = 60000; // 60 seconds
server.headersTimeout = 65000;   // Slightly higher than keepAliveTimeout

server.listen(3000, '0.0.0.0', () => {
  console.log('🟢 [NODE] Server ready on 3000');
});
