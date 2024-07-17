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

      <form onSubmit={handleAddProject} className='flex flex-col gap-2 w-100'>
        <div className='flex flex-col'>
          <label htmlFor="title">Título:</label>
          <input
            className='border border-green-primary rounded-br-2xl'
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="description">Descrição:</label>
          <textarea
            className='h-20 border border-green-primary rounded-br-3xl focus:outline-green-primary'
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="type">Categoria:</label>
          <select 
            className='block appearance-none w-full border border-green-primary py-3 px-4 pr-8 rounded-br-2xl focus:outline-green-primary' 
            id="type" value={type} onChange={(event) => setType(event.target.value)} required>
            <option value="">Selecione a categoria</option>
            <option value="Arquitetônico">Arquitetônico</option>
            <option value="Interiores">Interiores</option>
            <option value="Iluminação">Iluminação</option>
            <option value="Regularização">Regularização</option>
          </select>
        </div>
    
        <div className='flex flex-col'>
          <label htmlFor="images" >Imagens:</label>
          <div>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.url} alt="Uploaded Image" width={100} height={100} />
                <input
                  type="text"
                  placeholder="Descrição"
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
        </div>

        <button type="submit" className='button '>Adicionar</button>
      </form>
    </div>
  );
}
