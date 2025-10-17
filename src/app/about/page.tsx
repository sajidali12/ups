export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the story behind Universal Phoenix Services and our commitment to education, immigration, and travel excellence
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded with a passion for unlocking educational opportunities and facilitating global mobility, Universal Phoenix Services has been guiding students and families toward their dreams for over a decade.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What started as a small consultancy firm has grown into a trusted partner offering comprehensive educational guidance, immigration services, and travel solutions for clients worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experienced consultants brings together decades of expertise in education, immigration law, and travel planning, creating seamless experiences for our diverse clientele.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Students studying together in a university library"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-6xl text-[#017efc] mb-4 text-center">🎓</div>
              <h3 className="text-2xl font-semibold text-center mb-4">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To provide exceptional education, immigration, and travel consultancy services that transform dreams into reality, while building lasting relationships with our clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#017efc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every detail of your educational journey.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#017efc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through transparency and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#017efc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💡
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously evolving to provide cutting-edge educational guidance and solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#017efc] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ❤️
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-gray-600">
                Our love for education drives us to create transformative learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}