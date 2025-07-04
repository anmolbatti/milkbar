const express = require('express');
const multer = require('multer');
const path = require('path');
const projectController = require('../controllers/projectController');
const checkAuth = require('../middleware/auth');
const nodemailer = require('nodemailer');

const router = express.Router();

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'sophia@themilkbar.co',
      pass: 'Popcorn1313!!!'
    },
    tls: {
      ciphers: 'SSLv3'
    }
});

// Set up storage for uploaded images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // Save to public/images folder
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique filename
    },
});

const upload = multer({ storage });

// Route to add a project with multiple images

router.post('/add-project', upload.fields([
    { name: 'images', maxCount: 10 }, // Adjust maxCount as needed
    { name: 'video', maxCount: 1 },
    { name: 'featuredImage', maxCount: 1 }
]), projectController.addProject);

// router.post('/add-project', upload.array('images', 10), projectController.addProject);
router.get('/get-projects', projectController.projectsList);
router.get('/get-tab-projects', projectController.getTabsProjects);
router.get('/get-project/:id', projectController.getProject);
router.delete('/delete-project/:id', projectController.deleteProject);
router.post('/remove-image', projectController.removeImage);
// Route to update a project
// router.put('/update-project/:id', upload.array('images', 10), projectController.updateProject);
router.put('/update-project/:id', upload.fields([
    { name: 'images', maxCount: 10 }, // Multiple gallery images
    { name: 'video', maxCount: 1 }, // Single banner image
    { name: 'featuredImage', maxCount: 1 } // Single featured image
]), projectController.updateProject);

router.post('/send-email-to-owner', async (req, res) => {
    const { userName, userEmail, helpingSubject, userDescription } = req.body;
    

    // Email options
    const mailOptions = {
      from: "sophia@themilkbar.co",
      to: "sophia@themilkbar.co",
      subject: "New Contact form submission",
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Helping Subjects:</strong> ${helpingSubject.toString()}</p>
        <p><strong>Description:</strong> ${userDescription}</p>
        `
    };
  
    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!', info: info.response });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
});


module.exports = router;
