const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'http://localhost:7337',
      pathRewrite: { '^/api/': '/' },
      changeOrigin: true,
    })
  );
};
