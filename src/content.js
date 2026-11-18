export const experience = [
  {
    role: 'AI / Software Engineering Intern',
    org: 'Provation',
    where: 'Remote',
    dates: 'Jun - Sep 2026',
    points: [
      'Built a proof of concept for iPro v3 that turns clinician pre-op dictation into structured clinical notes, using Azure Whisper, FastAPI and DSPy.',
    ],
  },
  {
    role: 'AI Trainer',
    org: 'Handshake AI',
    where: 'Remote',
    dates: 'Nov 2025 - Jun 2026',
    points: [
      'Wrote and refined domain-specific prompts that improved model reasoning and reliability on tasks.',
    ],
  },
];

// Each pipeline is the project's real data flow. `loop` marks a stage the
// output is fed back into.
export const projects = [
  {
    name: 'Autonomous SWE Agent',
    stack: 'Python, Claude Code, pytest, GitHub API',
    summary:
      'Give it a repository and an issue number and it opens a pull request that fixes the issue with passing tests. It clones the repo into an isolated workspace, has Claude Code write the fix, runs the test suite and feeds failures back until the tests pass. Budget limits and no-progress detection stop runs that are going nowhere, and it can never merge on its own.',
    pipeline: ['GitHub issue', 'Claude Code', 'pytest', 'Pull request'],
    loop: { from: 2, to: 1, label: 'failures fed back' },
  },
  {
    name: 'AI Research Lab for Signal Discovery',
    stack: 'Python, Azure OpenAI, scikit-learn, FastAPI, SQLite',
    summary:
      'A multi-agent system that proposes trading hypotheses, tests them against financial time-series data and writes up what holds. LLM agents generate hypotheses and judge results, while a deterministic engine runs the backtests, so the conclusions rest on out-of-sample validation rather than the model’s opinion.',
    pipeline: ['Hypothesis agent', 'Backtest engine', 'Evaluation agent', 'Report'],
  },
  {
    name: 'RAG Study Assistant',
    stack: 'Python, FastAPI, React, FAISS, Azure OpenAI GPT-4, Docker',
    summary:
      'Upload your PDFs and ask questions about them. Semantic search over a FAISS index finds the relevant passages before GPT-4 answers, and streaming responses over SSE cut perceived latency by 60%. The backend runs in Docker on Railway with persistent storage for indices.',
    pipeline: ['Your PDFs', 'FAISS retrieval', 'GPT-4', 'Streamed answer'],
    link: { href: 'https://study-assistant-green.vercel.app', label: 'Try it' },
  },
  {
    name: 'Multimodal Product Classifier',
    stack: 'Python, PyTorch, DistilBERT, ResNet50, Weights & Biases',
    summary:
      'Categorizes Amazon product listings from both their text and their image. DistilBERT text embeddings and ResNet50 image features are fused in an MLP and compared against classical scikit-learn baselines, with experiments tracked in Weights & Biases.',
    pipeline: ['Text + image', 'BERT / ResNet', 'Fusion MLP', 'Category'],
    link: { href: 'https://github.com/JeffrinNadar/multimodal-product-classifier', label: 'Code' },
  },
];

export const alsoBuilt = [
  {
    name: 'Serverless stock portfolio alerts',
    stack: 'AWS Lambda, DynamoDB, SNS',
    summary: 'Watches live prices and sends daily portfolio summaries and alerts with no manual checking.',
  },
  {
    name: 'Pinyin lyrics app',
    stack: 'React, Flask, Spotify API',
    summary: 'Pulls Chinese song lyrics from Spotify and shows them with pinyin above each character, so you can learn Mandarin by singing along.',
  },
];

export const skills = [
  { group: 'ML & AI', items: 'PyTorch, scikit-learn, LangChain, DSPy, BERT, ResNet, RAG pipelines, LLM evaluation, prompt engineering' },
  { group: 'Languages', items: 'Python, C, C++, Java, JavaScript, TypeScript, SQL' },
  { group: 'Backend & cloud', items: 'FastAPI, Node.js, Express, Azure, AWS (Lambda, DynamoDB, SNS), Docker, PostgreSQL, FAISS' },
  { group: 'Frontend & tooling', items: 'React, Vite, Git, GitHub Actions, Linux, Claude Code' },
];
