const MOCK_SESSIONS = [
    {
        id: 4,
        assessment_id: 1,
        tenant_id: 1,
        candidate_id: null,
        candidate_name: "asdf",
        invite_token:
            "9ce5670e248ae64a1bb0f5eefd8edf8e8110e874f8e2086e31236abdb1cee78c",
        invite_url:
            "http://localhost:5173/interview/9ce5670e248ae64a1bb0f5eefd8edf8e8110e874f8e2086e31236abdb1cee78c",
        status: "pending",
        end_reason: null,
        started_at: null,
        ended_at: null,
        duration_seconds: null,
        created_at: "2026-08-15T11:07:31.221Z",
    },
    {
        id: 3,
        assessment_id: 1,
        tenant_id: 1,
        candidate_id: null,
        candidate_name: "Santoso",
        invite_token:
            "3ba508450fb70bc2a2a70e3f34592358b09b595ba29c72c53b3ee8c7177ff232",
        invite_url:
            "http://localhost:5173/interview/3ba508450fb70bc2a2a70e3f34592358b09b595ba29c72c53b3ee8c7177ff232",
        status: "ended",
        end_reason: "error",
        started_at: "2026-08-15T08:12:56.497Z",
        ended_at: "2026-08-15T08:13:04.650Z",
        duration_seconds: 8,
        created_at: "2026-08-15T08:12:32.404Z",
    },
    {
        id: 2,
        assessment_id: 1,
        tenant_id: 1,
        candidate_id: null,
        candidate_name: "Santoso",
        invite_token:
            "0863c7519eb928344554fc0da5626bbb8dfc91cd7cde76794c5127d459a10cde",
        invite_url:
            "http://localhost:5173/interview/0863c7519eb928344554fc0da5626bbb8dfc91cd7cde76794c5127d459a10cde",
        status: "ended",
        end_reason: "error",
        started_at: "2026-08-15T06:08:50.527Z",
        ended_at: "2026-08-15T06:08:58.799Z",
        duration_seconds: 8,
        created_at: "2026-08-15T05:57:59.227Z",
    },
    {
        id: 1,
        assessment_id: 1,
        tenant_id: 1,
        candidate_id: null,
        candidate_name: "Budi",
        invite_token:
            "ecd3884b0301dc9bbbc5c0214f9bfec98dd8848b8cffeca37e59865514507e49",
        invite_url:
            "http://localhost:5173/interview/ecd3884b0301dc9bbbc5c0214f9bfec98dd8848b8cffeca37e59865514507e49",
        status: "ended",
        end_reason: "error",
        started_at: "2026-08-15T09:22:09.262Z",
        ended_at: "2026-08-15T09:22:17.292Z",
        duration_seconds: 8,
        created_at: "2026-08-15T05:55:18.587Z",
    },
];

export default MOCK_SESSIONS;
