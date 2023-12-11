"use client"

import { useAnimate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react"
import Card from "./card";

export default function LeftRight({
	children
}: {
	children: React.ReactNode
}) {


	return (
	  	<div className="flex justify-around gap-12">
			{React.Children.map(children, (child, index) =>
				<Card key={index} index={index} child={child} />
			)}	
		</div>
	)
}