import connectMongo from '@/lib/db';
import Project from '@/models/Project';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export async function GET(req) {
  await connectMongo();

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    console.log('Received GET request with id:', id); // Log the ID

    if (id) {
      const project = await Project.findById(new ObjectId(id));

      if (!project) {
        return new Response(JSON.stringify({ error: 'Project not found' }), { status: 404 });
      }

      return new Response(JSON.stringify(project), { status: 200 });
    } else {
      const projects = await Project.find({});
      return new Response(JSON.stringify(projects), { status: 200 });
    }
  } catch (error) {
    console.error('Error in GET:', error); // Log the error
    return new Response(JSON.stringify({ error: 'Failed to fetch project(s)' }), { status: 500 });
  }
}

export async function POST(req, res) {
  await connectMongo();

  try {
    const data = await req.json(); // Parse the request body
    const project = new Project(data); // Create a new project instance
    await project.save(); // Save the project to the database
    return new Response(JSON.stringify(project), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create project' }), { status: 500 });
  }
}

export async function PUT(req) {
  await connectMongo();

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const data = await req.json();

    console.log('Received PUT request with id:', id, 'and data:', data); // Log the ID and data

    const project = await Project.findByIdAndUpdate(new ObjectId(id), data, { new: true });

    if (!project) {
      return new Response(JSON.stringify({ error: 'Project not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    console.error('Error in PUT:', error); // Log the error
    return new Response(JSON.stringify({ error: 'Failed to update project' }), { status: 500 });
  }
}

export async function DELETE(req) {
  await connectMongo();

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    console.log('Received DELETE request with id:', id); // Log the ID

    const deletedProject = await Project.findByIdAndDelete(new ObjectId(id));

    if (!deletedProject) {
      return new Response(JSON.stringify({ error: 'Project not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'Project deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error in DELETE:', error); // Log the error
    return new Response(JSON.stringify({ error: 'Failed to delete project' }), { status: 500 });
  }
}
