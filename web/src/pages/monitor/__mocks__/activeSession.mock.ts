const MOCK_ACTIVE_SESSION = {
  id: 14,
  assessment_id: 1,
  tenant_id: 1,
  candidate_id: null,
  candidate_name: "5",
  invite_token:
    "2c68106b38388a705876d6b8d344a0df474d8a9c1b57a78d443981cc3095e7ec",
  invite_url:
    "http://localhost:5173/interview/2c68106b38388a705876d6b8d344a0df474d8a9c1b57a78d443981cc3095e7ec",
  status: "ended",
  end_reason: "manual_candidate",
  started_at: "2026-08-16T04:08:42.388Z",
  ended_at: "2026-08-16T04:08:54.362Z",
  duration_seconds: 11,
  created_at: "2026-08-16T04:08:31.081Z",
  assessment: {
    id: 1,
    name: "Junior Frontend Engineer",
    time_limit_min: 30,
  },
};

export default MOCK_ACTIVE_SESSION;
