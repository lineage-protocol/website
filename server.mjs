import express from 'express';
import GhostAdminAPI from '@tryghost/admin-api';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

const ghostAPI = new GhostAdminAPI({
  url: 'https://blog.lineageprotocol.com',
  key: '6450eefb23afc28e01d62e70:654efe356e0bd7b4ccf33b0a8576cf5b6e7e7f301aa8b34f66fc6a6782dececf',
  version: 'v4',
});

app.use(bodyParser.json());
const corsOptions = {
  origin: '*', // Replace with your React app's domain, or use '*' to allow any origin
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));


app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  try {
    const response = await ghostAPI.members.add({ email, subscribed: true });
    res.status(200).json({ message: 'Email submitted', data: response });
  } catch (error) {
    console.error('Error submitting email:', error);
    res.status(500).json({ message: 'Error submitting email', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
