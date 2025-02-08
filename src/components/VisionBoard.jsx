import Card from "./Card"

const VisionBoard = () => {
  return (
    <div className="grid grid-cols-8 auto-rows-min gap-10 border-solid border-red-400 border-2 min-h-[100vh] mx-4 rounded-lg p-10">
      <Card id="1" rowStart={1} rowEnd={2} colStart={1} colEnd={3} width="300" minWidth="100" height="500" minHeight="300"/>
      <Card id="2" rowStart={1} rowEnd={2} colStart={3} colEnd={6} width="600" minWidth="300" height="500" minHeight="300"/>
      <Card id="3" rowStart={1} rowEnd={2} colStart={7} colEnd={9} width="300" minWidth="100" height="500" minHeight="100"/>
      <Card id="4" rowStart={2} rowEnd={3} colStart={1} colEnd={5} width="400" minWidth="400" height="200" minHeight="100"/>
      <Card id="5"rowStart={2} rowEnd={7} colStart={4} colEnd={7} width="300" minWidth="100" height="400" minHeight="200"/>
      <Card id="6"rowStart={2} rowEnd={7} colStart={6} colEnd={9} width="300" minWidth="100" height="400" minHeight="200"/>
      <Card id="7" rowStart={3} rowEnd={4} colStart={1} colEnd={5} width="400" minWidth="400" height="200" minHeight="100"/>
    </div>
  )
}

export default VisionBoard;