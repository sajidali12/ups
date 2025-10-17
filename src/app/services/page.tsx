export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive education, immigration, and travel consultancy solutions for your global journey
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From education and immigration to travel planning, we provide comprehensive solutions for your global journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="text-[#017efc] text-5xl mb-6">🎓</div>
              <h3 className="text-2xl font-semibold mb-4">University & College Admission</h3>
              <p className="text-gray-600 mb-4">
                Our expert consultants work closely with you to identify and secure admission to the best universities that match your academic goals and career aspirations.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• University selection and matching</li>
                <li>• Application strategy development</li>
                <li>• Personal statement and essay guidance</li>
                <li>• Interview preparation and coaching</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="text-[#017efc] text-5xl mb-6">💰</div>
              <h3 className="text-2xl font-semibold mb-4">Scholarship & Financial Aid</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive support in securing scholarships, grants, and financial aid to make your education dreams affordable and accessible.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Scholarship research and identification</li>
                <li>• Grant application assistance</li>
                <li>• Financial aid planning and guidance</li>
                <li>• Merit-based and need-based aid support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="text-[#017efc] text-5xl mb-6">🛂</div>
              <h3 className="text-2xl font-semibold mb-4">Student Visa & Immigration</h3>
              <p className="text-gray-600 mb-4">
                Professional assistance with student visa applications, immigration processes, and pre-departure guidance for international education.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Student visa application support</li>
                <li>• Immigration documentation preparation</li>
                <li>• Pre-departure orientation sessions</li>
                <li>• Post-arrival settlement assistance</li>
              </ul>
            </div>


            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="text-[#ff7900] text-5xl mb-6">✈️</div>
              <h3 className="text-2xl font-semibold mb-4">Travel Planning & Booking</h3>
              <p className="text-gray-600 mb-4">
                Professional travel planning services for leisure, business, and educational trips with personalized itineraries.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom travel itinerary planning</li>
                <li>• Flight and hotel reservations</li>
                <li>• Group travel coordination</li>
                <li>• Travel insurance and safety guidance</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services to enhance your educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-teal-600 text-3xl mb-3">📋</div>
              <h3 className="text-lg font-semibold mb-2">Document Verification</h3>
              <p className="text-gray-600 text-sm">
                Complete assistance with academic document verification and authentication.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-teal-600 text-3xl mb-3">🧳</div>
              <h3 className="text-lg font-semibold mb-2">Travel Insurance</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive travel insurance plans for students and travelers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-teal-600 text-3xl mb-3">📞</div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock assistance during your educational journey for peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-teal-600 text-3xl mb-3">💼</div>
              <h3 className="text-lg font-semibold mb-2">Career Guidance</h3>
              <p className="text-gray-600 text-sm">
                Expert advice on career paths, course selection, and future opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to your perfect educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We discuss your academic goals, preferences, and career aspirations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-600">
                Our experts craft a detailed educational roadmap tailored to your goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Application</h3>
              <p className="text-gray-600">
                We handle all applications and documentation for a seamless process.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-600">
                Begin your studies with our continuous support and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let our experts guide you toward your dream education and career.
          </p>
          <a
            href="/contact"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}