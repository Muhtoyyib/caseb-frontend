export default function ContactForm() {
  return (
    <section className="bg-[#1D3B35] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12">
            Ready to take your hiring to the next stage?
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent text-white placeholder:text-gray-400 border-gray-600"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent text-white placeholder:text-gray-400 border-gray-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-white placeholder:text-gray-400 border-gray-600"
            />
            <input
              type="text"
              placeholder="Company"
              className="bg-transparent text-white placeholder:text-gray-400 border-gray-600"
            />
            <button className="col-span-1 md:col-span-2 bg-[#4CD4C1] text-white hover:bg-[#3baf9e]">
              Book a Free Consultation →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
