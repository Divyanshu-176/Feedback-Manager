import prisma from "@/lib/prisma";
import { syncCurrentUser } from "@/lib/sync-user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const dbUser = await syncCurrentUser()
        console.log("giuhfgiuhguhgiuhgiuhiughg", dbUser)

        if(!dbUser){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }
        const {title, description, category} = await request.json()

        const post = await prisma.post.create({
            data:{
                title,
                description,
                category,
                authorId:dbUser.id
            }
        })

        return NextResponse.json(post)
    } catch (error) {
        console.error("Error creating post: ", error)
        return NextResponse.json({error:"Internal server error"}, {status:500})
    }
}






export async function GET(request:NextRequest){
    try {
        const posts = await prisma.post.findMany({
            include:{
                author:true,
                votes:true
            },
            orderBy:{
                createdAt:"desc"
            }
        })

        return NextResponse.json(posts)
    } catch (error) {
        console.error("Error fetching posts:",error)
        return NextResponse.json({
            error:"Internal Server error"
        },{status:500})
    }
}