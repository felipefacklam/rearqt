import connectMongo from '@/lib/db';
import Project from '@/models/Project';

export async function GET(req, res) {
  await connectMongo();

  try {
    const projects = await Project.find({});
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), { status: 500 });
  }
}

export async function POST(req, res) {
  await connectMongo();

  try {
    const data = await req.json();
    const project = new Project(data);
    await project.save();
    return new Response(JSON.stringify(project), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create project' }), { status: 500 });
  }
}
