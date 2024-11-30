'use client'

import { useState, useEffect } from 'react'

export default function GDSCHeader() {
    const phrases = [
        "ਸੁਆਗਤ ਹੈ",
        "Welcome",
        "स्वागत है",
        "Bienvenido",
    ]

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
            <div className="space-y-10">
                {/* Changing Text */}
                <h2 className="text-9xl font-semibold h-10 flex items-center justify-center">
                    {phrases[currentPhraseIndex]}
                </h2>

                {/* GDSC ABESIT Text with Google Colors */}
                <h1 className="text-9xl font-bold tracking-tight">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#DB4437]">D</span>
                    <span className="text-[#0F9D58]">G</span>
                    <span className="text-black ml-2">NIET</span>
                    <span className="text-black">,</span>
                </h1>


                {/* Action Buttons */}
                <div className="flex justify-center gap-4 pt-4">
                    <button className="px-6 py-2 rounded-full bg-[#F4B400] text-white hover:bg-[#F4B400]/90 transition-colors">
                        Learn
                    </button>
                    <button className="px-6 py-2 rounded-full bg-[#4285F4] text-white hover:bg-[#4285F4]/90 transition-colors">
                        Collaborate
                    </button>
                    <button className="px-6 py-2 rounded-full bg-[#0F9D58] text-white hover:bg-[#0F9D58]/90 transition-colors">
                        Grow
                    </button>
                </div>
            </div>
        </div>
    )
}

