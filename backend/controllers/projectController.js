const Project = require('../models/Project');
const Tabs = require('../models/Tabs');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

exports.addProject = async (req, res) => {
    try {
        const { title, description, tabId } = req.body;
        const images = req.files['images'] ? req.files['images'].map(file => `/images/${file.filename}`) : [];
        const featuredImage = req.files['featuredImage'] ? `/images/${req.files['featuredImage'][0].filename}` : '';
        const video = req.files['video'] ? `/images/${req.files['video'][0].filename}` : '';

        const newProject = new Project({
            title,
            description,
            images,
            video,
            tabId,
            featuredImage
        });

        await newProject.save();

        res.status(200).json({ message: 'Project added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to add project' });
    }
};


exports.projectsList = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects' });
    }
};

exports.getProject = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id).populate("tabId");
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching project' });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        
        const { id } = req.params;
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        
        const fs = require('fs');
        deletedProject.images.forEach(imagePath => {
            fs.unlink(`./public${imagePath}`, err => {
                if (err) console.error('Failed to delete image:', imagePath);
            });
        });

        fs.unlink(`./public${deletedProject?.video}`, err => {
            if (err) console.error('Failed to delete video:', deletedProject?.video);
        });

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete project' });
    }
};

exports.removeImage = async (req, res) => {
    const { projectId, imageName } = req.body;

    try {
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        let updatedData = {};
        
        if (project.images.includes(imageName)) {
            
            updatedData.images = project.images.filter(image => image !== imageName);
        } else if (project.featuredImage === imageName) {
            
            updatedData.featuredImage = null;
        } else if (project.video === imageName) {
            
            updatedData.video = null;
        } else {
            return res.status(404).json({ message: 'File not found in project' });
        }

        const updatedProject = await Project.findByIdAndUpdate(projectId, { $set: updatedData }, { new: true });

        if (!updatedProject) {
            return res.status(404).json({ message: 'Failed to update project' });
        }

        const filePath = path.join(__dirname, '..', 'public', imageName);
        fs.unlink(filePath, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error deleting image from filesystem' });
            }
            res.status(200).json({ message: 'Image removed successfully', project: updatedProject });
        });
    } catch (error) {
        console.error('Error removing image:', error);
        res.status(500).json({ message: 'Error removing image', error });
    }
};
exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, tabId } = req.body;

        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        const newImages = req.files['images'] ? req.files['images'].map(file => `/images/${file.filename}`) : [];
        const featuredImage = req.files['featuredImage'] ? `/images/${req.files['featuredImage'][0].filename}` : project.featuredImage;
        const video = req.files['video'] ? `/images/${req.files['video'][0].filename}` : project.video;

        const updatedData = {
            title: title || project.title,
            description: description || project.description,
            images: [...project.images, ...newImages],
            video,
            tabId: tabId || project?.tabId,
            featuredImage
        };

        const updatedProject = await Project.findByIdAndUpdate(id, updatedData, { new: true });
        
        res.status(200).json({ message: 'Project updated successfully', project: updatedProject });

    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ message: 'Failed to update project' });
    }   
};

exports.getTabsProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate("tabId");
        const tabProjects = projects.reduce((acc, project) => {
            const title = project?.tabId?.title;
            
            if (!acc[title]) {
                acc[title] = { title, projects: [] };
            }
            
            acc[title].projects.push(project);
            return acc;
        }, {});

        res.status(200).json(Object.values(tabProjects));
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects' });
    }
};
