import mongoose from 'mongoose';

const imagemSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  }
});

const projetoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['Arquitetônico', 'Interiores', 'Iluminação', 'Regularização'],
    required: true,
  },
  imagens: [imagemSchema],
  dataCriacao: {
    type: Date,
    default: Date.now,
  },
  ultimaAtualizacao: {
    type: Date,
    default: Date.now,
  }
});

const Projeto = mongoose.models.Projeto || mongoose.model('Projeto', projetoSchema);

export default Projeto;