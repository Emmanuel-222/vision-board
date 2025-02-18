import * as motion from "motion/react-client";

import VisionBoard from "./components/VisionBoard";

const App = () => {
  return (
    <div className="flex flex-col gap-4 bg-black font-montserrat">
      <motion.h1
        className="text-red-600 text-center font-[800] text-3xl py-2 md:text-5xl"
      >
        MY VISION BOARD
      </motion.h1>
      <VisionBoard />
    </div>
  );
};

export default App;
