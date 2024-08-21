import { BrowserRouter } from "react-router-dom";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      {children} {/* set up the dev tool */}
    </BrowserRouter>
  );
}
