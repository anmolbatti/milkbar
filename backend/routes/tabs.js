const express = require('express');
const multer = require('multer');
const path = require('path');
const tabsController = require('../controllers/tabsController');

const router = express.Router();

router.post('/add-tab', tabsController.addTab);
router.get('/get-tabs', tabsController.tabsList);
router.get('/get-tab/:id', tabsController.getTab);
router.delete('/delete-tab/:id', tabsController.deleteTab);

router.put('/update-tab/:id', tabsController.updateTab);
module.exports = router;
