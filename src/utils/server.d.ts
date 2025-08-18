import express from 'express'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // 确保 CORS 中间件在此处放置
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // 示例验证
  if (username === 'admin' && password === 'password') {
    res.json({
      success: true,
      message: '登录成功',
      user: {
        id: '123',
        name: 'Admin User',
        username: username,
        role: 'admin' // 返回用户角色
      }
    });
  } else if (username && password) { // 其他用户名
    res.json({
      success: true,
      message: '登录成功',
      user: {
        id: '456',
        name: 'Normal User',
        username: username,
        role: 'user' // 返回用户角色
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: '用户名或密码错误'
    });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器已启动，监听 http://localhost:${PORT}`);
});
