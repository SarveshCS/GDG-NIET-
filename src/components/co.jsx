export default function HeroSection8() {
    const data = []

    return (
        <>
            <div className="relative bg-[#ffffff]">
                <div className="flex justify-center m-10">
                    <p className="text-center text-2xl">
                        Through GDG On Campus - NIET we, Developers and Designers want to foster a
                        healthy development culture. Developer Student Clubs is a program that
                        will help students to learn <span style={{ color: 'blue' }}>mobile</span> and{' '}
                        <span style={{ color: 'blue' }}>web development</span>,{' '}
                        <span style={{ color: 'orange' }}>design thinking</span> and{' '}
                        <span style={{ color: 'green' }}>leadership skills</span>.
                    </p>
                </div>
                <div className=" items-center min-h-screen flex justify-around relative flex-wrap px-5">
                    <>
                        <div className="bg-[#d91515fd] h-[362px] w-[362px] absolute rounded-full blur-[120px] filter -top-[100px]  -left-20 opacity-75"></div>
                    </>
                    <div className="max-w-xl relative">
                        <h1 className="font-IBMPlexBold text-6xl max-w-md text-left uppercase">
                            Community of <span className="text-[#c10202]">800+</span> Developers
                        </h1>
                        <p className="font-IBMPlexRegular text-left">
                            A collection of 10,000 worldly Koalas each with their unique
                            skillsets. Their mission is to protect the world from evil.
                        </p>
                        <div className="hidden md:block py-5">
                            <img
                                width="50"
                                height="50"
                                src="/images/logo.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <img
                            width="500"
                            height="500"
                            alt="bg-image"
                            src="/images/il1.svg"
                        />
                    </div>
                </div>
                <div className=" items-center min-h-screen flex justify-around relative flex-wrap px-5">
                    <>
                        <div className="bg-[#15d98bfd] h-[362px] w-[362px] absolute rounded-full blur-[120px] filter -top-[100px]  -left-20 opacity-75"></div>
                    </>
                    <div className="max-w-xl relative">
                        <h1 className="font-IBMPlexBold text-6xl max-w-md text-left uppercase">
                            More Then <span className="text-[#02C173]">2000+</span> Students Influenced
                        </h1>
                        <p className="font-IBMPlexRegular text-left">
                            A collection of 10,000 worldly Koalas each with their unique
                            skillsets. Their mission is to protect the world from evil.
                        </p>
                        <div className="hidden md:block py-5">
                            <img
                                width="50"
                                height="50"
                                src="/images/logo.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <img
                            width="500"
                            height="500"
                            alt="bg-image"
                            src="/images/il2.svg"
                        />
                    </div>
                </div>
                <div className=" items-center min-h-screen flex justify-around relative flex-wrap px-5">
                    <>
                        <div className="bg-[#1560d9fd] h-[362px] w-[362px] absolute rounded-full blur-[120px] filter -top-[100px]  -left-20 opacity-75"></div>
                    </>
                    <div className="max-w-xl relative">
                        <h1 className="font-IBMPlexBold text-6xl max-w-md text-left uppercase">
                            Influential In <span className="text-[#0238c1]">140</span> Countries
                        </h1>
                        <p className="font-IBMPlexRegular text-left">
                            A collection of 10,000 worldly Koalas each with their unique
                            skillsets. Their mission is to protect the world from evil.
                        </p>
                        <div className="hidden md:block py-5">
                            <img
                                width="50"
                                height="50"
                                src="/images/logo.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <img
                            width="500"
                            height="500"
                            alt="bg-image"
                            src="/images/il3.svg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
