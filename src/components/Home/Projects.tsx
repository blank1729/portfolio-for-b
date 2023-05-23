const ProjectsSection: React.FC = () => {
  // Dummy project data
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "project1.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Praesent eu nisl at enim suscipit sollicitudin.",
      image: "project2.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Nulla sed urna vel turpis tincidunt eleifend.",
      image: "project3.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div className="bg-white rounded p-4" key={project.id}>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              {/* Additional project details */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
