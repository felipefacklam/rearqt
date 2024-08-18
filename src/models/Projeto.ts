import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  data: {
    type: String,  // imagem como string Base64
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const ProjetoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Arquitetônico', 'Interiores', 'Iluminação', 'Regularização'],
    required: true,
  },
  images: [ImageSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Projeto || mongoose.model('Projeto', ProjetoSchema);
