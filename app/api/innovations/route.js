
import { NextResponse } from 'next/server'
import prisma from "@/prisma/client"


export async function GET(req, res) {
    var ur = new URL(req.url)
    var pag = ur.searchParams.get('page') ||1


    const count = await prisma.Innovations.count();
    const itemsPerPage = 10;

    const offset = (pag - 1) * itemsPerPage;


    if (ur.searchParams.get('s') && !(offset >= count)) {
        var quer = ur.searchParams.get('s')
        console.log(quer)

        try {
            const posts = await prisma.Innovations.findMany({
                where: {
                    title: {
                      contains: quer,
                      mode: 'insensitive',
                    },
                  },
                orderBy: {
                    id: 'desc', 
                },
                skip: offset,
                take: itemsPerPage,
            });

            var ddf = await posts
            console.log(ddf)

            return NextResponse.json({ ddf })
        } catch (error) {
            console.error(error);
        }
    } else {

        if (offset >= count) {
            return NextResponse.json({ message: 'Complete' });
        }
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

    
}


export async function POST(req) {

    var inno = await req.json()
    await prisma.innovations.create({
        data: {
            title: inno.title,
            hash: inno.hash,
            author: inno.author,
            pass: inno.pass,
            date: inno.date,
            chain: inno.chain

        }
    })


    return new Response("OK")

}