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

export default Restaurant;