const EducationSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Cards */}
          <div className="bg-white rounded p-4">IIT Kharagpur</div>
          <div className="bg-white rounded p-4">IIT Kharagpur</div>
          <div className="bg-white rounded p-4">IIT Kharagpur</div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
