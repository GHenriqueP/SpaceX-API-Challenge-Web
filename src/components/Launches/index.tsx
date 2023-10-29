import {
  LaunchesTable,
  LaunchesThead,
  LaunchesTbody,
  LaunchesTr,
  LaunchesTh,
  LaunchesTd,
  StatusLaunches,
} from "./styles";

import logoImg from "../../assets/youtube.svg";

export function Launches() {
  return (
    <LaunchesTable>
      <LaunchesThead>
        <LaunchesTr>
          <LaunchesTh>N°do Vôo</LaunchesTh>
          <LaunchesTh>Logo</LaunchesTh>
          <LaunchesTh>Missão</LaunchesTh>
          <LaunchesTh>Data de Lançamento</LaunchesTh>
          <LaunchesTh>Foguete</LaunchesTh>
          <LaunchesTh>Resultado</LaunchesTh>
          <LaunchesTh>Vídeo</LaunchesTh>
        </LaunchesTr>
      </LaunchesThead>

      <LaunchesTbody>
        <LaunchesTr>
          <LaunchesTd>180</LaunchesTd>
          <LaunchesTd>logo</LaunchesTd>
          <LaunchesTd>Starlink 4-27 (v1.5)</LaunchesTd>
          <LaunchesTd>05/10/2022</LaunchesTd>
          <LaunchesTd>Used Falcon 9</LaunchesTd>
          <LaunchesTd>
            <StatusLaunches variant="success">SUCESSO</StatusLaunches>
          </LaunchesTd>
          <LaunchesTd>
            <img src={logoImg} alt="" width={"40px"} />
          </LaunchesTd>
        </LaunchesTr>

        <LaunchesTr>
          <LaunchesTd>179</LaunchesTd>
          <LaunchesTd>logo</LaunchesTd>
          <LaunchesTd>Starlink 3-3 (v1.6)</LaunchesTd>
          <LaunchesTd>07/09/2022</LaunchesTd>
          <LaunchesTd>Used Falcon 9</LaunchesTd>
          <LaunchesTd>
            <StatusLaunches variant="failed">FALHA</StatusLaunches>
          </LaunchesTd>
          <LaunchesTd>logo Youtube</LaunchesTd>
        </LaunchesTr>
      </LaunchesTbody>
    </LaunchesTable>
  );
}
