"use client"

import { Map, MessageSquare, Sparkle } from "lucide-react"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import { SignInButton, SignOutButton, useAuth} from "@clerk/nextjs"
import { Button } from "./ui/button"


export default function Navbar(){
    const {isSignedIn} = useAuth()  
    return<>
        <nav className="border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-linear-to-r from-blue-300 to-purple-300 flex items-center justify-center">
                                <Sparkle className="h-4 w-4 text-white"/>
                            </div>
                            <span className="text-xl font-bold">Feed Fizz</span>
                        </div>
                    </Link>


                </div>
                <div className="flex gap-5">
                    <Link href="/roadmap" className="text-sm hover:text-primary flex items-center gap-1">
                        <Map className="h-4 w-4"/>
                        Roadmap
                    </Link>
                    <Link href="/feedback" className="text-sm hover:text-primary flex items-center gap-1">
                        <MessageSquare className="h-4 w-4"/>
                        Feedback
                    </Link>
                    <div className="flex item-center gap-4">
                        <ThemeToggle/>
                        {!isSignedIn ? <SignInButton mode="modal"><Button>Sign in</Button></SignInButton> : <SignOutButton><Button>Log out</Button></SignOutButton>}
                    </div>
                </div>
            </div>
        </nav>
    </>

}