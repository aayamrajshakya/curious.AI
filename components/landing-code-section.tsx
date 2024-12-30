"use client"
import gsap from "gsap"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)
export default function LandingCodeSection() {
    useEffect(() => {
        gsap.to(".opacityAnimation", {
            opacity: 1,
            duration: 3,
            scrollTrigger: ".opacityAnimation",
        })
    }, [])
    return (
        <section className="relative bg-black w-full h-full ">
            <div className=" absolute rounded-lg inset-0 bg-contain bg-landing-code-section-bg opacity-20 " />
            <div className=" w-full h-full flex items-center justify-center  ">
                <h1 className="text-white text-4xl md:text-8xl lg:text-8xl text-center opacity-0 opacityAnimation">Generate Flawless Code, Effortlessly</h1>
            </div>


        </section>
    )
} 
