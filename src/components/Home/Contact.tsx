const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <p className="text-gray-600 mb-4">
            If you have any inquiries or would like to work together, feel free
            to get in touch with me.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
