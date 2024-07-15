'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface Image {
  url: string;
  description: string;
}

export default function FormProjeto() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);

  const handleAddProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoProjeto = {
      title,
      description,
      type,
      images,
    };

    try {
      const response = await fetch('/api/projetos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoProjeto),
      });

      console.log('Projeto criado com sucesso.');

      // Só para limpar os campos depois do envio
      // event.currentTarget.reset();
      setTitle('');
      setDescription('');
      setType('');
      setImages([]);

    } catch (error) {
      console.error('Erro ao criar projeto:', error);
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files;

    if (uploadedFiles) {
      const newImages = Array.from(uploadedFiles).map((file) => ({
        url: URL.createObjectURL(file),
        description: '',
      }));

      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  return (
    <div>
      <h1>Adicionar Projeto</h1>

      <form onSubmit={handleAddProject}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <label htmlFor="type">Type:</label>
        <select id="type" value={type} onChange={(event) => setType(event.target.value)} required>
          <option value="">Select Type</option>
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
