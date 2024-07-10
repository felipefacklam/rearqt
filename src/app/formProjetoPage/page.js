'use client'

import React, { useState } from 'react';

export default function FormProjetoPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [images, setImages] = useState([]); // Array to store image data

  const handleAddProject = async (event) => {
    event.preventDefault();

    const newProject = {
      title,
      description,
      type,
      images, // Add image data to the project object
    };

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      const data = await response.json();
      console.log('Project created successfully:', data);

      // Clear form fields or display a success message
    } catch (error) {
      console.error('Error creating project:', error);

      // Display an error message to the user
    }
  };

  const handleImageUpload = (event) => {
    const uploadedFiles = event.target.files;
  
    const newImages = Array.from(uploadedFiles).map((file) => ({
      url: URL.createObjectURL(file), // Create URL for each file
      description: '', // Placeholder description
    }));
  
    setImages([...images, ...newImages]); // Add all new images to the state
  };
  

  return (
    <div>
      <h1>Add Project</h1>

      <form onSubmit={handleAddProject}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="type">Type:</label>
        <select id="type" value={type} onChange={(event) => setType(event.target.value)}>
          <option value="Arquitetônico">Arquitetônico</option>
          <option value="Interiores">Interiores</option>
          <option value="Iluminação">Iluminação</option>
          <option value="Regularização">Regularização</option>
        </select>

        <label htmlFor="images">Images:</label>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt="Uploaded Image" width={100} height={100} />
            <input
              type="text"
              placeholder="Image Description"
              value={image.description}
              onChange={(event) => {
                const updatedImages = [...images];
                updatedImages[index].description = event.target.value;
                setImages(updatedImages);
              }}
            />
          </div>
        ))}
      </div>
      <input type="file" id="images" multiple onChange={handleImageUpload} />


        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}
