 
export default function Projects() {
  return (
    <section className="w-full bg-black py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">My Projects</h2>
            <p className=" text-muted-foreground md:text-xl lg:text-base xl:text-xl text-white">
              Take a look at some of the projects I've worked on. From web applications to mobile apps, I've had the opportunity to collaborate on a variety of exciting projects.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {["Wavelearn ", "URL Shortner", "Training And Placement Cell", ].map((title, index) => (
              <div key={index} className=" text-white group relative overflow-hidden rounded-lg hover:cursor-pointer">
                
                  <span className="sr-only">View {title}</span>
               
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt={`${title} thumbnail`}
                  className="h-full w-full object-cover transition-opacity group-hover:opacity-50"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm text-white/80">A brief description of the project.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
