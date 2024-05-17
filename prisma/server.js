const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/createpost', async (req, res) => {
  const { title, content } = req.body;
  
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content
      },
    });
    res.status(201).json([post]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
