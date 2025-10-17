export default function RepoCard({ name, type, species, description ,id}) {
  return (
    <div className={`flex items-center justify-between border rounded-lg p-4 border-stone-500 shadow hover:scale-102 transition transform duration-200`}>
      <div className="p-1.5">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <p className="text-gray-400 mt-2">{type}</p>
        <p className="text-gray-400 mt-2">{species}</p>
        </div>
    </div>
  );
}