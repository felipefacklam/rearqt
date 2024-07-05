import dbConnect from '@/lib/dbConnect';
import Projeto from '@/models/Projeto';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const { method } = req;
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ success: false, message: 'Not authenticated' });
  }

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const projetos = await Projeto.find({});
        res.status(200).json({ success: true, data: projetos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const projeto = await Projeto.create(req.body);
        res.status(201).json({ success: true, data: projeto });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
