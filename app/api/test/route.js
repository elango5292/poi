
import { NextResponse } from 'next/server'

export async function GET(req, res) {
    const ddf = { t: "tomorrow"};
    
    var p = new URL(req.url)
    console.log(p.searchParams.get('p'));
    if(p.searchParams.get('s') ){
        console.log("got ti")
    }else{
        console.log("not got it")
    }
    return NextResponse.json( ddf );
  }