export default function Materials() {
  const data = [
    {
      manufacturer: "F.O.V. (Sweden)",
      description: "Renaissance",
      use: "Shell Fabric",
      material: "Polyester",
      weight: "126g/m2",
      features: "High tensile strength, breathable, wind-resistant",
    },
    {
      manufacturer: "F.O.V. (Sweden)",
      description: "High-Tech Micro",
      use: "Shell Fabric",
      material: "Polyester",
      weight: "120g/m2",
      features: "Less strong but more water and windproof",
    },
    {
      manufacturer: "F.O.V. (Sweden)",
      description: "Beachcomber",
      use: "Shell Fabric",
      material: "Polyester",
      weight: "93g/m2",
      features: "As above",
    },
    {
      manufacturer: "F.O.V. (Sweden)",
      description: "Dry Comfort Canvas",
      use: "Reinforcing Panels",
      material: "Polyamide",
      weight: "190g/m2",
      features: "Very strong, but less performance than above",
    },
    {
      manufacturer: "Paramo",
      description: "Windproof",
      use: "Shell fabric",
      material: "Polyamide",
      weight: "110g/m²",
      features: "Alternative shell fabric to FOV microfibers.",
    },
    {
      manufacturer: "Paramo",
      description: "Parameta",
      use: "Pump Liner",
      material: "Polyester",
      weight: "120g/m2",
      features: "Pushes liquid away from skin or inner layers",
    },
    {
      manufacturer: "Cloverbrook",
      description: "Single sided velour",
      use: "Lightweight Fleece",
      material: "Polyester",
      weight: "150g/m2",
      features: "High warmth per weight",
    },
    {
      manufacturer: "F.O.V. (Sweden)",
      description: "Factum Outdoor",
      use: "Travel Trousers",
      material: "Polyamide",
      weight: "180g/m2",
      features: "Quick Drying, UV40+ protection",
    },
  ];

  return (
    <div className="px-6">
      <h2 className="text-3xl font-bold text-secondary sm:text-4xl text-center my-10">
        Materials
      </h2>
      <table className="min-w-full border-collapse border border-text-secondary bg-background text-text">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Description</th>
            <th>Use</th>
            <th>Material</th>
            <th>Weight</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 1 ? "even-row" : ""}>
              <td data-label="Manufacturer">{row.manufacturer}</td>
              <td data-label="Description">{row.description}</td>
              <td data-label="Use">{row.use}</td>
              <td data-label="Material">{row.material}</td>
              <td data-label="Weight">{row.weight}</td>
              <td data-label="Features">{row.features}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
