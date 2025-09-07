const PrivacyPolicyPage = () => {
    return (
      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-700">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-950 mb-6 text-center">Privacy Policy</h1>
  
        <p className="text-sm sm:text-base mb-4">Effective Date: <strong>May 23, 2025</strong></p>
  
        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            At <strong>Benominal</strong>, your privacy is extremely important to us. This Privacy Policy outlines how we collect,
            use, and protect your personal information when you visit our website or purchase our products.
          </p>
  
          <div>
            <h2 className="font-semibold text-lg mb-1">1. Information We Collect:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Personal details like name, email, phone number, and shipping address.</li>
              <li>Payment details processed by trusted third parties (e.g. Razorpay, Stripe, PayPal).</li>
              <li>Browsing information like IP address and device data.</li>
            </ul>
          </div>
  
          <div>
            <h2 className="font-semibold text-lg mb-1">2. How We Use Your Information:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To process orders and provide customer service.</li>
              <li>To send order confirmations, updates, and promotional offers.</li>
              <li>To improve our website and your shopping experience.</li>
            </ul>
          </div>
  
          <div>
            <h2 className="font-semibold text-lg mb-1">3. Sharing Your Information:</h2>
            <p>We never sell or rent your personal data. We may share data with:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Payment processors</li>
              <li>Shipping providers</li>
              <li>Analytics tools</li>
            </ul>
          </div>
  
          <div>
            <h2 className="font-semibold text-lg mb-1">4. Your Rights:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>You may request access, correction, or deletion of your personal data anytime.</li>
              <li>You may unsubscribe from marketing emails at any time.</li>
            </ul>
          </div>
  
          <div>
            <h2 className="font-semibold text-lg mb-1">5. Cookies:</h2>
            <p>We use cookies to personalize your experience and analyze performance. You can manage them via browser settings.</p>
          </div>
  
          <div>
            <h2 className="font-semibold text-lg mb-1">6. Data Security:</h2>
            <p>We follow best practices to ensure your information is secure.</p>
          </div>
  
          <div>
            <h2 className="font-semibold text-lg mb-1">7. Contact Us:</h2>
            <p>
              If you have any questions, email us at:{" "}
              <a href="mailto:support@benominal.com" className="text-green-800 underline">
                support@benominal.com
              </a>
            </p>
          </div>
  
          <p className="text-gray-500 italic">By using our website, you agree to this Privacy Policy.</p>
        </div>
      </section>
    );
  };
  
  export default PrivacyPolicyPage;
  