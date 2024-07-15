// route.js

import connectMongo from '@/lib/db';
import User from '@/models/User';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export async function GET(req) {
  await connectMongo();

  try {
    const url = new URL(req.url); // pegqa url e cria um objeto pra acessar funcionalidades
    const id = url.searchParams.get('id'); // pega o id da url

    console.log('Get com id:', id); // só pra ver qual o id

    if (id) {
      const user = await User.findById(new ObjectId(id)); //primeiro converte id para ObjectId (coisa do Mongo...)

      if (!user) {
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
      }

      return new Response(JSON.stringify(user), { status: 200 });
    } else {
      const users = await User.find({});
      return new Response(JSON.stringify(users), { status: 200 });
    }
  } catch (error) {
    console.error('Error in GET:', error); // Log the error
    return new Response(JSON.stringify({ error: 'Failed to fetch user(s)' }), { status: 500 });
  }
}

export async function POST(req, res) {
  await connectMongo();

  try {
    const data = await req.json(); // Parse the request body
    const user = new User(data); // Create a new user instance
    await user.save(); // Save the user to the database
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create user' }), { status: 500 });
  }
}

export async function PUT(req) {
  await connectMongo();

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const data = await req.json();

    console.log('Received PUT request for user with id:', id, 'and data:', data); // Log the ID and data

    const user = await User.findByIdAndUpdate(new ObjectId(id), data, { new: true });

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error('Error in PUT:', error); // Log the error
    return new Response(JSON.stringify({ error: 'Failed to update user' }), { status: 500 });
  }
}

export async function DELETE(req) {
  await connectMongo();

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    console.log('Received DELETE request for user with id:', id); // Log the ID

    const deletedUser = await User.findByIdAndDelete(new ObjectId(id));

    if (!deletedUser) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'User deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error in DELETE:', error); // Log the error
    return new Response(JSON.stringify({ error: 'Failed to delete user' }), { status: 500 });
  }
}
