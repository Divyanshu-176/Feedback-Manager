import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Divyanshu Jain</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="https://divyanshujain.vercel.app" target="_blank"><span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[0.5] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Portfolio</span></a>
            <a href="https://github.com/Divyanshu-176" target="_blank"><span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[0.5] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Github</span></a>
            <a href="https://www.linkedin.com/in/divyanshujain17" target="_blank"><span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[0.5] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Linkedin</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}