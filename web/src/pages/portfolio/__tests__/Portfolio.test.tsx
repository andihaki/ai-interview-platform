import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import { sessionsApi } from "@/services/sessions";
import { vacanciesApi } from "@/services/vacancies";
import MockWebSocket from "@/testing/helpers/mockWebSocket";
import MOCK_ACTIVE_SESSION from "@/pages/monitor/__mocks__/activeSession.mock";
import PortfolioPage from "../PortfolioPage";
import MOCK_PORTFOLIO from "../__mocks__/portfolio.mock";

vi.mock("@/services/sessions", () => ({
  sessionsApi: {
    get: vi.fn(),
    getPortfolio: vi.fn(),
  },
}));
vi.mock("@/services/vacancies", () => ({
  vacanciesApi: {
    list: vi.fn(),
  },
}));

describe("Portfolio Page", () => {
  beforeAll(() => {
    vi.mocked(sessionsApi.getPortfolio).mockResolvedValue({
      data: MOCK_PORTFOLIO,
    } as never);
    vi.mocked(sessionsApi.get).mockResolvedValue({
      data: { session: MOCK_ACTIVE_SESSION },
    } as never);
    vi.mocked(vacanciesApi.list).mockResolvedValue({
      data: [],
    } as never);
  });

  const renderComponent = () => {
    return render(
      <MemoryRouter initialEntries={["/assessments/1/sessions/14/portfolio"]}>
        <Routes>
          <Route
            path="/assessments/:id/sessions/:sessionId/portfolio"
            element={<PortfolioPage />}
          />
          <Route path="/assessments/:id/invite" element={<>Dummy Invite</>} />
        </Routes>
      </MemoryRouter>,
    );
  };

  it("Porfolio error message", async () => {
    vi.stubGlobal("WebSocket", MockWebSocket);

    renderComponent();

    expect(
      await screen.findByText(/portfolio generation failed/i),
    ).toBeInTheDocument();
  });
});
