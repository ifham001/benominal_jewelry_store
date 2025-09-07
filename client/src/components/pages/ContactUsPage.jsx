import Image from 'next/image';
import img from '../../../public/collection/bracelet.jpg';
import Button from '@/ui/button/Button';

const ContactUsPage = () => {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-green-950">
          Contact Us
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          <span className="text-yellow-700 font-medium">Minimalism</span> meets modern luxury.
          Our designs are rooted in Korean fashion culture, shaped for
          <span className="text-yellow-700 font-medium"> global style</span>.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden">
          <Image
            src={img}
            alt="Benominal Contact"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
            priority
          />
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-6">
            Schedule A Call Back
          </h3>
          <form className="space-y-4">
            {/* Name Inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none"
            />

            {/* Phone Number */}
            <div className="flex gap-4">
              <select className="rounded-full border border-gray-300 px-4 py-2 w-24 focus:outline-none">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Feel free to say anything you need"
              rows={4}
              className="w-full rounded-2xl border border-gray-300 px-4 py-2 focus:outline-none"
            ></textarea>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
