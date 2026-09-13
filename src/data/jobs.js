// Static job listing data. Two current openings, written for EightVo
// Solutions specifically (not copied verbatim from any source posting).
export const jobs = [
  {
    slug: 'site-reliability-engineer',
    title: 'Site Reliability Engineer — AI Products',
    department: 'Engineering',
    location: 'Toronto, ON (hybrid) or remote within Canada',
    type: 'Full-time',
    posted: 'Posted September 2026',
    summary:
      "Keep EightVo's AI-powered products reliable, secure, and fast as they grow — from MyCanJourney to the work behind it.",
    overview:
      "EightVo Solutions builds AI-powered applications and websites around real business expertise. We're looking for a Site Reliability Engineer to help build and operate the infrastructure behind our products as they move from active development toward production use by real people.\n\nThis is a hands-on role for someone who enjoys taking infrastructure from “it works” to dependable, observable, and easy to reason about — and who's comfortable being one of the first engineers to own reliability at a small, fast-moving company.",
    responsibilities: [
      "Design, operate, and improve reliable cloud infrastructure for EightVo's AI-powered applications and websites",
      'Build and maintain CI/CD pipelines, containerized deployments, and infrastructure automation',
      'Set up monitoring, alerting, logging, and incident-response practices that surface issues before customers do',
      'Diagnose performance, capacity, and reliability issues across application, infrastructure, and third-party integration layers (including AI/model APIs)',
      'Partner closely with product and engineering to translate reliability and scaling needs into practical infrastructure improvements',
      'Support the operational needs of MyCanJourney and future EightVo products as they move toward production',
      'Contribute to a pragmatic reliability culture: documentation, post-incident learning, and sensible engineering standards'
    ],
    minimumQualifications: [
      '3+ years of experience in site reliability, DevOps, infrastructure, or systems engineering',
      'Hands-on experience with a modern cloud platform (AWS, GCP, or Azure) and solid Linux administration',
      'Experience with CI/CD, containerization (Docker), and infrastructure-as-code',
      'Comfortable scripting and automating with Python, Bash, or similar',
      'A systematic approach to troubleshooting across application, network, and infrastructure layers',
      'Clear written and verbal communication, and comfort working closely with a small, cross-functional team'
    ],
    niceToHave: [
      'Experience operating infrastructure that serves AI/ML features or integrates with third-party model APIs',
      'Familiarity with observability tooling such as Prometheus, Grafana, or a hosted equivalent',
      'Experience with Vercel serverless/edge deployments alongside traditional cloud infrastructure',
      'Interest in, or experience with, startup-stage engineering, where you wear more than one hat'
    ]
  },
  {
    slug: 'senior-ai-engineer-full-stack',
    title: 'Senior AI Engineer — Full-Stack',
    department: 'Engineering',
    location: 'Toronto, ON (hybrid) or remote within Canada',
    type: 'Full-time',
    posted: 'Posted September 2026',
    summary:
      "Design, build, and ship the AI features at the core of EightVo's products — including the pathway insights and score explanations behind MyCanJourney.",
    overview:
      "We're looking for a senior, hands-on engineer to design, develop, and support the machine learning and AI-powered features across EightVo's products. You'll work closely with product owners and the business-domain experts we build alongside, turning their knowledge into reliable, explainable software — most immediately for MyCanJourney, our product in development for Canadian immigration guidance.",
    responsibilities: [
      'Translate business and product requirements — often developed alongside domain experts — into practical technical designs and working software',
      'Design, build, and deploy AI-powered features: retrieval-augmented generation, rules-based insight engines, and integrations with third-party model APIs',
      'Build Python-based services, data pipelines, and integrations that power personalized, explainable product experiences',
      'Deploy and operate AI/ML-backed workloads in the cloud, with attention to cost, latency, and reliability',
      'Implement testing, versioning, monitoring, and documentation practices for AI features in production',
      'Work closely with product owners, business/domain experts, and design to keep AI outputs accurate, explainable, and genuinely useful',
      'Provide technical guidance, code review, and mentorship as the engineering team grows'
    ],
    minimumQualifications: [
      '4+ years of experience in software development, applied ML/AI engineering, or a related role',
      'Strong hands-on experience with Python, plus comfort with SQL and modern JavaScript/React',
      'Experience building and shipping features backed by machine learning or generative AI in production',
      'Experience with cloud deployment (AWS, GCP, or Azure), CI/CD, and automated testing',
      'Ability to translate ambiguous business requirements — especially from non-technical domain experts — into clear technical specifications',
      'Strong communication skills and comfort working independently in a small team'
    ],
    niceToHave: [
      'Experience with retrieval-augmented generation, vector search, or agent-based systems',
      "Experience with a major LLM provider's API (OpenAI, Anthropic, or similar) in a production setting",
      'Familiarity with immigration, regulatory, or other rules-heavy domains',
      'Experience with Vercel/Node/Express-based deployments',
      'Docker, infrastructure-as-code, or MLOps experience'
    ]
  }
]

export function getJobBySlug(slug) {
  return jobs.find(job => job.slug === slug)
}
