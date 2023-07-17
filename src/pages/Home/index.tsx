const Home = () => {
    return (
        <>
            <header className="container mt-16 flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold tracking-widest">
                        Julio
                        <span className="text-blue-violet-default text-[2rem]">{' { '}</span>
                        Chiuchi
                        <span className="text-blue-violet-default text-[2rem]">{' } '}</span>
                    </h3>
                </div>

                <div className="text-2xl flex items-center gap-3 tracking-wider">
                    <a href="#" className="text-blue-violet-default">about me</a>
                    <a href="">timeline pro</a>
                    <a href="" className="text-lg ml-8 border rounded-md border-blue-violet-default p-3 hover:bg-blue-violet-default hover:text-white-ice transition-colors duration-700 ease-in-out animate-pulse">download cv</a>
                </div>
            </header>

            <div className="container mt-16">

                <div className="mt-16">
                    <h1 className="text-[7rem]">
                        Hey!
                    </h1>
                </div>

                <div className="w-3/4">
                    <p className="text-2xl">
                        Meu nome é Julio. Trabalho como Desenvolvedor Front-end desde 2015, meu foco atual é criar layouts interativos e
                        responsivos do zero, entregando interfaces amigáveis pensando em E-acessibilidade e SEO.
                        Também gosto de estudar UX/UI Design, embora criemos software para humanos, certo?
                    </p>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold">Technologies and tools I have been used</h2>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-7">
                    <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm">REACT</div>
                    <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm">TYPESCRIPT</div>
                    <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm">NODE</div>
                </div>
            </div>

            <footer className="container mt-10">
                2023 © All rights reserved
            </footer>
        </>
    );
}

export default Home;
