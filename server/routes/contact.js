import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// POST /api/contact - Submit a contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.'
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      subject: subject || 'Portfolio Inquiry',
      message,
      ipAddress: req.ip || req.headers['x-forwarded-for'] || ''
    });

    return res.status(201).json({
      success: true,
      data: newMessage,
      message: 'Thank you! Your message has been recorded.'
    });
  } catch (error) {
    console.error('Contact Submission Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error while processing your message.'
    });
  }
});

// GET /api/contact - Health check or admin list (Optional)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(20);
    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
});

export default router;
