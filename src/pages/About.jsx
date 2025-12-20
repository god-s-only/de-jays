import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';

// About Page Component
const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="font-tertiary uppercase text-[15px] tracking-[6px] text-accent mb-4">Discover Our Story</p>
          <h2 className="font-primary text-[45px] mb-6">About De Jays Guest Inn</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Hero Image with Overlay Text */}
        <div className="relative mb-20 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200" 
            alt="Hotel exterior"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Where Luxury Meets Nigerian Hospitality</h3>
              <p className="text-lg lg:text-xl max-w-2xl">No 21 Zitti Road, Kaduna, Kaduna State, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h3>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                De Jays Guest Inn and Resort Limited stands as a beacon of hospitality excellence in the heart of Kaduna, Nigeria. Our establishment represents the perfect fusion of traditional Nigerian warmth and contemporary luxury accommodation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since our inception, we have been committed to providing exceptional guest experiences that exceed expectations. Our facility offers a comprehensive range of world-class hotel services designed to cater to both business and leisure travelers.
              </p>
            </div>
          </div>

          {/* Right Column - Stats/Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-accent">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-gray-700 font-semibold">Service Available</p>
              <p className="text-sm text-gray-600 mt-2">Round-the-clock hospitality</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-accent">
              <div className="text-4xl font-bold text-accent mb-2">8+</div>
              <p className="text-gray-700 font-semibold">Room Types</p>
              <p className="text-sm text-gray-600 mt-2">From Single to Deluxe</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-accent">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Guest Satisfaction</p>
              <p className="text-sm text-gray-600 mt-2">Our commitment to you</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-accent">
              <div className="text-4xl font-bold text-accent mb-2">★★★★★</div>
              <p className="text-gray-700 font-semibold">Premium Quality</p>
              <p className="text-sm text-gray-600 mt-2">Excellence guaranteed</p>
            </div>
          </div>
        </div>

        {/* Services Section with Images */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h3>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600" 
                alt="Accommodations"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white mb-2">Premium Accommodations</h4>
                <p className="text-gray-200 text-sm">Meticulously designed rooms with modern amenities and elegant décor</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" 
                alt="Restaurant"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white mb-2">Fine Dining</h4>
                <p className="text-gray-200 text-sm">Demo Satisfy Ventures - Local and international cuisine excellence</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600" 
                alt="Bar"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white mb-2">Relaxation Bar</h4>
                <p className="text-gray-200 text-sm">Premium beverages in a sophisticated atmosphere</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600" 
                alt="Service"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white mb-2">24/7 Service</h4>
                <p className="text-gray-200 text-sm">Dedicated hospitality professionals always ready to assist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose De Jays?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Personalized Service:</span> We understand that every guest is unique and tailor our services to your specific needs
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Strategic Location:</span> Convenient access to key business districts, cultural landmarks, and transportation hubs
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Nigerian Hospitality:</span> Experience the perfect blend of traditional warmth and international standards
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Memorable Experiences:</span> We don't just provide accommodation – we create lasting memories
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800" 
                alt="Hotel lobby"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                <p className="text-sm uppercase tracking-wide mb-1">Location</p>
                <p className="font-bold text-lg">Kaduna, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
          <p className="text-xl mb-8 text-white/90">Book your stay at De Jays Guest Inn today</p>
          <p className="text-lg mb-2">No 21 Zitti Road, Kaduna, Kaduna State, Nigeria</p>
          <p className="text-white/90">Where comfort meets excellence</p>
        </div>
      </div>
    </section>
  );
};

// Restaurant Page Component
const Restaurant = () => {
  const restaurantImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="font-tertiary uppercase text-[15px] tracking-[6px] mb-2">Fine Dining</p>
          <h2 className="font-primary text-[45px] mb-4">Demo Satisfy Ventures</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience culinary excellence at our on-site restaurant, where expert chefs craft delicious meals using the finest ingredients. From traditional Nigerian delicacies to international cuisine, every dish is prepared with passion and precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {restaurantImages.map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={img} alt={`Restaurant ${idx + 1}`} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">What We Offer</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Authentic Nigerian and Continental cuisine prepared by expert chefs</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Fresh ingredients sourced daily for optimal quality and taste</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Elegant dining ambiance perfect for business meals and celebrations</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Room service available for in-room dining convenience</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Special dietary requirements accommodated upon request</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Contact Page Component
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 5000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-tertiary uppercase text-[15px] tracking-[6px] mb-2">Get In Touch</p>
            <h2 className="font-primary text-[45px]">Contact Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">No 21 Zitti Road<br />Kaduna, Kaduna State<br />Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">08059161986</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">victorlukebalogun@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-accent/20 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Business Hours</h4>
                <p className="text-gray-600">24/7 Service Available</p>
                <p className="text-gray-600 text-sm mt-2">Our reception and staff are always ready to assist you</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="btn btn-lg btn-primary w-full flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </button>
                
                {showSuccess && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;