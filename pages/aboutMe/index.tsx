import Image from 'next/image'


export default function Home() {
  return (
    <section className="flex flex-col items-center">
        <div className="rounded-full h-24 w-24 overflow-hidden avatar">
          <Image
            src="/photo.jpg"
            alt="Picture of the author"
            layout="responsive"
            height={800}
            width={450}
          />
      </div>
    </section>
  )
}
