import Br from "@/components/br";
import Contact from "@/components/contact";
import About from "@/components/about";
import Footer from "@/components/footer";
import HowItWorks from "@/components/howitworks";
import Intro from "@/components/intro";

export default function Home() {
  return (
	<main className="m-auto justify-center max-w-7xl h-[2000px]">
		<Br size={7}/>
		<Intro />
		<Br size={5}/>
		<About />
		<Br size={3}/>
		<HowItWorks />
		<Br size={5}/>
		<Contact />
		<Br size={7}/>
		<Footer />
	</main>
  )
}
