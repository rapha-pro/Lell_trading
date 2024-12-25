import { Facebook, Send } from "lucide-react"; 
import { RiTwitterXFill } from "react-icons/ri";

const effectColor = "rgba(244, 114, 182, 0.8)";

const socialButtons = [
  {
    icon: Facebook,
    color: "rgba(234, 179, 8, 1)",
    bgColor: "#1877F2",
    hoverColor: "white",
    effectColor: effectColor,
    href: "https://facebook.com", 
  },
  {
    icon: RiTwitterXFill, 
    color: "rgba(234, 179, 8, 1)",
    bgColor: "black", 
    hoverColor: "white",
    effectColor: effectColor,
    href: "https://twitter.com",
  },
  {
    icon: Send, 
    color: "rgba(234, 179, 8, 1)",
    bgColor: "#0088cc", 
    hoverColor: "white",
    effectColor: effectColor,
    href: "https://t.me", 
  },
];


export default socialButtons;