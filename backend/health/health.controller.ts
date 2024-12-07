import { api } from "encore.dev/api"

interface HealthRequest {
}

interface HealthResponse {
}

export const health = api(
    { method: "GET", path: "/health", expose: true },
    async (req: HealthRequest): Promise<HealthResponse> => {
        return {};
    }
);