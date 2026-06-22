// ============================================================
//  Raphos — Work taxonomy & content
//
//  Single source of truth for the Work section. Mirrors the old
//  WordPress structure: three category "parent" pages —
//    • Synera add-ins
//    • Grasshopper / Rhino plugins
//    • Websites (data-science products)
//  — each with individual child project pages.
//
//  Pages are generated from this data via dynamic routes:
//    /work/[category]            -> src/pages/work/[category]/index.astro
//    /work/[category]/[project]  -> src/pages/work/[category]/[project].astro
//
//  To edit copy, add a project, or add a category, change it here.
// ============================================================

export interface WorkLink {
  label: string;
  href: string;
  /** Short note shown next to the link (optional). */
  note?: string;
}

export interface BodySection {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
}

/** A placeholder for imagery to be supplied later. */
export interface ImageSlot {
  /** Describes what the final image should show (used as alt text too). */
  caption: string;
  /** Aspect ratio, e.g. "16 / 9", "4 / 3", "1 / 1". Defaults to 16 / 9. */
  ratio?: string;
}

export interface Project {
  slug: string;
  category: string;
  title: string;
  /** Small label above the title. */
  kicker: string;
  /** One-line hero summary. */
  tagline: string;
  /** Card / meta summary (kept short). */
  summary: string;
  tags: string[];
  /** External + reference links — rendered as normal dofollow links. */
  links: WorkLink[];
  /** Opening paragraph(s) under the hero. */
  intro: string[];
  /** Reserved imagery (hero + inline). First entry is treated as the hero. */
  images: ImageSlot[];
  sections: BodySection[];
  /** Short "at a glance" bullets. */
  highlights: string[];
}

export interface Category {
  slug: string;
  name: string;
  eyebrow: string;
  /** Page H1. */
  title: string;
  /** Hero lede. */
  lede: string;
  /** Intro paragraphs for the category page. */
  description: string[];
  /** External / reference links for the category. */
  links: WorkLink[];
  /** Hero image placeholder for the category. */
  image: ImageSlot;
  /** Ordered child project slugs. */
  projectSlugs: string[];
}

// ------------------------------------------------------------
//  Categories
// ------------------------------------------------------------

export const categories: Category[] = [
  {
    slug: 'synera',
    name: 'Synera Add-ins',
    eyebrow: 'Synera · Partnership',
    title: 'Add-ins for the Synera platform.',
    lede:
      'A suite of Raphos add-ins that bring physics, optimization and connectivity to Synera — the visual-programming and automation platform for engineering.',
    description: [
      'Synera (formerly ELISE) is a low-code, visual-programming platform that lets engineering teams capture their know-how as automated workflows — connecting CAD, CAE, PLM and data into a single, repeatable graph. Raphos builds and maintains a family of add-ins that extend Synera with capabilities our clients asked for: a fast physics solver, productivity tools, an optimizer, and connectors to external simulation and office software.',
      'Each add-in is developed in close partnership with the Synera team and tuned for production use — robust, fast and engineered to slot into real automation pipelines rather than one-off scripts. Together they let designers go from geometry to a validated, optimized result without leaving the Synera canvas.',
    ],
    links: [
      { label: 'Synera platform', href: 'https://www.synera.io', note: 'synera.io' },
    ],
    image: {
      caption:
        'A Synera visual-programming canvas showing a Raphos add-in node wired into an engineering workflow',
      ratio: '16 / 9',
    },
    projectSlugs: [
      'raphos-physics',
      'raphos-optimizer',
      'raphos-tools',
      'simscale-connector',
      'ms-office-connector',
    ],
  },
  {
    slug: 'grasshopper-rhino',
    name: 'Grasshopper / Rhino Plugins',
    eyebrow: 'Rhino · Grasshopper',
    title: 'Plugins for Rhino & Grasshopper.',
    lede:
      'Scientific tools for computational designers — machine learning, optimization, tensor fields and advanced meshing, packaged as plugins used by designers worldwide.',
    description: [
      'Grasshopper, the visual-programming environment for Rhino, is where a huge amount of computational design happens. Raphos builds plugins that put research-grade methods — machine learning, non-linear optimization, vector-field manipulation and C++-powered geometry — directly into the designer’s hands, with components that behave like native Grasshopper nodes.',
      'Our plugins are distributed free on Food4Rhino and have been downloaded and used by designers, engineers and researchers around the world. They are built on optimized, battle-tested libraries and have featured in peer-reviewed research and academic workshops.',
    ],
    links: [
      { label: 'Rhinoceros 3D', href: 'https://www.rhino3d.com', note: 'rhino3d.com' },
      { label: 'Food4Rhino', href: 'https://www.food4rhino.com', note: 'plugin marketplace' },
    ],
    image: {
      caption:
        'A Grasshopper definition driving a Rhino model, with Raphos plugin components in the canvas',
      ratio: '16 / 9',
    },
    projectSlugs: ['dodo', 'capybara'],
  },
  {
    slug: 'websites',
    name: 'Websites & Products',
    eyebrow: 'Data-science products',
    title: 'Data-science products we build and run.',
    lede:
      'Independent web products where we own the full stack — from the data and the models to the interface our users see.',
    description: [
      'Alongside client work, Raphos designs, builds and operates its own data-science web products. They are where we put our research into production at scale: natural-language processing, knowledge graphs, embeddings, econometric modelling and large-scale data engineering, all wrapped in fast, usable interfaces.',
      'Each product below is live and independently accessible. They share a common DNA — taking a large, messy dataset and turning it into something genuinely useful — and they double as a public showcase of how we think about data, modelling and product design.',
    ],
    links: [],
    image: {
      caption:
        'A montage of the Raphos web products on desktop and mobile screens',
      ratio: '16 / 9',
    },
    projectSlugs: [
      'babelotheca',
      'citydatalab',
      'ariadnes-gallery',
      'property-analytics-london',
    ],
  },
];

