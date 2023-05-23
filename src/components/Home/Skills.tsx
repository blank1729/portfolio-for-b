const SkillsSection: React.FC = () => {
  // Dummy skill data
  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Data Visualization",
  ];

  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div className="bg-white rounded p-4 text-center" key={index}>
              <span className="text-lg">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
