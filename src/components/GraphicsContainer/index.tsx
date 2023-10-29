import Barchart from "./GraphicBar";
import { PieChart } from "./GraphicPie";
import { GraphicCard, GraphicsContainer } from "./styles";

export function Graphics() {
  return (
    <GraphicsContainer>
      <GraphicCard>
        <PieChart />
      </GraphicCard>

      <GraphicCard>
        <Barchart />
      </GraphicCard>
    </GraphicsContainer>
  );
}
