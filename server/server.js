import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/raheel_portfolio';

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    profile: 'Raheel Ahmed Khan (CISM, SC-200, CCNA)'
  });
});

// Database Connection & Server Listener
async function startServer() {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(MONGO_URI);
      console.log('✅ Connected to MongoDB database successfully.');
    } else {
      console.log('ℹ️ Running in standalone mode without MongoDB (Set MONGO_URI in .env to persist contact messages).');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Raheel Portfolio API Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Server startup error:', error);
  }
}

startServer();
