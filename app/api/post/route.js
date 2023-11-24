// poi/app/api/innovations/route.js

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  await prisma.innovations.create({
    data:{
        title:req.data.title,
        hash:req.data.hash,
        author: req.data.author
    }
  })
 
}