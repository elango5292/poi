// poi/app/api/innovations/route.js
// import { NextResponse } from 'next/server'
// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

// export async function GET() {
//   const res = await prisma.Innovations.findMany()
//   const data = await res
 
//   return NextResponse.json({ data })
// }

import { NextResponse } from 'next/server'
import prisma from "@/prisma/client"


export async function GET(req, res) {
  const { page } = 2;
  const itemsPerPage = 5;
  const currentPage = parseInt(page) || 1;

  const offset = (currentPage - 1) * itemsPerPage;

  try {
    const posts = await prisma.Innovations.findMany({
      orderBy: {
        id: 'desc', // Assuming you have a createdAt field in your data model
      },
      skip: offset,
      take: itemsPerPage,
    });

 var ddf = await posts
 
    return NextResponse.json({ ddf })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


export async function POST(req) {

  var inno = await req.json()
  await prisma.innovations.create({
    data:{
        title:inno.title,
        hash:inno.hash,
        author: inno.author
    }
  })
  

  return new Response("OK")
  
}