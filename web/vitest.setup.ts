import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

class ResizeObserverStub {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
}

globalThis.ResizeObserver = ResizeObserverStub;
