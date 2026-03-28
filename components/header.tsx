import { ReactNode } from "react";

export function Header({title, subtitle, children}:{title:string, subtitle?:string, children?:ReactNode}){
    return(
        <div className="relative overflow-hidden rounded-2xl text-white mg-8 border border-b-3 p-10">
            <div className="relative z-10">
                <h1 className="text-4xl font-bold">{title}</h1>
                {subtitle && <p className="mt-2 text-lg text-gray-300 max-w-2xl">{subtitle}</p>}
                {children}
            </div>
            <div className="absolute right-0 top-0 h-full w-64 bg-linear-to-l from-white/10 to-transparent"></div>
        </div>
    )
}