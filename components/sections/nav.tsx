"use client"

import Image from "next/image";
import Button from "../button";
import DevOlympusLogo from "@/images/dev-olympus-logo.png";

export default function Nav() {
	const styles = "hover:underline underline-offset-4 transition-all";
	return (
		<div >
			<Image src={DevOlympusLogo} height={40} className="object-contain absolute top-4 left-4" alt="dev-olympus-logo" />
			<div className="flex gap-10 justify-center  text-center p-2 text-[15px]">
				<Button to="about" className={styles}>
					About
				</Button>
				<Button to="howitworks" className={styles}>
					How It Works
				</Button>
				<Button to="contact" className={styles}>
					Contact
				</Button>

			</div>
		</div>
	)
}