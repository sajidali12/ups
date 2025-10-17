import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Education Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
          }}
        />


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Universal Phoenix Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100">
            Your trusted partner for educational consultancy, immigration services, and travel solutions around the globe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-[#ff7900] hover:bg-[#e66800] text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#017efc] bg-[#017efc] hover:bg-[#0066cc] text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive educational solutions tailored to your unique needs, backed by years of expertise and passion for exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-t-4 border-[#017efc]">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Expert Education Planning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Education Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced consultants create personalized educational pathways that exceed your expectations with attention to every detail.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-t-4 border-[#ff7900]">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Global Universities"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Global Universities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access to worldwide universities with local expertise and insider knowledge to make your educational journey unforgettable.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-t-4 border-[#304b7a]">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Personalized Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Personalized Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  24/7 support and customized solutions for all your educational and consultancy needs with dedicated account management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to meet your travel and business needs with professional excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#017efc]/20 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="University Admissions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">University Admissions</h3>
                <p className="text-gray-600">Custom application packages and guidance for successful university admissions</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#ff7900]/20 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Scholarship Support"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Scholarship Support</h3>
                <p className="text-gray-600">Best scholarship opportunities and funding options with comprehensive support</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#017efc]/20 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Education Consultancy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Education Consultancy</h3>
                <p className="text-gray-600">Expert guidance for study abroad programs and educational planning</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#ff7900]/20 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Travel Planning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Travel Planning</h3>
                <p className="text-gray-600">Custom travel arrangements and vacation planning services</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#304b7a]/20 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Student Visa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Student Visa</h3>
                <p className="text-gray-600">Professional student visa application and documentation assistance</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#ff7900]/20 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Immigration Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Immigration Services</h3>
                <p className="text-gray-600">Comprehensive visa and immigration assistance for all purposes</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 via-blue-600 to-slate-700 relative overflow-hidden" style={{background: 'linear-gradient(to right, #304b7a, #017efc, #304b7a)'}}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss your educational goals and discover how we can make your academic dreams a reality with personalized service and expert guidance.
          </p>
          <Link
            href="/contact"
            className="bg-[#ff7900] hover:bg-[#e66800] text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
