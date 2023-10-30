import { createContext } from "react";

interface Launches {
  id: string;
  description: string;
  type: "success" | "failed";
  category: string;
  createdAt: string;
}

interface LaunchesContextType {
  launches: Launches[];
}

interface LaunchesProviderProps {
  children: ReactNode;
}

export const LaunchesContext = createContext({} as LaunchesContextType);

export function LaunchesProvider({ children }: LaunchesProviderProps) {
  const [launches, setLaunches] = useState<Launches[]>([]);

  async function loadLaunches() {
    // const response = await fetch("http://localhost:5174/Launches");
    const data = [
      {
        numbVoo: 180,
        logo: "url-logo",
        missao: "Starlink 4-27 (v1.5)",
        DataLanc: "05/10/2022",
        Foguete: "Used Falcol 9",
        Result: "success",
        video: "url-video",
      },
    ];

    setLaunches(data);
  }

  useEffect(() => {
    loadLaunches();
  }, []);

  return (
    <LaunchesContext.Provider value={{ launches }}>
      {children}
    </LaunchesContext.Provider>
  );
}
