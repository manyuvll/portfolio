import Image from 'next/image'


export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <p className="antialiased font-abel text-3xl font-medium text-opacity-75 mb-8">Hi, I'm Emanuele, and I'm a <span className="antialiased text-green-400 font-bold">Full-Stack Developer.</span></p>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col flex-1 justify-evenly">
          <span className="glitch font-oswald text-5xl md:text-custom-xl text-transparent" data-content="ABOUT-ME">ABOUT-ME</span>
          <span className="glitch font-oswald text-5xl md:text-custom-xl text-red-500" data-content="WORKS">WORKS</span>
          <span className="glitch font-oswald text-5xl md:text-custom-xl text-transparent" data-content="CONTACT-ME">CONTACT-ME</span>
        </div>
        <div className="rounded-full h-24 w-24 overflow-hidden avatar">
          <Image
            src="/photo.jpg"
            alt="Picture of the author"
            layout="responsive"
            height={800}
            width={450}
          />
        </div>
      </div>
    </section>
  )
}
