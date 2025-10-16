export default function CardContainer({ children }) {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}