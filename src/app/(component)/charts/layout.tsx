export default function ChartLayout({
  barChart,
  lineChart,
  heatMap,
  login,
}: {
  barChart: React.ReactNode;
  lineChart: React.ReactNode;
  heatMap: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = true;

  return (
    <div>
      <h1 className="text-center text-3xl text-red-500">
        Chart Layout
      </h1>

      {isLogin ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded-md">
              {barChart}
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              {lineChart}
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              {heatMap}
            </div>
          </div>
        </>
      ) : (
        <div>{login}</div>
      )}
    </div>
  );
}