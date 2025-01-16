import { FaHeart } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container flex items-center justify-center py-11">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with <FaHeart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
          <span className="font-medium text-foreground">Walid Memon</span> ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
} 