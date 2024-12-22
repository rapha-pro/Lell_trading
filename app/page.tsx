import Home from "@/app/pages/home/home";
import { Suspense } from "react"
import Services from "@/app/pages/services/services";
import About from "./pages/about/about";


export default function Page() {
  return (
	<Suspense>
		<Home/> 
		<Services/>
		<About/> 
	</Suspense>
  );
}
