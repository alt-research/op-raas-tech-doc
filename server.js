const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get('/proxy', async (req, res) => {
    try {
      const url = req.query.url;
      const response = await axios.get(url);
      let content = response.data;
  
      // 将相对路径转换为绝对路径
      const baseUrl = new URL(url);
      content = content.replace(/src="([^"]+)"/g, (match, p1) => {
        if (!p1.startsWith('http') && !p1.startsWith('//')) {
          return `src="${baseUrl.origin}${p1}"`;
        }
        return match;
      });

       // 修改 CORS 头信息
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 可以根据需要添加更多 CORS 头信息
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  
      res.send(content);
    } catch (error) {
      res.status(500).send('Error fetching page content');
    }
  });
  

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
