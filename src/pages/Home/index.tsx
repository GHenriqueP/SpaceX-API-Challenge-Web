import { Header } from "../../components/Header";
import { Graphics } from "../../components/GraphicsContainer";
import { SearchForm } from "./components/SearchForm";
import { Launches } from "../../components/Launches";
import { LaunchesContainer } from "./styles";

export function Home() {
  return (
    <div>
      <Header />
      <Graphics />

      <LaunchesContainer>
        <SearchForm />
        <Launches />
      </LaunchesContainer>
    </div>
  );
}
