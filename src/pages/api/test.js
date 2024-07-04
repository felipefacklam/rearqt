import dbConnect from '../../lib/mongodb';

export default async function handler(req, res) {
    await dbConnect();
    res.status(200).json({ message: 'Conexão com MongoDB bem-sucedida!' });
}
