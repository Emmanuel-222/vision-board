import VisionBoard from "./components/VisionBoard";

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-red-600 text-center font-[800] text-2xl py-2">
        MY VISION BOARD
      </h1>
      <VisionBoard />
    </div>
  );
};

export default App;
