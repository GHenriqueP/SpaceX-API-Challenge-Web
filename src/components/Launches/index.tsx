import React, { useState, useEffect } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { debounce } from "lodash";
import {
  LaunchesContainer,
  LaunchesTable,
  LaunchesThead,
  LaunchesTbody,
  LaunchesTr,
  LaunchesTh,
  LaunchesTd,
  StatusLaunches,
  SearchFormContainer,
  PaginationContainer,
  Container,
} from "./styles";
import logoImg from "../../assets/youtube.svg";

interface Launch {
  id: number;
  flightNumber: number;
  logo: string;
  missionName: string;
  launchDate: string;
  success: boolean;
  rocket: string;
  ytbUrl: string;
}

export function Launches() {
  const [searchText, setSearchText] = useState<string>("");
  const [launchData, setLaunchData] = useState<Launch[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const debouncedHandleSearch = debounce(() => {
    const baseUrl = "http://localhost:3000/launches";
    const page = currentPage;
    const query = searchText
      ? `?search=${searchText}&page=${page}&limit=4`
      : `?page=${page}&limit=4`;
    const apiUrl = baseUrl + query;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: { launches: Launch[]; totalPages: number }) => {
        setLaunchData(data.launches);
        setTotalPages(data.totalPages);
      })
      .catch((error) => {
        setLaunchData([]);
        setTotalPages(1);
        console.error("Erro na chamada à API:", error);
      });
  }, 300);

  useEffect(() => {
    // Faz a busca no carregamento inicial
    debouncedHandleSearch();
  }, [currentPage]);

  const handleSearch = () => {
    // Chama a função de debounce ao pressionar o botão "Buscar"
    debouncedHandleSearch();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita a recarga da página
      debouncedHandleSearch();
    }
  };

  return (
    <Container>
      <SearchFormContainer>
        <input
          type="text"
          placeholder="Busque os Lançamentos"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <button type="button" onClick={handleSearch}>
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </SearchFormContainer>
      <LaunchesContainer>
        <LaunchesTable>
          <LaunchesThead>
            <LaunchesTr>
              <LaunchesTh>N° do Vôo</LaunchesTh>
              <LaunchesTh>Logo</LaunchesTh>
              <LaunchesTh>Missão</LaunchesTh>
              <LaunchesTh>Data de Lançamento</LaunchesTh>
              <LaunchesTh>Foguete</LaunchesTh>
              <LaunchesTh>Resultado</LaunchesTh>
              <LaunchesTh>Vídeo</LaunchesTh>
            </LaunchesTr>
          </LaunchesThead>
          <LaunchesTbody>
            {launchData.map((launch) => (
              <LaunchesTr key={launch.id}>
                <LaunchesTd>{launch.flightNumber}</LaunchesTd>
                <LaunchesTd>
                  <img src={launch.logo} alt={launch.missionName} width={30} />
                </LaunchesTd>
                <LaunchesTd>{launch.missionName}</LaunchesTd>
                <LaunchesTd>
                  {new Date(launch.launchDate).toLocaleDateString()}
                </LaunchesTd>
                <LaunchesTd>{launch.rocket}</LaunchesTd>
                <LaunchesTd>
                  <StatusLaunches
                    variant={launch.success ? "success" : "failed"}
                  >
                    {launch.success ? "SUCESSO" : "FALHA"}
                  </StatusLaunches>
                </LaunchesTd>
                <LaunchesTd>
                  <a
                    href={launch.ytbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logoImg} alt="Assista no YouTube" width="25px" />
                  </a>
                </LaunchesTd>
              </LaunchesTr>
            ))}
          </LaunchesTbody>
        </LaunchesTable>
        <PaginationContainer>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {currentPage - 1}
          </button>
          <span>
            {currentPage} de {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {currentPage + 1}
          </button>
        </PaginationContainer>
      </LaunchesContainer>
    </Container>
  );
}
