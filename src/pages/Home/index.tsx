import { Header } from "../../components/Header";
import { Graphics } from "../../components/GraphicsContainer";
import { SearchForm } from "./components/SearchForm";
import { LaunchesContainer } from "./styles";

export function Home() {
  return (
    <div>
      <Header />
      <Graphics />

      <LaunchesContainer>
        <SearchForm />
      </LaunchesContainer>
    </div>
  );
}