// ------------------------------------------------------------
//  Projects
// ------------------------------------------------------------

export const projects: Project[] = [
  // ---------------- Synera ----------------
  {
    slug: 'raphos-physics',
    category: 'synera',
    title: 'Raphos Physics',
    kicker: 'Synera add-in · Solver',
    tagline:
      'A fast, robust spring-particle and dynamic-relaxation solver, built natively into Synera.',
    summary:
      'Dynamic-relaxation / spring-particle physics solver for form-finding and simulation inside Synera.',
    tags: ['Dynamic relaxation', 'Form-finding', 'Spring-particle', 'Simulation'],
    links: [
      { label: 'Synera platform', href: 'https://www.synera.io' },
    ],
    intro: [
      'Raphos Physics is a particle-spring physics engine that runs directly inside Synera. It is built for the kind of form-finding and equilibrium problems that come up constantly in engineering design — tension structures, gridshells, cable nets, membranes and relaxed meshes — where you need to find the shape that a system naturally settles into under load.',
      'Where many solvers are either fast-but-fragile or accurate-but-slow, Raphos Physics is engineered to be both: a stable integrator and well-tuned constraint handling let it converge quickly on large systems without blowing up, so it stays interactive even on demanding models.',
    ],
    images: [
      {
        caption:
          'A tensile membrane being form-found in real time by the Raphos Physics solver in Synera',
        ratio: '16 / 9',
      },
      {
        caption: 'Before / after of a flat mesh relaxed into a minimal surface',
        ratio: '4 / 3',
      },
    ],
    sections: [
      {
        heading: 'What it does',
        paragraphs: [
          'The solver models geometry as a network of particles connected by springs and constraints. You define goals — target lengths, anchors, loads, areas, planarity, smoothing — and the engine iterates the system towards equilibrium. The result is a physically meaningful shape rather than an arbitrary one.',
        ],
        list: [
          'Form-finding of tension and compression structures: membranes, cable nets, gridshells and shells.',
          'Mesh relaxation and smoothing while honouring fixed points and boundary conditions.',
          'Goal-based modelling: combine length, anchor, load, planarity and smoothing goals with individual weights.',
          'Interactive convergence that stays responsive on large meshes.',
        ],
      },
      {
        heading: 'Built for production workflows',
        paragraphs: [
          'Because it lives inside Synera, the solver is not an island. Its results flow straight into the rest of an automated workflow — geometry generation upstream, analysis, optimization and documentation downstream — so form-finding becomes one repeatable step in a larger engineering pipeline rather than a manual detour.',
          'It is built in close partnership with the Synera team and tuned for robustness: sensible defaults, predictable behaviour and graceful handling of the awkward, under-constrained cases that appear in real projects.',
        ],
      },
    ],
    highlights: [
      'Stable, fast spring-particle / dynamic-relaxation integration',
      'Goal-based form-finding with weighted constraints',
      'Native Synera add-in — composable with full workflows',
      'Interactive on large meshes',
    ],
  },
  {
    slug: 'raphos-optimizer',
    category: 'synera',
    title: 'Raphos Optimizer',
    kicker: 'Synera add-in · Optimization',
    tagline:
      'Single- and multi-objective optimization for Synera workflows — from gradient methods to metaheuristics.',
    summary:
      'Optimization engine for Synera: gradient-based and heuristic solvers for engineering design problems.',
    tags: ['Optimization', 'Genetic algorithms', 'Gradient descent', 'Multi-objective'],
    links: [{ label: 'Synera platform', href: 'https://www.synera.io' }],
    intro: [
      'Raphos Optimizer turns a Synera workflow into a search problem you can solve automatically. Expose a few inputs, define one or more objectives and any constraints, and the optimizer drives the workflow towards better designs — exploring the design space far more thoroughly than a human tweaking sliders ever could.',
      'It carries across the optimization know-how Raphos uses in its consulting work: the right algorithm for the shape of the problem, robust handling of constraints, and results you can trust.',
    ],
    images: [
      {
        caption:
          'A convergence plot and a Pareto front produced by Raphos Optimizer over design iterations',
        ratio: '16 / 9',
      },
    ],
    sections: [
      {
        heading: 'Algorithms for the problem you actually have',
        paragraphs: [
          'Not every problem wants the same solver. Raphos Optimizer offers a range of strategies so the method fits the problem rather than the other way round.',
        ],
        list: [
          'Gradient and stochastic-gradient descent for smooth, differentiable objectives.',
          'Genetic algorithms and simulated annealing for rugged, discrete or non-differentiable design spaces.',
          'Multi-objective optimization that returns a Pareto front of trade-offs instead of a single answer.',
          'Constraint handling so solutions stay feasible and buildable.',
        ],
      },
      {
        heading: 'Optimization as a workflow step',
        paragraphs: [
          'Because it runs inside Synera, the optimizer can drive a complete pipeline: generate geometry, evaluate it (in Synera or via a connected solver such as SimScale), score it and iterate — all without leaving the canvas. That makes it straightforward to optimize against real engineering metrics like mass, utilisation, stiffness or flow performance.',
        ],
      },
    ],
    highlights: [
      'Gradient, stochastic and metaheuristic solvers',
      'Single- and multi-objective (Pareto) optimization',
      'Constraint-aware, buildable results',
      'Closes the loop with geometry and simulation in Synera',
    ],
  },
  {
    slug: 'raphos-tools',
    category: 'synera',
    title: 'Raphos Tools',
    kicker: 'Synera add-in · Toolkit',
    tagline:
      'A toolkit of high-performance utilities that fill the gaps in everyday Synera workflows.',
    summary:
      'Productivity and geometry utilities for Synera — the components engineers reach for daily.',
    tags: ['Geometry', 'Data', 'Utilities', 'Productivity'],
    links: [{ label: 'Synera platform', href: 'https://www.synera.io' }],
    intro: [
      'Raphos Tools is a collection of well-engineered utility components for Synera — the small but essential operations that workflows lean on constantly: geometry helpers, data manipulation, conversions and analysis nodes that are faster and more capable than rolling them by hand.',
      'It is the quiet workhorse of the suite: nothing flashy, but the components that make every other part of a workflow cleaner, quicker and easier to maintain.',
    ],
    images: [
      {
        caption: 'A selection of Raphos Tools components placed on the Synera canvas',
        ratio: '16 / 9',
      },
    ],
    sections: [
      {
        heading: 'What is inside',
        paragraphs: [
          'The toolkit grows with the problems our clients meet, but the core covers the operations that show up in almost every project.',
        ],
        list: [
          'Geometry utilities: robust conversions, measurements and transformations.',
          'Data tools: restructuring, mapping and cleaning of workflow data.',
          'Analysis helpers that expose useful metrics from geometry and meshes.',
          'Performance-minded implementations that keep large workflows responsive.',
        ],
      },
    ],
    highlights: [
      'Everyday geometry and data utilities',
      'Faster than hand-built equivalents',
      'Keeps large Synera workflows clean and maintainable',
    ],
  },
  {
    slug: 'simscale-connector',
    category: 'synera',
    title: 'SimScale Connector',
    kicker: 'Synera add-in · Connector',
    tagline:
      'Drive cloud CFD and FEA from Synera — push geometry to SimScale and pull results back automatically.',
    summary:
      'Connector linking Synera workflows to SimScale’s cloud simulation (CFD / FEA).',
    tags: ['CFD', 'FEA', 'Cloud simulation', 'Automation'],
    links: [
      { label: 'Synera platform', href: 'https://www.synera.io' },
      { label: 'SimScale', href: 'https://www.simscale.com', note: 'cloud simulation' },
    ],
    intro: [
      'The SimScale Connector bridges Synera and SimScale’s cloud-native simulation platform. From inside a Synera workflow you can set up a simulation, send geometry and boundary conditions to SimScale, run it on the cloud and bring the results straight back — all programmatically.',
      'That closes one of the most valuable loops in engineering automation: generate a design, simulate it properly, and feed the numbers back into optimization or decision-making, with no manual export-import in between.',
    ],
    images: [
      {
        caption:
          'A CFD result from SimScale being read back into Synera and visualised on the source geometry',
        ratio: '16 / 9',
      },
    ],
    sections: [
      {
        heading: 'Simulation in the loop',
        paragraphs: [
          'Manually moving geometry into a simulation tool, meshing, running and exporting is exactly the kind of repetitive, error-prone work automation should remove. The connector makes a SimScale analysis just another node in a Synera graph.',
        ],
        list: [
          'Push parametric geometry and boundary conditions from Synera to SimScale.',
          'Launch and monitor cloud CFD / FEA runs without leaving the workflow.',
          'Retrieve results and map them back onto the originating geometry.',
          'Use those results to drive Raphos Optimizer for simulation-in-the-loop design.',
        ],
      },
    ],
    highlights: [
      'Synera ⇄ SimScale, fully automated',
      'Cloud CFD / FEA with no manual export-import',
      'Feeds simulation results into optimization',
    ],
  },
  {
    slug: 'ms-office-connector',
    category: 'synera',
    title: 'MS Office Connector',
    kicker: 'Synera add-in · Connector',
    tagline:
      'Read and write Excel, Word and Office documents directly from Synera workflows.',
    summary:
      'Connector for reading and writing Microsoft Office files (Excel, Word) from Synera.',
    tags: ['Excel', 'Office', 'Reporting', 'Data exchange'],
    links: [{ label: 'Synera platform', href: 'https://www.synera.io' }],
    intro: [
      'A great deal of engineering data still lives in spreadsheets and documents. The MS Office Connector lets Synera workflows speak Office fluently — reading inputs from Excel, writing results back, and generating documents — so the data that drives and comes out of a workflow stays connected to the tools the rest of the business uses.',
      'It removes the copy-paste boundary between automated engineering workflows and the spreadsheets and reports people actually share.',
    ],
    images: [
      {
        caption:
          'An Excel sheet feeding parameters into a Synera workflow, with results written back automatically',
        ratio: '16 / 9',
      },
    ],
    sections: [
      {
        heading: 'Office in, Office out',
        paragraphs: [
          'The connector treats Office files as first-class data sources and sinks within a workflow.',
        ],
        list: [
          'Read parameters, load cases and tables from Excel into a workflow.',
          'Write results, schedules and summaries back to spreadsheets.',
          'Generate documents for reporting and hand-off.',
          'Keep engineering automation in sync with everyday business tooling.',
        ],
      },
    ],
    highlights: [
      'Two-way Excel / Office integration',
      'Automated reporting and data hand-off',
      'Bridges engineering workflows and business tools',
    ],
  },

  // ---------------- Grasshopper / Rhino ----------------
  {
    slug: 'dodo',
    category: 'grasshopper-rhino',
    title: 'Dodo',
    kicker: 'Rhino / Grasshopper plugin · Free',
    tagline:
      'A free collection of scientific tools for computational designers — machine learning, optimization, tensor fields and more.',
    summary:
      'Free Grasshopper plugin: ML, non-linear optimization, tensor-field manipulation, isosurfaces and linear algebra.',
    tags: ['Machine learning', 'Optimization', 'Tensor fields', 'Isosurfaces', 'Linear algebra'],
    links: [
      { label: 'Dodo on Food4Rhino', href: 'https://www.food4rhino.com/en/app/dodo' },
      { label: 'Grasshopper', href: 'https://www.grasshopper3d.com' },
    ],
    intro: [
      'Dodo is a free Grasshopper plugin that gathers a broad set of scientific tools under one roof. It grew out of a simple frustration: the methods computational designers need — neural networks, optimization, tensor fields, isosurfaces, linear algebra — were scattered, hard to use, or missing from Grasshopper entirely. Dodo brings them together as native components.',
      'It has been downloaded and used by designers, students and researchers around the world, and remains one of the go-to plugins for putting machine learning and advanced maths inside a Grasshopper definition.',
    ],
    images: [
      {
        caption:
          'A Grasshopper definition using Dodo components — a neural network and a tensor field driving geometry',
        ratio: '16 / 9',
      },
      {
        caption: 'A tensor field visualised and used to orient elements across a surface',
        ratio: '4 / 3',
      },
    ],
    sections: [
      {
        heading: 'What is inside',
        paragraphs: [
          'Dodo is intentionally broad. It is less a single tool than a scientific toolbox for the computational designer.',
        ],
        list: [
          'Machine learning: neural networks and learning tools that run inside Grasshopper.',
          'Non-linear optimization: solvers for design problems that resist closed-form answers.',
          'Tensor-field manipulation: generate, blend and follow direction fields across geometry.',
          'Isosurfaces via marching tetrahedra for clean extraction of implicit geometry.',
          'Linear algebra: the matrix and vector operations that underpin everything else.',
        ],
      },
      {
        heading: 'Free and widely used',
        paragraphs: [
          'Dodo is free to download on Food4Rhino. It is used in practice and in teaching, and it pairs naturally with our other geometry work — for example using Capybara for meshing and Dodo for the optimization or learning step.',
        ],
      },
    ],
    highlights: [
      'Free on Food4Rhino',
      'Neural networks and ML inside Grasshopper',
      'Non-linear optimization and tensor fields',
      'Isosurfaces and linear-algebra toolkit',
    ],
  },
  {
    slug: 'capybara',
    category: 'grasshopper-rhino',
    title: 'Capybara',
    kicker: 'Rhino / Grasshopper plugin · IASS 2018 @ MIT',
    tagline:
      'Advanced mesh editing and analysis built on optimized C++ libraries — including quad remeshing aligned to stress and curvature fields.',
    summary:
      'Grasshopper plugin for advanced meshing built on CGAL and libigl; quad remeshing from conjugated vector fields.',
    tags: ['CGAL', 'libigl', 'Quad remeshing', 'Vector fields', 'C++'],
    links: [
      { label: 'Capybara on Food4Rhino', href: 'https://www.food4rhino.com/en/app/capybara' },
      { label: 'CGAL', href: 'https://www.cgal.org', note: 'computational geometry library' },
      { label: 'libigl', href: 'https://libigl.github.io', note: 'geometry-processing library' },
    ],
    intro: [
      'Capybara brings research-grade mesh processing to Grasshopper. It is built on top of optimized, well-respected C++ libraries — CGAL and libigl — so designers get the speed and numerical robustness of state-of-the-art geometry code behind familiar Grasshopper components.',
      'Its headline capability is field-aligned quad remeshing: Capybara can re-mesh any triangle mesh into a clean, quad-only mesh by integrating conjugated stress- and curvature-aligned vector fields — turning an arbitrary surface into one rationalised along its principal directions.',
    ],
    images: [
      {
        caption:
          'A triangle mesh remeshed into a quad-only mesh aligned to its curvature field, shown side by side',
        ratio: '16 / 9',
      },
      {
        caption: 'A stress-aligned vector field integrated across a doubly-curved surface',
        ratio: '4 / 3',
      },
    ],
    sections: [
      {
        heading: 'Field-aligned quad remeshing',
        paragraphs: [
          'Triangle meshes are easy to produce but awkward to build from. Quad meshes aligned to a surface’s natural directions are far more useful for fabrication, panelling and structural layout. Capybara computes conjugated vector fields — from curvature, from stress, or blended — and integrates them into a quad-dominant mesh that follows those directions.',
        ],
        list: [
          'Remesh any tri-mesh into a quad-only mesh.',
          'Align the result to stress fields, curvature fields, or a user-weighted blend.',
          'Advanced mesh editing and analysis built on CGAL and libigl.',
          'Robust, optimized C++ under familiar Grasshopper components.',
        ],
      },
      {
        heading: 'Presented at IASS 2018, MIT',
        paragraphs: [
          'Capybara’s methods were presented at the IASS Symposium 2018 at MIT — part of Raphos’ ongoing engagement with the computational-geometry and shell-structures research community. It pairs well with Dodo, which adds the optimization and machine-learning side of the same toolkit.',
        ],
      },
    ],
    highlights: [
      'Quad-only remeshing from any triangle mesh',
      'Alignment to stress and curvature vector fields',
      'Built on CGAL and libigl',
      'Presented at IASS 2018 @ MIT',
    ],
  },

  // ---------------- Websites ----------------
  {
    slug: 'babelotheca',
    category: 'websites',
    title: 'Babelotheca',
    kicker: 'Language · Reading · NLP',
    tagline:
      'Read the world’s classics in two languages at once — aligned sentence by sentence, with tap-to-explain grammar and idiom.',
    summary:
      'Bilingual aligned reading: classics side by side in two languages, with grammar help and BYO-PDF conversion.',
    tags: ['NLP', 'Sentence alignment', 'Web', 'EPUB / PDF'],
    links: [{ label: 'Visit Babelotheca', href: 'https://babelotheca.com' }],
    intro: [
      'Babelotheca is a bilingual reading platform for language learners. It presents the world’s great books in two languages at once — aligned sentence by sentence, side by side — so you can read something you genuinely want to read while never losing the thread in your target language.',
      'Tap any sentence for grammar and idiom explanations, and bring your own PDF to get a bilingual version back in seconds. It turns real literature into comprehensible input, which is how people actually acquire a language.',
    ],
    images: [
      {
        caption:
          'The Babelotheca reader showing a classic novel aligned sentence-by-sentence in two languages',
        ratio: '16 / 9',
      },
      {
        caption: 'Tap-to-explain grammar and idiom popover on a single sentence',
        ratio: '4 / 3',
      },
    ],
    sections: [
      {
        heading: 'How it works',
        paragraphs: [
          'Behind the simple reading experience is a natural-language-processing pipeline that aligns two language versions of a text at the sentence level, handling the fact that translations rarely map one-to-one. The result is a clean parallel text you can read fluidly.',
        ],
        list: [
          'Sentence-level alignment of source and translated text.',
          'Tap-to-explain grammar and idiom on demand.',
          'Bring your own PDF and get a bilingual version back in seconds.',
          'Built around comprehensible input — read real books, not exercises.',
        ],
      },
    ],
    highlights: [
      'Classics aligned sentence-by-sentence in two languages',
      'Tap-to-explain grammar and idiom',
      'BYO-PDF → bilingual in seconds',
      'NLP-powered alignment',
    ],
  },
  {
    slug: 'citydatalab',
    category: 'websites',
    title: 'CityDataLab',
    kicker: 'Real estate · Econometrics',
    tagline:
      'Hedonic factor models that separate genuine price growth from changes in what is being sold.',
    summary:
      'Hedonic models isolating the true return on floor area, freehold, energy rating and location across major cities.',
    tags: ['Hedonic models', 'Regression', 'Open data', 'Econometrics'],
    links: [{ label: 'Visit CityDataLab', href: 'https://citydatalab.com' }],
    intro: [
      'CityDataLab applies econometrics to the property market. Headline price indices are misleading because the mix of what sells changes over time — a market can look like it is rising simply because larger or better homes happened to trade. CityDataLab’s hedonic factor models strip that out.',
      'By modelling price as a function of a property’s attributes, it isolates the true, like-for-like return on each characteristic — floor area, freehold versus leasehold, energy rating and location — across London, New York, Paris and more.',
    ],
    images: [
      {
        caption:
          'A CityDataLab dashboard showing hedonic price factors decomposed across a city',
        ratio: '16 / 9',
      },
    ],
    sections: [
      {
        heading: 'Genuine growth, not composition',
        paragraphs: [
          'The core idea is to separate price growth that is real from price growth that is just a change in composition. Hedonic regression does exactly this, and CityDataLab makes the results legible across cities and time.',
        ],
        list: [
          'Hedonic regression on large open-property datasets.',
          'Like-for-like return on floor area, tenure, energy rating and location.',
          'Cross-city coverage — London, New York, Paris and beyond.',
          'A clear separation of true growth from changes in the mix of sales.',
        ],
      },
    ],
    highlights: [
      'Hedonic factor models for real estate',
      'Isolates true return on each property attribute',
      'Multi-city coverage',
      'Built on large open datasets',
    ],
  },
  {
    slug: 'ariadnes-gallery',
    category: 'websites',
    title: "Ariadne's Gallery",
    kicker: 'Art · Knowledge graphs',
    tagline:
      'Art exploration without dead ends: 116,000+ works connected into a living knowledge graph.',
    summary:
      'A knowledge graph of 116,000+ artworks with a “Stendhal Score” rating each piece across ten emotional dimensions.',
    tags: ['Knowledge graph', 'Embeddings', 'Search', 'Recommendation'],
    links: [{ label: "Visit Ariadne's Gallery", href: 'https://ariadnesgallery.com' }],
    intro: [
      'Ariadne’s Gallery is a new way to explore art. Instead of static galleries and dead-end pages, it connects more than 116,000 works into a living knowledge graph — so every piece is a doorway to related artists, movements, themes and moods.',
      'Its signature feature is the “Stendhal Score”, which rates every work across ten emotional dimensions, letting you search and wander art by how it feels rather than only by who made it or when.',
    ],
    images: [
      {
        caption:
          'The Ariadne’s Gallery knowledge graph linking artworks, with the Stendhal Score on a selected piece',
        ratio: '16 / 9',
      },
      {
        caption: 'Search-by-feeling interface using the ten emotional dimensions',
        ratio: '4 / 3',
      },
    ],
    sections: [
      {
        heading: 'A living graph of art',
        paragraphs: [
          'Embeddings and a knowledge graph turn a flat catalogue into something you can explore by association. Follow a thread from one work to the next and you never hit a dead end.',
        ],
        list: [
          '116,000+ works connected into a single knowledge graph.',
          'Embeddings that surface genuinely related pieces.',
          'The “Stendhal Score”: ten emotional dimensions per work.',
          'Search by how art feels, not just by metadata.',
        ],
      },
    ],
    highlights: [
      '116,000+ works in one knowledge graph',
      'Stendhal Score across ten emotional dimensions',
      'Embedding-based related-work discovery',
      'Explore art by feeling',
    ],
  },
  {
    slug: 'property-analytics-london',
    category: 'websites',
    title: 'Property Analytics London',
    kicker: 'Real estate · Quant',
    tagline:
      'Cross-sectional factor analysis that identifies the uncorrelated factors driving the property market.',
    summary:
      'Factor analysis of the London property market, surfacing the independent drivers behind market moves.',
    tags: ['Factor analysis', 'Time series', 'Quant', 'Real estate'],
    links: [
      { label: 'Visit Property Analytics London', href: 'https://www.propertyanalytics.london' },
    ],
    intro: [
      'Property Analytics London applies quantitative factor analysis to the property market. Markets move for many reasons at once; factor analysis decomposes those movements into a smaller set of uncorrelated factors, each of which can be understood and tracked on its own.',
      'The result is a clearer picture of what is actually driving prices — and a more honest basis for understanding risk and return than a single headline index.',
    ],
    images: [
      {
        caption:
          'A factor-analysis view of the property market with uncorrelated factors plotted over time',
        ratio: '16 / 9',
      },
    ],
    sections: [
      {
        heading: 'The factors behind the moves',
        paragraphs: [
          'Cross-sectional factor analysis finds the independent dimensions along which the market really varies, separating distinct drivers that a simple index blends together.',
        ],
        list: [
          'Cross-sectional factor analysis of the property market.',
          'Identification of uncorrelated factors behind market moves.',
          'Time-series tracking of each factor.',
          'A quantitative lens on property risk and return.',
        ],
      },
    ],
    highlights: [
      'Factor analysis of the property market',
      'Uncorrelated drivers, separated and tracked',
      'Time-series factor monitoring',
      'A quant approach to real estate',
    ],
  },
];

// ------------------------------------------------------------
//  Helpers
// ------------------------------------------------------------

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function projectsInCategory(categorySlug: string): Project[] {
  const cat = getCategory(categorySlug);
  if (!cat) return [];
  // Preserve the category's declared order.
  return cat.projectSlugs
    .map((s) => getProject(s))
    .filter((p): p is Project => Boolean(p));
}

/** Sibling projects in the same category, excluding the given slug. */
export function siblingProjects(project: Project): Project[] {
  return projectsInCategory(project.category).filter((p) => p.slug !== project.slug);
}
