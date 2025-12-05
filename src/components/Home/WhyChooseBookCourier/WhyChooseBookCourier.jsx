import {
  FaShippingFast,
  FaBookOpen,
  FaShieldAlt,
  FaSmile,
} from "react-icons/fa";
import Container from "../../../shared/Container/Container";

const WhyChooseBookCourier = () => {
  return (
    <Container>
      <section className="py-16 bg-gray-50">
        <div className=" px-4 text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Why Choose <span className="text-black">BookCourier</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We deliver more than just books — we deliver trust, quality, and a
            seamless reading experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaShippingFast className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Fast & Safe Delivery
              </h3>
              <p className="text-gray-500">
                Your books arrive quickly and securely, right at your doorstep.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaBookOpen className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Collection</h3>
              <p className="text-gray-500">
                Thousands of books from all genres — choose your next read
                easily.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
              <p className="text-gray-500">
                Safe payment, verified books, and authentic quality — always.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaSmile className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-500">
                Our support team ensures a smooth and satisfying buying
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WhyChooseBookCourier;
