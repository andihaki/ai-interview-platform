const MOCK_ASSESSMENT_POST = {
    name: "node",
    time_limit_min: 45,
    language: "en",
    assessment_skills_attributes: [
        {
            skill_label: "Node.js / Backend Development",
            is_custom: false,
            expected_level: 3,
            scope_include:
                "REST API design, Express/Fastify, async patterns, middleware, error handling, background jobs",
            l1_anchor:
                "Implements endpoints from spec with guidance. Understands request/response cycle and basic async (async/await).",
            l2_anchor:
                "Builds CRUD APIs independently. Handles validation, error middleware, and basic auth patterns.",
            l3_anchor:
                "Designs service boundaries and data flow. Implements background jobs, caching strategies, and structured logging.",
            l4_anchor:
                "Defines API standards across services. Leads decisions on runtime patterns, observability, and service resilience.",
            l5_anchor:
                "Owns backend platform strategy. Drives decisions on runtime selection, distributed system patterns, and org-wide reliability targets.",
            display_order: 0,
        },
    ],
};

export default MOCK_ASSESSMENT_POST;
