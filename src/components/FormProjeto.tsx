"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface Image {
  data: string;
  description: string;
}

export default function FormProjeto() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("");
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
      const response = await fetch("/api/projetos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProjeto),
      });

      console.log("Projeto criado com sucesso.");

      // Limpar os campos depois do envio
      setTitle("");
      setDescription("");
      setType("");
      setImages([]);
    } catch (error) {
      console.error("Erro ao criar projeto:", error);
    }
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files;

    if (uploadedFiles) {
      const newImages = await Promise.all(
        Array.from(uploadedFiles).map(async (file) => {
          const base64 = await convertToBase64(file);
          return {
            data: base64,
            description: "",
          };
        })
      );

      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div>
      <form onSubmit={handleAddProject} className="flex flex-col gap-2 w-100">
        <div className="flex flex-col">
          <label htmlFor="title">Título:</label>
          <input
            className="border border-green-primary rounded-br-2xl"
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Descrição:</label>
          <textarea
            className="h-20 border border-green-primary rounded-br-3xl focus:outline-green-primary"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="type">Categoria:</label>
          <select
            className="block appearance-none w-full border border-green-primary py-3 px-4 pr-8 rounded-br-2xl focus:outline-green-primary"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
            required
          >
            <option value="">Selecione a categoria</option>
            <option value="Arquitetônico">Arquitetônico</option>
            <option value="Interiores">Interiores</option>
            <option value="Iluminação">Iluminação</option>
            <option value="Regularização">Regularização</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="images">Imagens:</label>
          <div className="flex flex-wrap gap-2 justify-between">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col items-center justify-end border border-gold-primary rounded-br-xl">
                <img
                  src={image.data}
                  alt="Uploaded Image"
                  width={100}
                  height={100}
                />
                <textarea
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
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageUpload}
          />
        </div>

        <button
          type="submit"
          className="py-2 w-2/6 self-end bg-green-primary border hover:border-brown-primary  font-bold rounded-sm"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
