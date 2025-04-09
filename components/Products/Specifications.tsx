interface SpecificationsProps {
    specs: Record<string, string>;
  }
  
  export default function Specifications({ specs }: SpecificationsProps) {
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Specifications</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {Object.entries(specs).map(([key, value], idx) => (
            <li key={idx}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }