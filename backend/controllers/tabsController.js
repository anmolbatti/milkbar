const Tabs = require('../models/Tabs');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

exports.addTab = async (req, res) => {
    try {
        const { title } = req.body;

        const newTab = new Tabs({
            title
        });

        await newTab.save();

        res.status(200).json({ message: 'Tab added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to add Tab' });
    }
};


exports.tabsList = async (req, res) => {
    try {
        const tabs = await Tabs.find();
        res.status(200).json(tabs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects' });
    }
};

exports.getTab = async (req, res) => {
    const { id } = req.params;
    try {
        const tabs = await Tabs.findById(id);
        if (!tabs) {
            return res.status(404).json({ message: 'Tab not found' });
        }
        res.status(200).json(tabs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tab' });
    }
};

exports.deleteTab = async (req, res) => {
    try {
        
        const { id } = req.params;
        const deletedTab = await Tabs.findByIdAndDelete(id);
        if (!deletedTab) {
            return res.status(404).json({ message: 'Tab not found' });
        }

        res.status(200).json({ message: 'Tab deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete tab' });
    }
};

exports.updateTab = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        const tab = await Tabs.findById(id);
        if (!tab) {
            return res.status(404).json({ message: 'Tab not found' });
        }

        const updatedData = {
            title: title || tab.title
        };

        const updatedtab = await Tabs.findByIdAndUpdate(id, updatedData, { new: true });
        
        res.status(200).json({ message: 'Tab updated successfully', tab: updatedtab });

    } catch (error) {
        console.error('Error updating tab:', error);
        res.status(500).json({ message: 'Failed to update tab' });
    }   
};