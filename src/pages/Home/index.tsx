import { Header } from "../../components/Header";
import { Graphics } from "../../components/GraphicsContainer";
import { Launches } from "../../components/Launches";
import { LaunchesContainer } from "./styles";

export function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Header />
      <Graphics />

      <LaunchesContainer>
        <Launches />
      </LaunchesContainer>
    </div>
  );
}
