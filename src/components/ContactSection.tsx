"use client";

export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-start">
        
        {/* Left Column: Information */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Get in Touch with Us
          </h2>
          <p className="text-gray-700 mb-8 max-w-md">
            We’re here to help! Whether you have a question about our fuel services, need assistance with an account, or want to provide feedback, our team is ready to assist you.
          </p>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-dark text-lg">Email:</h3>
              <a href="mailto:hello@lamafuel.com" className="hover:text-primary-gradient transition-colors">hello@lamafuel.com</a>
            </div>
            <div>
              <h3 className="font-semibold text-dark text-lg">Phone:</h3>
              <a href="tel:+1234567890" className="hover:text-primary-gradient transition-colors">+1 (234) 567-890</a>
            </div>
             <div>
              <h3 className="font-semibold text-dark text-lg">Address:</h3>
              <p>1501 Pipeline Rd E Ste B, Bedford, TX 76022</p>
            </div>
            <p className="text-sm text-gray-500 pt-2">
              Available Monday – Friday • 9 AM – 6 PM CST
            </p>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
                <input id="firstName" type="text" placeholder="Enter your first name..." className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
                <input id="lastName" type="text" placeholder="Enter your last name..." className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input id="email" type="email" placeholder="Enter your email address..." className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">How can we help you?</label>
              <textarea id="message" placeholder="Enter your message..." rows={5} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient" required></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button type="submit" className="btn-orange-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 active:scale-95 transition">
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

