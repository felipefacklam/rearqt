'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface Image {
  url: string;
  description: string;
}

export default function FormProjetoPage() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]); // Array to store image data

  const handleAddProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //só pra previnir ação padrao

    const newProject = {
      title,
      description,
      type,
      images,
    };

    try {
      const response = await fetch('/api/projetos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });

      console.log('Projeto criado com Sucesso.');

      // só pra limpar os campos depois de enviar
      setTitle('');
      setDescription('');
      setType('');
      setImages([]);

    } catch (error) {
      console.error('Erro ao criar o Projeto.', error);
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files;

    if (uploadedFiles) {
      const newImages = Array.from(uploadedFiles).map((file) => ({
        url: URL.createObjectURL(file), // Create URL for each file
        description: '', // Placeholder description
      }));

      setImages((prevImages) => [...prevImages, ...newImages]); // Add all new images to the state
    }
  };

  return (
    <div>
      <h1>Add Project</h1>

      <form onSubmit={handleAddProject}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="type">Tipo:</label>
        <select id="type" value={type} onChange={(event) => setType(event.target.value)}>
          <option value="arquitetonico">Arquitetônico</option>
          <option value="interiores">Interiores</option>
          <option value="iluminacao">Iluminação</option>
          <option value="regularizacao">Regularização</option>
        </select>

        <label htmlFor="images">Imagens:</label>
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

        <button type="submit">Adicionar Projeto</button>
      </form>
    </div>
  );
}
