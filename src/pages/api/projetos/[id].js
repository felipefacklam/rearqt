import dbConnect from '@/lib/dbConnect';
import Projeto from '@/models/Projeto';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ success: false, message: 'Not authenticated' });
  }

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const projeto = await Projeto.findById(id);
        if (!projeto) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: projeto });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const projeto = await Projeto.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!projeto) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: projeto });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedProjeto = await Projeto.deleteOne({ _id: id });
        if (!deletedProjeto) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
