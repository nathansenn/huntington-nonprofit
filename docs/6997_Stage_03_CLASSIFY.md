# STAGE 3: CLASSIFY — COMPLETE TECHNICAL SPECIFICATION

## What Kind of Problem Is This?

### From The Pattern of Mind — By Nathan Senn, Dataloft LLC — February 2026

---

*"A surgeon doesn't use the same procedure for a heart transplant and an*
*appendectomy. A builder doesn't use the same technique for a skyscraper*
*and a garden shed. A thinker must not use the same reasoning approach for*
*a factual lookup and a system design problem."*

---

## TABLE OF CONTENTS

**Section 1:** The Problem Type Taxonomy (8 Types)
**Section 2:** Multi-Type Problems & Type Interaction
**Section 3:** Depth Determination & Stage Routing
**Section 4:** Domain Classification & Risk Assessment
**Section 5:** Worked Examples, Anti-Patterns & Output Specification

---

## STAGE OVERVIEW

CLASSIFY is Stage 3 of 11. It receives the **WorkPlan** from Stage 2
(DECOMPOSE) and produces a **ProblemProfile** — a classification of
what kind of problem this is, what reasoning approach to apply, how
deep the processing needs to go, and which stages to engage.

This stage is the routing layer of the cognitive architecture. Just as
a hospital's triage determines whether a patient goes to the ER, the
cardiology ward, or the waiting room, CLASSIFY determines how the
cognitive system allocates its processing power.

**The core insight:** Different problem types require fundamentally
different reasoning approaches. Applying the wrong approach produces
wrong answers even with correct logic. If you apply procedural thinking
to an analytical problem, you get a recipe where you needed a proof. If
you apply factual retrieval to a synthetic problem, you get a Wikipedia
article where you needed an architecture.

Current AI systems don't classify. They receive a question and immediately
begin generating tokens. The reasoning approach is determined by pattern
matching — whatever approach was most common in training data for similar-
looking questions. This means a novel system design question gets answered
with the same cognitive approach as a FAQ lookup. The result: shallow
answers to deep questions, over-complicated answers to simple questions.

**Input:** WorkPlan (from Stage 2)
**Output:** ProblemProfile (to Stage 4)

---

## DATA FLOW POSITION

```
Stage 2              Stage 3              Stage 4
DECOMPOSE  ──→      CLASSIFY    ──→      SCOPE
                                        
WorkPlan {            ProblemProfile {     KnowledgeMap {
  sub_questions[]       primary_type         available_knowledge
  dependency_graph      secondary_types[]    knowledge_gaps
  execution_order[]     per_question_types   sources_needed
  constraints[]         reasoning_approach   retrieval_plan
  success_criteria      required_stages[]    ...
  scope                 depth_level        }
  ...                   domain
}                       risk_level
                        special_considerations
                        ...
                      }
```

---
---

# SECTION 1: THE PROBLEM TYPE TAXONOMY

---

## 1.1 — The Eight Types

Every question, regardless of domain, falls into one or more of exactly
eight problem types. These types are exhaustive — any question can be
classified into at least one type. They are not mutually exclusive — most
real-world questions combine multiple types.

The eight types are:

```
TYPE 1: FACTUAL       — "What is X?"           (retrieve known fact)
TYPE 2: COMPUTATIONAL — "Calculate X"          (derive via math)
TYPE 3: ANALYTICAL    — "Is X true/valid?"     (derive via logic)
TYPE 4: SYNTHETIC     — "Create/design X"      (generate artifact)
TYPE 5: ADVISORY      — "Should I do X?"       (illuminate decision)
TYPE 6: DIAGNOSTIC    — "Why is X happening?"  (identify cause)
TYPE 7: PROCEDURAL    — "How do I do X?"       (ordered steps)
TYPE 8: COMPARATIVE   — "X vs. Y — which?"     (evaluate options)
```

Each type has:
- Defining characteristics
- Required reasoning approach
- Processing pipeline (which stages engage)
- Verification methods
- Common errors
- Detection signals (how to identify this type)

---

## 1.2 — TYPE 1: FACTUAL

### Definition

Questions with objectively verifiable answers that already exist somewhere.
The answer is a recorded fact, not a derived conclusion.

### Characteristics

```
- Answer EXISTS as a recorded fact
- Correctness verifiable by reference to authoritative source
- Reasoning is MINIMAL — work is in retrieval and verification
- Answer does NOT depend on asker's context or constraints
- Answer is CONTEXT-INDEPENDENT — same answer for anyone
```

### Examples

```
PURE FACTUAL:
  "What is the melting point of aluminum?"           → 660.3°C
  "What does Section 250 of the NEC require?"        → [specific code text]
  "When was the Treaty of Versailles signed?"        → June 28, 1919
  "What port does PostgreSQL use by default?"        → 5432
  "What is the API rate limit for Claude Sonnet?"    → [current limit]
  "What is the maximum span for a 2x10 floor joist?" → [per code table]
```

### Detection Signals

```
- "What is..."
- "When was..."
- "Where is..."
- "What does [X] say about..."
- Question can be answered by looking it up
- No "should," "could," "would," "better," "best"
- No constraints modify the answer
- Answer doesn't change based on context
```

### Processing Pipeline

```
RECEIVE → RETRIEVE → VERIFY → COMMUNICATE

Only 4 of 11 stages engaged:
  Stage 1:  RECEIVE    — Parse the question
  Stage 4:  SCOPE      — Identify the knowledge source
  Stage 5:  RETRIEVE   — Fetch the fact
  Stage 8:  VERIFY     — Confirm source authority
  Stage 10: COMMUNICATE — State the fact

Stages SKIPPED: 2 (DECOMPOSE), 3 (CLASSIFY minimal),
  6 (REASON), 7 (SYNTHESIZE), 9 (EVALUATE), 11 (REFLECT)
```

### Verification Methods

```
METHOD 1: SOURCE AUTHORITY CHECK
  Is the source PRIMARY (the NEC code itself) or SECONDARY
  (a blog post about the NEC)? Primary sources govern.

METHOD 2: RECENCY CHECK
  Is the fact current? "What's the default port for PostgreSQL?"
  hasn't changed. "What's the API rate limit?" changes regularly.

METHOD 3: CONSISTENCY CHECK
  Do multiple authoritative sources agree? If not, flag the
  disagreement and present both.
```

### Common Errors

```
ERROR 1: TREATING FACTUAL AS ADVISORY
  "What's the best programming language?" is NOT factual — it's advisory.
  "What language has the fastest execution for matrix operations?" IS
  factual (benchmarkable).

ERROR 2: OUTDATED RETRIEVAL
  Stating a fact that was true 2 years ago but has changed.
  API limits, library versions, best practices all evolve.

ERROR 3: FALSE PRECISION
  Stating a single precise answer when the fact has nuance.
  "What's the maximum span for a 2x10?" depends on wood species,
  grade, spacing, and load. The question needs qualification.
```

---

## 1.3 — TYPE 2: COMPUTATIONAL

### Definition

Questions requiring mathematical calculation to produce the answer.
The path to the answer is a defined mathematical procedure.

### Characteristics

```
- Answer is a NUMBER (or set of numbers)
- Path to answer is a DEFINED MATHEMATICAL PROCEDURE
- Correctness verifiable by INDEPENDENT CALCULATION
- Answer is DETERMINISTIC given the inputs
- Approximations must be STATED AND BOUNDED
```

### Examples

```
PURE COMPUTATIONAL:
  "What size beam is needed for this span and load?"
  "What is the NPV of this cash flow at 8% discount rate?"
  "How much memory does a hash map of 1M 256-byte keys consume?"
  "What's the heat loss through this wall assembly?"
  "How many WebSocket connections can a 4GB server handle?"
  "What's the monthly payment on a $300K mortgage at 6.5%?"
```

### Detection Signals

```
- "What size..." "How much..." "How many..." "Calculate..."
- Numbers in the input (dimensions, rates, quantities)
- Engineering/financial/scientific context
- Answer must be a number or measurement
- Involves formulas, equations, or mathematical relationships
```

### Processing Pipeline

```
RECEIVE → CLASSIFY → RETRIEVE (formulas, values) →
REASON (calculate) → VERIFY (5 methods) → COMMUNICATE

6-7 stages engaged. DECOMPOSE needed if calculation has
multiple steps with dependencies (e.g., beam sizing requires:
  1. Calculate load → 2. Determine moment → 3. Size beam)
```

### Verification Methods — The 5-Check Protocol

```
CHECK 1: DIMENSIONAL ANALYSIS
  Do the units work out? Computing force → units must be Newtons
  (or lb-force). If units come out as meters per second, the
  calculation is wrong. THIS IS THE MOST POWERFUL CHECK.

CHECK 2: BOUNDARY CONDITIONS
  At extreme values (0, ∞, 1), does the answer behave correctly?
  A beam span of 0 should require a beam of minimum size.
  A beam span of ∞ should require infinite beam depth.
  If the formula gives nonsensical answers at extremes, it's wrong.

CHECK 3: ORDER OF MAGNITUDE
  Is the answer in the right ballpark?
  Residential heating load of 50 million BTU/hr → clearly wrong.
  Data center power of 50 watts → clearly wrong.
  A sense-check against known reference points catches gross errors.

CHECK 4: INDEPENDENT METHOD
  Can the same answer be reached by a different calculation path?
  NPV calculated by discounting each cash flow individually should
  match NPV calculated by the annuity formula (for uniform flows).

CHECK 5: KNOWN EXAMPLES
  Does the formula produce the correct answer for a case where
  the answer is known? Test with textbook examples.
```

### Common Errors

```
ERROR 1: UNSTATED APPROXIMATIONS
  Every approximation introduces error. The system must:
  - Identify each approximation
  - Bound its error
  - Carry the error through subsequent calculations
  - State the cumulative uncertainty

ERROR 2: UNIT CONFUSION
  Mixing metric and imperial without conversion.
  Mixing different unit scales (kPa vs MPa).
  Software developers: mixing bytes vs bits, KB vs KiB.

ERROR 3: FORMULA MISAPPLICATION
  Using a formula outside its valid range.
  Euler's column formula is only valid for slender columns.
  Using it for a short, stocky column produces wrong answers.

ERROR 4: PRECISION INFLATION
  Reporting 12 significant digits when inputs had 2.
  If the span is "about 20 feet" and the load is "roughly 50 psf,"
  the beam size cannot be specified to the nearest 0.001 inches.
```

---

## 1.4 — TYPE 3: ANALYTICAL

### Definition

Questions requiring logical reasoning to move from known premises to
unknown conclusions. The work is in building and validating the
reasoning chain.

### Characteristics

```
- Answer must be DERIVED through logical inference
- Multiple PREMISES must be identified, verified, and connected
- Reasoning chain must be VALID at every step
- Conclusion's confidence is BOUNDED by the weakest premise
- Alternative conclusions must be CONSIDERED and ruled out
```

### Examples

```
PURE ANALYTICAL:
  "Is this code vulnerable to SQL injection?"
  "Will this business model be profitable given these assumptions?"
  "Is this argument logically valid?"
  "Does this building design comply with seismic requirements?"
  "Can this algorithm run in O(n log n) time?"
  "Does this contract clause expose us to liability?"
```

### Detection Signals

```
- "Is this..." "Does this..." "Will this..." "Can this..."
- Asks for a judgment or evaluation
- Requires connecting multiple pieces of evidence
- Answer must be supported by reasoning, not just stated
- Involves validity, compliance, vulnerability, risk, proof
```

### Processing Pipeline

```
Full 11-stage pipeline with MAXIMUM emphasis on:
  Stage 6: REASON     — Build the inference chain
  Stage 8: VERIFY     — Validate every step
  Stage 9: EVALUATE   — Test against adversarial challenges

All stages fully engaged. This is the CORE use case for the
cognitive architecture.
```

### Verification Methods

```
METHOD 1: LOGICAL VALIDITY
  Is every inference step a named, valid rule?
  Modus Ponens? Modus Tollens? Universal Instantiation?
  Each step must be identifiable as a legal logical move.

METHOD 2: PREMISE TRUTH
  Are all premises actually true?
  A valid argument with a false premise produces a false conclusion.
  Every premise must be verified independently.

METHOD 3: FALLACY DETECTION
  Has any logical fallacy crept in?
  Ad hominem? Straw man? False dichotomy? Equivocation?
  Hasty generalization? Appeal to authority? Post hoc?
  Each must be actively checked against the reasoning chain.

METHOD 4: ADVERSARIAL TESTING
  What would make this conclusion wrong?
  If there's a scenario where the conclusion fails, the
  analysis must account for it or acknowledge the limitation.

METHOD 5: ALTERNATIVE HYPOTHESES
  Are there other conclusions the same premises could support?
  If so, why is this conclusion preferred over alternatives?
```

### Common Errors

```
ERROR 1: CORRELATION → CAUSATION
  Pattern matching: "X usually follows Y, therefore Y causes X."
  Analytical reasoning requires ACTUAL CAUSAL MECHANISMS.

ERROR 2: CONFIRMATION BIAS
  Selecting premises that support the desired conclusion and
  ignoring premises that challenge it.

ERROR 3: UNSTATED ASSUMPTIONS
  The reasoning chain silently relies on assumptions that
  aren't true in this specific context.

ERROR 4: SCOPE OVERSHOOT
  Drawing a general conclusion from specific evidence.
  "This code is vulnerable to SQL injection" ≠ "This
  application is insecure." (Other defenses may exist.)
```

---

## 1.5 — TYPE 4: SYNTHETIC

### Definition

Questions requiring the creation of something new that satisfies a set
of constraints. The answer is an artifact — a design, a plan, a system,
a document, code.

### Characteristics

```
- Answer is an ARTIFACT (design, code, plan, document)
- Artifact must satisfy MULTIPLE SIMULTANEOUS CONSTRAINTS
- Multiple VALID SOLUTIONS may exist (constraint satisfaction)
- Quality measured by: constraint satisfaction + elegance
- The most COMPLEX type — highest cognitive load
```

### Examples

```
PURE SYNTHETIC:
  "Design a database schema for a social media application"
  "Write a function that sorts this data structure efficiently"
  "Create a marketing plan for our product launch"
  "Design the structural system for this building"
  "Write a deployment pipeline for this microservice"
  "Design an API for this multi-tenant SaaS platform"
```

### Detection Signals

```
- "Design..." "Create..." "Build..." "Write..." "Implement..."
- Answer requires producing a NEW artifact
- Multiple constraints must be satisfied simultaneously
- User expects a deliverable, not just information
- Involves architecture, code, plans, systems, documents
```

### Processing Pipeline

```
Full 11-stage pipeline with MAXIMUM emphasis on:
  Stage 2: DECOMPOSE  — Constraint extraction (critical)
  Stage 6: REASON     — Design decisions and tradeoffs
  Stage 7: SYNTHESIZE — Assembling the coherent artifact
  Stage 9: EVALUATE   — Constraint satisfaction checking

All stages fully engaged. DECOMPOSE is ESPECIALLY CRITICAL
because synthetic problems have the most constraints and
the most sub-problems.
```

### Verification Methods

```
METHOD 1: CONSTRAINT SATISFACTION
  Does the artifact satisfy EVERY constraint?
  Check each constraint individually against the design.
  A design that misses one constraint may be fundamentally flawed.

METHOD 2: INTERNAL CONSISTENCY
  Do all parts of the design work TOGETHER?
  A database schema where the auth tables don't relate to the
  user tables is internally inconsistent.

METHOD 3: COMPLETENESS
  Is anything MISSING?
  Does the API design handle all CRUD operations?
  Does the deployment pipeline include rollback?
  Does the schema handle all entity relationships?

METHOD 4: EDGE CASE HANDLING
  Does the design handle unusual inputs/situations?
  What happens when: input is empty? Input is maximum size?
  Two users act simultaneously? System is under maximum load?

METHOD 5: SCALABILITY
  Does the design work at the INTENDED SCALE?
  A design for "1 million users" that uses a single-threaded
  in-memory store is correct at small scale but fails at target.
```

### Common Errors

```
ERROR 1: IMPLICIT CONSTRAINT VIOLATION
  Satisfying explicit constraints but violating implicit ones.
  Database schema meets functional requirements but can't scale.
  Code passes happy path but crashes on edge cases.

ERROR 2: OVER-ENGINEERING
  Building for constraints that don't exist.
  "What if we need to handle 10 billion users?" when the
  stated requirement is 1,000 users.

ERROR 3: UNDER-SPECIFICATION
  Producing a design so vague it can't be implemented.
  "Use a caching layer" without specifying what, where, when,
  how, and what invalidation strategy.

ERROR 4: TECHNOLOGY BIAS
  Choosing familiar technology over appropriate technology.
  Using a relational database for a graph problem because
  "I know SQL" rather than because it's the right tool.
```

---

## 1.6 — TYPE 5: ADVISORY

### Definition

Questions requesting guidance on decisions where the asker must
ultimately choose. The system illuminates the decision space.

### Characteristics

```
- Answer involves TRADEOFFS between competing values
- No single "correct" answer in the mathematical sense
- System's job: ILLUMINATE the decision space, not decide
- Quality measured by: how well-informed the decision maker becomes
- MUST commit to analysis — "it depends" is NOT an answer
```

### Examples

```
PURE ADVISORY:
  "Should I use PostgreSQL or MongoDB for this project?"
  "Should I take this job offer?"
  "Which authentication framework should I use?"
  "Is it worth refactoring this codebase?"
  "Should we build or buy this component?"
  "Should I pursue a CS degree or self-study?"
```

### Detection Signals

```
- "Should I..." "Should we..." "Is it worth..."
- "Which should I choose..." "Would you recommend..."
- Decision with tradeoffs — no objectively "correct" answer
- User has a choice to make and wants informed guidance
- Context-DEPENDENT — answer changes based on situation
```

### Processing Pipeline

```
Full 11-stage pipeline with emphasis on:
  Stage 4: SCOPE    — Identify ALL decision criteria
  Stage 6: REASON   — Evaluate each option against each criterion
  Stage 10: COMMUNICATE — Present analysis with quantified tradeoffs

THE CRITICAL DISTINCTION:
  The system does NOT say "it depends."
  The system IDENTIFIES the specific factors it depends on,
  EVALUATES each option against each factor,
  QUANTIFIES tradeoffs where possible,
  PRESENTS the analysis so the human can decide.

  If constraints FULLY DETERMINE the answer:
  "You need ACID, your team knows SQL, relational data model →
  PostgreSQL is the clear choice." SAY SO with confidence.

  Only present tradeoffs when GENUINE tradeoffs exist.
```

### Verification Methods

```
METHOD 1: CRITERIA COMPLETENESS
  Have ALL relevant decision criteria been identified?
  Missing a criterion means the analysis is incomplete.

METHOD 2: EVALUATION FAIRNESS
  Are all options evaluated against the SAME criteria?
  Praising Option A's strengths while focusing on Option B's
  weaknesses is biased evaluation.

METHOD 3: TRADEOFF HONESTY
  Are the tradeoffs clearly stated?
  Every option has downsides. If the analysis doesn't mention
  any, it's not analysis — it's advocacy.

METHOD 4: RECOMMENDATION CLARITY
  Is the guidance actionable?
  "Both are good" is useless.
  "For your specific situation, I recommend X because [reasons],
  despite the tradeoff of [tradeoff]" is actionable.
```

### Common Errors

```
ERROR 1: COWARDLY BOTH-SIDES-ISM
  "Both PostgreSQL and MongoDB are great choices!"
  This is USELESS. The system must commit to analysis.

ERROR 2: RECOMMENDATION WITHOUT ANALYSIS
  "Just use PostgreSQL." Why? What criteria? What tradeoffs?
  A recommendation without reasoning is an opinion, not advice.

ERROR 3: FALSE NEUTRALITY
  Presenting genuinely unequal options as equivalent.
  If one option is clearly superior for this use case,
  pretending they're equal is dishonest.

ERROR 4: CONTEXT BLINDNESS
  Recommending the "best" option in general rather than
  the best option FOR THIS USER with THESE constraints.
```

---

## 1.7 — TYPE 6: DIAGNOSTIC

### Definition

Questions where the asker has a symptom and needs the cause identified.
The reasoning is abductive — inference to best explanation.

### Characteristics

```
- Input describes something GOING WRONG (bug, error, failure)
- Answer requires identifying ROOT CAUSE, not just symptom
- Multiple possible causes must be DIFFERENTIATED
- Reasoning is ABDUCTIVE (inference to best explanation)
- A diagnosis without a FIX is incomplete
```

### Examples

```
PURE DIAGNOSTIC:
  "My application crashes when I submit the form"
  "The server response time increased from 50ms to 2s yesterday"
  "Users are reporting they can't log in"
  "The beam deflection is twice what calculations predicted"
  "Memory usage grows linearly until OOM at ~72 hours"
  "Tests pass locally but fail in CI"
```

### Detection Signals

```
- "Why is..." "Why does..." "What's causing..."
- Description of unexpected behavior
- Something WORKED before and now DOESN'T
- Error messages, stack traces, symptoms
- "It should [X] but instead [Y]"
- Recent change + new problem = likely causal link
```

### Processing Pipeline

```
RECEIVE (parse symptoms carefully) →
DECOMPOSE (separate symptom from cause) →
CLASSIFY (diagnostic) →
SCOPE (what COULD cause this?) →
RETRIEVE (known failure patterns) →
REASON (differential diagnosis) →
VERIFY (test each hypothesis) →
COMMUNICATE (most likely cause + fix)

Key stages:
  Stage 4: SCOPE    — Enumerate possible causes
  Stage 5: RETRIEVE — Known failure patterns
  Stage 6: REASON   — Differential diagnosis
  Stage 8: VERIFY   — Test each hypothesis
```

### The Differential Diagnosis Protocol

```
STEP 1: SYMPTOM INVENTORY
  What exactly is happening? What exactly should happen?
  What's the delta between expected and observed?

STEP 2: TIMELINE CONSTRUCTION
  When did it start? What changed? What was different?
  Correlate symptom onset with environmental changes.

STEP 3: HYPOTHESIS GENERATION
  What could cause this symptom? Generate ALL plausible causes.
  Don't anchor on the first hypothesis.
  
  COMMON CAUSE CATEGORIES:
  - Recent code change
  - Configuration change
  - Environment change (dependency update, OS patch)
  - Data change (new data pattern, data corruption)
  - Load change (more users, different usage pattern)
  - External dependency failure (API, service, network)
  - Resource exhaustion (memory, disk, connections)
  - Race condition (timing-dependent failure)

STEP 4: HYPOTHESIS RANKING
  Rank by: P(cause | symptom) × P(cause | context)
  Most likely cause first. But don't ignore unlikely-but-serious.

STEP 5: DISCRIMINATING TESTS
  For each hypothesis: what observation would CONFIRM it?
  What observation would ELIMINATE it?
  Start with tests that eliminate the most hypotheses.

STEP 6: ROOT CAUSE IDENTIFICATION
  Follow the causal chain to the ROOT, not just the proximate cause.
  "The server crashed" is the symptom.
  "OOM" is the proximate cause.
  "Memory leak in connection pool" is the root cause.
  "Missing connection.close() in error handler" is the fix point.

STEP 7: FIX + VERIFICATION
  Provide the fix. Explain how to verify the fix worked.
  Note any side effects of the fix.
```

### Verification Methods

```
METHOD 1: EXPLANATORY COMPLETENESS
  Does the proposed cause FULLY explain the symptom?
  If the cause would produce different symptoms than observed → wrong.

METHOD 2: DIFFERENTIAL ELIMINATION
  Are alternative causes ELIMINATED?
  Each alternative must be ruled out with evidence or reasoning.

METHOD 3: TESTABILITY
  Is the proposed cause TESTABLE?
  A good diagnosis includes a way to verify it.
  "Try [X]. If the symptom resolves, this confirms the diagnosis."

METHOD 4: REPRODUCIBILITY
  Can the failure be REPRODUCED?
  If so: reproduce → apply fix → verify resolution.
```

### Common Errors

```
ERROR 1: TREATING SYMPTOMS, NOT CAUSES
  "Restart the server" fixes the symptom but not the root cause.
  The problem will recur. The diagnosis is incomplete.

ERROR 2: ANCHORING
  Fixating on the first hypothesis and seeking only confirming
  evidence. Multiple hypotheses must be genuinely considered.

ERROR 3: CORRELATION TRAP
  "It started happening after we deployed Friday's release"
  does not PROVE Friday's release caused it. Correlation ≠ causation.
  But it IS a strong signal that warrants investigation.

ERROR 4: DIAGNOSIS WITHOUT FIX
  Identifying the cause but not providing the resolution.
  A doctor who says "You have appendicitis" but doesn't say
  "You need surgery" has done half the job.
```

---

## 1.8 — TYPE 7: PROCEDURAL

### Definition

Questions asking how to do something step-by-step. The answer is an
ordered sequence of actions.

### Characteristics

```
- Answer is an ORDERED SEQUENCE of actions
- Each step must be CORRECT and COMPLETE
- Sequence must be in the RIGHT ORDER
- Skipping or misordering steps causes FAILURE
- Starting state and ending state must be DEFINED
```

### Examples

```
PURE PROCEDURAL:
  "How do I deploy a Docker container to AWS ECS?"
  "How do I set up SSH key authentication?"
  "What's the process for filing a patent?"
  "How do I install a subpanel in my garage?"
  "How do I set up a CI/CD pipeline with GitHub Actions?"
  "How do I migrate from MySQL to PostgreSQL?"
```

### Detection Signals

```
- "How do I..." "How to..." "What are the steps to..."
- "Walk me through..." "Guide me through..."
- User needs to PERFORM actions in sequence
- Answer requires numbered or ordered instructions
- Starting from a known state, reaching a target state
```

### Processing Pipeline

```
RECEIVE → CLASSIFY → SCOPE (starting state?) →
RETRIEVE (correct procedure) → REASON (adapt to context) →
VERIFY (sequence validity) → COMMUNICATE (clear ordered steps)

Key stages:
  Stage 4: SCOPE    — Determine starting state and target state
  Stage 5: RETRIEVE — Known correct procedures
  Stage 6: REASON   — Adapt generic procedure to user's context
  Stage 8: VERIFY   — Does sequence actually work?
```

### Verification Methods

```
METHOD 1: STEP EXECUTABILITY
  Can each step be EXECUTED?
  Steps that assume missing prerequisites fail.
  "Run 'npm install'" assumes Node.js is installed.
  If that assumption might be false, add a prerequisite step.

METHOD 2: ORDER CORRECTNESS
  Are dependencies between steps RESPECTED?
  "Configure the database" before "Run migrations"
  "Install dependencies" before "Run the application"

METHOD 3: EDGE CASE HANDLING
  What if a step FAILS?
  What's the recovery path?
  "If step 5 fails with [error], try [fix] before proceeding."

METHOD 4: COMPLETENESS
  Missing steps produce partial results.
  Did the procedure include cleanup?
  Did it include verification of success?
  Did it include rollback instructions?

METHOD 5: IDEMPOTENCY CHECK
  What happens if a step is REPEATED?
  Some steps are idempotent (safe to repeat).
  Some are not (creating a database user twice fails).
  Note which steps are safe to retry.
```

### Common Errors

```
ERROR 1: ASSUMED PREREQUISITES
  Starting the procedure from a state the user isn't in.
  "First, open your terminal" → which terminal? On what OS?
  "Clone the repo" → does the user have git installed?

ERROR 2: MISSING STEPS
  Omitting steps that seem "obvious."
  Obvious to the expert ≠ obvious to the user.
  When in doubt, include the step.

ERROR 3: NO VERIFICATION
  Completing the procedure without confirming success.
  "Deploy the application" → how does the user know it worked?
  Include: "Verify by navigating to [URL] and confirming [expected result]."

ERROR 4: NO ERROR HANDLING
  Providing only the "happy path."
  Real-world procedures encounter errors.
  Each step should note the most common failure and its fix.
```

---

## 1.9 — TYPE 8: COMPARATIVE

### Definition

Questions asking for comparison between options. The evaluation must be
fair, criterion-based, and actionable.

### Characteristics

```
- Multiple OPTIONS must be evaluated
- Evaluation uses SAME CRITERIA for all options
- Must identify MEANINGFUL DIFFERENCES, not just list features
- If one option is clearly superior for this use case, SAY SO
- Context determines which criteria matter most
```

### Examples

```
PURE COMPARATIVE:
  "Compare React, Vue, and Angular for our team's needs"
  "REST vs. GraphQL for this API?"
  "Kubernetes vs. Docker Swarm for our 50-node cluster"
  "PostgreSQL vs. MySQL for this workload"
  "AWS Lambda vs. EC2 for this service"
  "Monolith vs. microservices for our stage"
```

### Detection Signals

```
- "Compare..." "X vs. Y..." "X or Y..."
- "What are the differences between..."
- "Tradeoffs between..."
- Multiple named options in the question
- User wants to choose between specific alternatives
```

### Processing Pipeline

```
RECEIVE → DECOMPOSE (identify comparison criteria) →
SCOPE (gather data on each option) → RETRIEVE →
REASON (evaluate each option against each criterion) →
VERIFY → SYNTHESIZE (comparison matrix) → COMMUNICATE

Key stages:
  Stage 2: DECOMPOSE  — Identify evaluation criteria
  Stage 5: RETRIEVE   — Gather data on each option
  Stage 6: REASON     — Evaluate options against criteria
  Stage 7: SYNTHESIZE — Build comparison matrix
```

### The Structured Comparison Protocol

```
STEP 1: CRITERIA IDENTIFICATION
  What dimensions matter for this decision?
  - From explicit user requirements
  - From implicit domain requirements
  - From constraints (budget, team, timeline)
  Weight criteria by importance to user.

STEP 2: OPTIONS INVENTORY
  What are ALL the options being compared?
  Sometimes the user presents two options but a third exists
  that they haven't considered. Surface it if clearly relevant.

STEP 3: PER-CRITERION EVALUATION
  For each criterion:
    For each option:
      - How does this option perform on this criterion?
      - What is the evidence?
      - Rate: strong / adequate / weak / disqualifying

STEP 4: INTERACTION ANALYSIS
  Do any options create synergies or conflicts?
  "React + TypeScript" has better tooling than "Vue + TypeScript"
  "Kubernetes + AWS" has better integration than "Kubernetes + custom"

STEP 5: CONTEXT-WEIGHTED SYNTHESIS
  Apply the user's specific context to weight the comparison.
  "React has a larger ecosystem" matters more if the team is small.
  "Vue has a gentler learning curve" matters more if deadlines are tight.

STEP 6: CLEAR RECOMMENDATION
  State the recommendation with confidence level.
  "For your use case, X is clearly better because [reasons]."
  OR: "These are genuinely equivalent for your use case. Choose
  based on [tie-breaking factor]."
```

### Verification Methods

```
METHOD 1: CRITERIA COMPLETENESS
  Are ALL relevant criteria included?
  Is any important dimension missing?

METHOD 2: EVALUATION FAIRNESS
  Are all options evaluated with the SAME rigor?
  Praising A's strengths while focusing on B's weaknesses
  is biased.

METHOD 3: EVIDENCE QUALITY
  Are evaluations based on FACTS or opinions?
  "React is faster" — based on what benchmark?
  Claims must be substantiated.

METHOD 4: RECOMMENDATION JUSTIFICATION
  Does the recommendation follow from the analysis?
  If the analysis shows B wins on 7/10 criteria but A is
  recommended, the reasoning must explain why.
```

### Common Errors

```
ERROR 1: FEATURE LISTING WITHOUT ANALYSIS
  Listing what each option CAN DO without evaluating which
  does it BETTER for this use case. That's a feature sheet,
  not a comparison.

ERROR 2: FALSE EQUIVALENCE
  "Both are great choices!" when one is clearly better.
  If the analysis determines a winner, SAY SO.

ERROR 3: MISSING CRITERIA
  Comparing databases on "features" but not on "operational
  complexity" or "team expertise" — often the deciding factors.

ERROR 4: STALE INFORMATION
  Comparing options based on how they were 3 years ago.
  Technologies evolve. Vue 3 is very different from Vue 2.
```

---
---

# SECTION 2: MULTI-TYPE PROBLEMS & TYPE INTERACTION

---

## 2.1 — The Reality of Multi-Type Problems

Most real-world questions combine multiple types. Pure type questions
are actually uncommon outside of education and quizzes. The system must
identify the primary type AND all secondary types, then construct a
processing pipeline that engages the reasoning approaches of all
relevant types.

## 2.2 — Multi-Type Classification Protocol

```
STEP 1: IDENTIFY PRIMARY TYPE
  What is the DOMINANT mode of reasoning required?
  The primary type determines the overall processing pipeline.

STEP 2: IDENTIFY SECONDARY TYPES
  What ADDITIONAL modes of reasoning are needed?
  Each secondary type adds verification methods and
  processing concerns.

STEP 3: CHECK FOR TYPE CONFLICTS
  Do the types create conflicting processing requirements?
  (Rare, but possible. E.g., advisory type says "illuminate
  tradeoffs" while the user's urgency says "just tell me.")

STEP 4: CONSTRUCT COMPOSITE PIPELINE
  Primary type determines the pipeline structure.
  Secondary types add stages and verification methods.
```

## 2.3 — Common Multi-Type Patterns

### Pattern 1: Advisory + Comparative + Analytical

```
EXAMPLE: "Should I switch from REST to GraphQL for our API?"

PRIMARY:   ADVISORY   — User must make a decision
SECONDARY: COMPARATIVE — REST vs GraphQL must be compared
SECONDARY: ANALYTICAL  — Does GraphQL solve user's actual pain points?
SECONDARY: SYNTHETIC   — If switching, what does migration look like?

COMPOSITE PIPELINE:
  RECEIVE → DECOMPOSE (break into comparison criteria +
  migration analysis) → CLASSIFY → SCOPE (user's specific
  pain points, current architecture, team capability) →
  RETRIEVE (REST/GraphQL data) → REASON (comparative analysis
  + analytical evaluation of fit + synthetic migration design) →
  VERIFY (comparison fairness + analytical validity +
  design feasibility) → SYNTHESIZE → COMMUNICATE
```

### Pattern 2: Diagnostic + Analytical + Procedural

```
EXAMPLE: "My app is slow after adding the recommendation engine"

PRIMARY:   DIAGNOSTIC  — Something broke, find the cause
SECONDARY: ANALYTICAL  — Analyze why the change caused the problem
SECONDARY: PROCEDURAL  — Steps to fix it
SECONDARY: COMPUTATIONAL — Performance numbers to quantify

COMPOSITE PIPELINE:
  RECEIVE → DECOMPOSE (symptom inventory, hypothesis generation) →
  CLASSIFY → SCOPE (what could cause this?) →
  RETRIEVE (known performance patterns) →
  REASON (differential diagnosis + analytical root cause +
  computational performance analysis) →
  VERIFY (does diagnosis explain symptoms?) →
  SYNTHESIZE (diagnosis + fix procedure) → COMMUNICATE
```

### Pattern 3: Synthetic + Analytical + Comparative

```
EXAMPLE: "Design a database schema for this e-commerce platform"

PRIMARY:   SYNTHETIC    — Create an artifact (the schema)
SECONDARY: ANALYTICAL   — Evaluate schema against requirements
SECONDARY: COMPARATIVE  — Choose between schema design options
SECONDARY: COMPUTATIONAL — Size estimation, capacity planning

COMPOSITE PIPELINE:
  RECEIVE → DECOMPOSE (requirements, constraints, entities) →
  CLASSIFY → SCOPE → RETRIEVE (best practices, known patterns) →
  REASON (design decisions with comparative evaluation of
  alternatives and analytical validation) →
  VERIFY (constraint satisfaction + analytical soundness +
  computational capacity check) →
  SYNTHESIZE (complete schema) → EVALUATE → COMMUNICATE
```

## 2.4 — Per-Question Type Assignment

Each sub-question from Stage 2's WorkPlan gets its own type classification.
The overall question has a primary + secondary type. Each sub-question has
its own type. These may differ.

```
OVERALL: "Design a real-time chat system with E2E encryption for 10K users"
OVERALL TYPE: PRIMARY = SYNTHETIC, SECONDARY = [ANALYTICAL, COMPUTATIONAL]

SUB-QUESTION TYPES:
  SQ-1: "What protocol?" → COMPARATIVE (WebSocket vs MQTT vs SSE)
  SQ-2: "Message format?" → COMPARATIVE (JSON vs Protobuf vs MessagePack)
  SQ-3: "Server architecture for 10K?" → SYNTHETIC (design the architecture)
  SQ-4: "Message persistence?" → SYNTHETIC (design the storage layer)
  SQ-5: "Encryption scheme?" → COMPARATIVE + ANALYTICAL
  SQ-6: "Key management?" → SYNTHETIC + ANALYTICAL (security analysis)
  SQ-7: "Encryption × persistence?" → ANALYTICAL (interaction analysis)
  SQ-8: "Presence at scale?" → SYNTHETIC + COMPUTATIONAL
  SQ-9: "Delivery guarantees?" → ANALYTICAL (consistency analysis)
  SQ-10: "Complete architecture?" → SYNTHETIC (integration synthesis)
```

Each sub-question is processed using the reasoning approach appropriate
to its type. The synthesis stage then combines these into a coherent
overall answer.

---
---

# SECTION 3: DEPTH DETERMINATION & STAGE ROUTING

---

## 3.1 — The Depth Matrix

Processing depth is determined by the intersection of problem type and
priority level (from Stage 1). Higher type complexity and higher priority
both increase depth.

```
                    INFORMATIONAL  LOW      STANDARD    HIGH      CRITICAL
─────────────────────────────────────────────────────────────────────────
FACTUAL             MINIMAL        MINIMAL  MINIMAL     STANDARD  STANDARD
PROCEDURAL          MINIMAL        STANDARD STANDARD    DEEP      DEEP
COMPUTATIONAL       STANDARD       STANDARD STANDARD    DEEP      MAXIMUM
COMPARATIVE         STANDARD       STANDARD DEEP        DEEP      MAXIMUM
DIAGNOSTIC          STANDARD       DEEP     DEEP        MAXIMUM   MAXIMUM
ADVISORY            STANDARD       DEEP     DEEP        MAXIMUM   MAXIMUM
ANALYTICAL          DEEP           DEEP     DEEP        MAXIMUM   MAXIMUM
SYNTHETIC           DEEP           DEEP     MAXIMUM     MAXIMUM   MAXIMUM
```

## 3.2 — Depth Level Definitions

### MINIMAL Depth

```
STAGES ENGAGED: 4
  RECEIVE → SCOPE/RETRIEVE → VERIFY → COMMUNICATE

CHARACTERISTICS:
  - Single-pass processing
  - No decomposition needed
  - Lightweight verification
  - Direct response

TYPICAL PROCESSING: Seconds
TYPICAL OUTPUT: 1-5 sentences

USE FOR: Pure factual lookups, simple procedural references,
  informational queries with low priority
```

### STANDARD Depth

```
STAGES ENGAGED: 7
  RECEIVE → CLASSIFY → SCOPE → RETRIEVE →
  REASON → VERIFY → COMMUNICATE

CHARACTERISTICS:
  - Single-pass with moderate reasoning
  - May involve decomposition (light)
  - Standard verification methods
  - Structured response

TYPICAL PROCESSING: Seconds to 1 minute
TYPICAL OUTPUT: 1-3 paragraphs

USE FOR: Standard computational, standard procedural,
  standard comparative, low-priority diagnostic/advisory
```

### DEEP Depth

```
STAGES ENGAGED: All 11 stages, standard depth per stage
  RECEIVE → DECOMPOSE → CLASSIFY → SCOPE → RETRIEVE →
  REASON → SYNTHESIZE → VERIFY → EVALUATE → COMMUNICATE → REFLECT

CHARACTERISTICS:
  - Full pipeline engagement
  - Complete decomposition and dependency analysis
  - Multiple reasoning chains
  - Comprehensive verification
  - Explicit evaluation against success criteria

TYPICAL PROCESSING: 1-5 minutes
TYPICAL OUTPUT: Structured multi-section response

USE FOR: Analytical problems, high-priority diagnostic,
  high-priority advisory, standard synthetic
```

### MAXIMUM Depth

```
STAGES ENGAGED: All 11 stages, maximum depth per stage,
  multiple passes through reasoning stages

  RECEIVE → DECOMPOSE (deep) → CLASSIFY → SCOPE (comprehensive) →
  RETRIEVE (extensive) → REASON (multiple chains, adversarial testing) →
  SYNTHESIZE (full integration) → VERIFY (all methods) →
  EVALUATE (against all criteria) → COMMUNICATE (comprehensive) →
  REFLECT (lessons captured)

CHARACTERISTICS:
  - Full pipeline at maximum depth
  - Deep decomposition with dependency analysis
  - Multiple independent reasoning chains
  - Adversarial verification (try to break own answer)
  - Comprehensive evaluation against all success criteria
  - Multiple passes if first pass reveals issues
  - Explicit uncertainty quantification

TYPICAL PROCESSING: 5-30 minutes
TYPICAL OUTPUT: Comprehensive multi-section document

USE FOR: Critical synthetic (architecture, security-critical design),
  critical analytical (compliance, safety), maximum-complexity problems
```

## 3.3 — Stage Routing Table

Which stages engage at each depth level, and at what intensity:

```
STAGE                 MINIMAL     STANDARD    DEEP        MAXIMUM
──────────────────────────────────────────────────────────────────
1. RECEIVE            Full        Full        Full        Full
2. DECOMPOSE          Skip        Light       Full        Deep
3. CLASSIFY           Skip        Full        Full        Full
4. SCOPE              Light       Full        Full        Comprehensive
5. RETRIEVE           Direct      Targeted    Extensive   Exhaustive
6. REASON             Skip        Single      Multiple    Multi+Adversarial
7. SYNTHESIZE         Skip        Light       Full        Full+Integration
8. VERIFY             Light       Standard    Comprehensive All methods
9. EVALUATE           Skip        Light       Full        Full+Criteria
10. COMMUNICATE       Direct      Structured  Comprehensive Multi-section
11. REFLECT           Skip        Skip        Light       Full
```

## 3.4 — Dynamic Depth Escalation

Sometimes initial classification suggests one depth level, but processing
reveals that deeper analysis is needed. The system must be able to escalate
depth mid-processing.

```
ESCALATION TRIGGERS:

1. COMPLEXITY DISCOVERY
   During decomposition, the question reveals more sub-questions
   than expected. A "simple" question turns out to be compound.
   → Escalate from STANDARD to DEEP

2. RISK DISCOVERY
   During processing, a safety, security, or compliance concern
   emerges that wasn't apparent initially.
   → Escalate to at least DEEP, possibly MAXIMUM

3. CONTRADICTION DISCOVERY
   During reasoning, a contradiction emerges between constraints
   or between the user's assumptions and reality.
   → Escalate to resolve the contradiction properly

4. UNCERTAINTY EXPLOSION
   During reasoning, uncertainty grows rather than shrinks.
   The answer is less clear after analysis than before.
   → Escalate to add more reasoning chains and verification

ESCALATION PROTOCOL:
  - Log the escalation trigger
  - Increase depth level by one step
  - Re-engage skipped stages if needed
  - DO NOT de-escalate (once escalated, stay escalated)
  - If already at MAXIMUM and escalation is triggered,
    add additional verification passes instead
```

## 3.5 — Processing Budget

At each depth level, there's an implicit budget for how much processing
is appropriate:

```
DEPTH          REASONING CHAINS    VERIFICATION METHODS    SOURCES
─────────────────────────────────────────────────────────────────────
MINIMAL        0-1                 1 (source authority)    1-2
STANDARD       1                   2-3                     2-4
DEEP           2-3                 3-5                     4-8
MAXIMUM        3-5+                All applicable          All available
```

Going beyond the budget without escalation is wasteful. Falling short
of the budget produces inadequate analysis for the depth level.

---
---

# SECTION 4: DOMAIN CLASSIFICATION & RISK ASSESSMENT

---

## 4.1 — Domain Classification

Every question operates within one or more knowledge domains. The domain
determines which knowledge to retrieve, which verification methods are
most important, and what special considerations apply.

### 4.1.1 — Domain Taxonomy

```
DOMAIN              SUB-DOMAINS                    SPECIAL CONSIDERATIONS
──────────────────────────────────────────────────────────────────────────
SOFTWARE            Frontend, Backend, Database,    Version sensitivity,
                    DevOps, Mobile, Security,       framework specificity,
                    Architecture, AI/ML             breaking changes

ENGINEERING         Structural, Mechanical,         Safety-critical,
                    Electrical, Civil, Chemical     code compliance,
                                                    licensed practice

FINANCE             Accounting, Investment,         Regulatory compliance,
                    Taxation, Corporate Finance,    fiduciary duty,
                    Personal Finance                regional variation

MEDICINE            Diagnosis, Treatment,           Life-critical,
                    Pharmacology, Research           professional scope,
                                                    liability

LAW                 Contract, IP, Employment,       Jurisdiction-specific,
                    Regulatory, Criminal            professional scope,
                    Compliance                      liability

SCIENCE             Physics, Chemistry, Biology,    Peer-reviewed sources,
                    Mathematics, Earth Science      experimental methods

BUSINESS            Strategy, Operations,           Market-dependent,
                    Marketing, HR, Management       competitive context

GENERAL             Everyday, Education,            Lower stakes,
                    Lifestyle, Hobbies              broader audience
```

### 4.1.2 — Multi-Domain Questions

Questions often span domains. The primary domain determines the main
knowledge source and verification approach. Secondary domains add
additional considerations.

```
EXAMPLE: "Design a secure payment system for our e-commerce platform"

PRIMARY:   SOFTWARE (system design)
SECONDARY: FINANCE  (payment processing, PCI compliance)
SECONDARY: LAW      (GDPR, PSD2, consumer protection)
SECONDARY: BUSINESS (cost optimization, vendor selection)

Each domain adds its own:
  - Knowledge sources to retrieve from
  - Verification methods to apply
  - Special considerations to respect
  - Terminology to use correctly
```

### 4.1.3 — Domain Detection

```
DETECTION SIGNALS:

SOFTWARE: Code, APIs, frameworks, libraries, deployment, databases,
  algorithms, data structures, architecture patterns

ENGINEERING: Loads, spans, materials, safety factors, code compliance,
  specifications, calculations, structural/mechanical/electrical terms

FINANCE: Revenue, cost, ROI, NPV, cash flow, budget, investment,
  tax, compliance, audit, fiduciary

MEDICINE: Symptoms, diagnosis, treatment, medication, dosage,
  contraindication, protocol, clinical

LAW: Contract, liability, compliance, regulation, statute,
  jurisdiction, precedent, rights, obligations

DOMAIN AMBIGUITY:
  Some terms exist in multiple domains:
  "Model" → ML model? Data model? Business model? 3D model?
  "Table" → Database? HTML? Furniture? Lookup table?
  "Protocol" → Network? Medical? Legal?
  
  Resolution: Use context from Stage 1 (intent, user profile,
  uploaded artifacts) to disambiguate.
```

## 4.2 — Risk Assessment

### 4.2.1 — Risk Level Classification

```
LEVEL        DEFINITION                       EXAMPLES
──────────────────────────────────────────────────────────────
CRITICAL     Error could cause:               Medical advice
             - Physical harm                  Structural engineering
             - Legal liability                Security-critical systems
             - Significant financial loss     Production deployment
             - Irreversible damage            Legal guidance

HIGH         Error would cause:               Architecture decisions
             - Substantial rework             Business strategy
             - Business disruption            Financial planning
             - Professional consequences      Data migration
             - Difficult-to-reverse effects   

MODERATE     Error would cause:               Standard development
             - Wasted time                    Technical decisions
             - Minor rework                   Optimization
             - Suboptimal results             Process improvement
             - Recoverable problems           

LOW          Error would cause:               Exploratory questions
             - Minor inconvenience            Learning/education
             - Easily corrected               Casual advice
             - No lasting impact              Preference-based
```

### 4.2.2 — Risk Factor Detection

```
RISK AMPLIFIERS (increase risk level):
  - Production system (vs development/staging)
  - Financial transactions involved
  - Personal data involved (especially health, children)
  - Safety-critical domain (engineering, medical, electrical)
  - Irreversibility (can't undo: database migration, deployment)
  - Scale of impact (affects 1 user vs 1 million users)
  - Legal/regulatory context
  - Time pressure (rushing increases error probability)

RISK MITIGATORS (decrease effective risk):
  - Staging/test environment
  - Reversible actions
  - User has backup/rollback plan
  - User is verifying independently
  - Low-stakes context (learning, experimentation)
  - User is an expert in the domain
```

### 4.2.3 — Risk-Adjusted Processing

Risk level modifies processing behavior:

```
CRITICAL RISK:
  - Escalate depth to at least DEEP
  - Add explicit warnings about error consequences
  - Recommend professional consultation for licensed domains
  - Verify every claim against authoritative sources
  - Do NOT speculate — state uncertainty explicitly
  - Err on the side of caution in all recommendations

HIGH RISK:
  - Use DEEP depth minimum
  - State assumptions explicitly
  - Provide verification steps the user can execute
  - Note the most dangerous potential errors
  - Recommend review by another person

MODERATE RISK:
  - Standard processing depth appropriate
  - Standard verification methods
  - Normal communication style

LOW RISK:
  - Lighter processing acceptable
  - Can be more exploratory in recommendations
  - Verification can be lighter
  - Communication can be more casual
```

## 4.3 — Special Consideration Flags

Certain domains or contexts trigger special processing rules:

```
FLAG                    TRIGGER                  ACTION
──────────────────────────────────────────────────────────────
SAFETY_CRITICAL         Engineering, medical,    Add safety verification
                        electrical, chemical     pass. Cite code/standard.

REGULATORY              Financial, healthcare,   Identify applicable
                        data processing (EU)     regulations explicitly.

LICENSED_PRACTICE       Engineering, medical,    Note that licensed
                        legal                    professional review
                                                 is appropriate.

SECURITY_SENSITIVE      Auth, encryption,        Adversarial verification.
                        payment, access control  OWASP check.

DATA_SENSITIVE          PII, health data,        Data protection
                        financial data           requirements apply.

TIME_SENSITIVE          Production outage,       Prioritize speed of
                        security incident        response. Fix first,
                                                 explain later.

VERSION_SENSITIVE       Framework, library,      Verify against CURRENT
                        API, platform            version, not training data.
```

---
---

# SECTION 5: WORKED EXAMPLES, ANTI-PATTERNS & OUTPUT SPECIFICATION

---

## 5.1 — Complete Worked Example 1: Simple Factual

**WorkPlan Summary (from Stage 2):**
- Single question: "What port does PostgreSQL use by default?"
- No sub-questions needed
- No constraints, no dependencies

**Classification:**

```
PRIMARY TYPE:     FACTUAL
SECONDARY TYPES:  None
DEPTH:           MINIMAL (factual × informational priority)
DOMAIN:          SOFTWARE (database)
RISK:            LOW
STAGES ENGAGED:  RECEIVE → SCOPE → RETRIEVE → VERIFY → COMMUNICATE
SPECIAL FLAGS:   None
```

**Total processing: 4 stages. Answer: 5432. Time: seconds.**

## 5.2 — Complete Worked Example 2: Complex Multi-Type

**WorkPlan Summary (from Stage 2):**
- "Should we migrate from REST to GraphQL for our mobile-first API?"
- 8 sub-questions identified
- Constraints: mobile-first, 200K daily users, team of 4

**Classification:**

```
OVERALL:
  PRIMARY TYPE:     ADVISORY (user must decide)
  SECONDARY TYPES:  COMPARATIVE, ANALYTICAL, SYNTHETIC
  DEPTH:           DEEP (advisory × high priority)
  DOMAIN:          SOFTWARE (API design, mobile)
  RISK:            HIGH (architecture decision, difficult to reverse)
  STAGES ENGAGED:  All 11
  SPECIAL FLAGS:   None

PER SUB-QUESTION:
  SQ-1: "What are the pain points with current REST API?"
         → DIAGNOSTIC + ANALYTICAL, DEEP
  SQ-2: "Would GraphQL solve these specific pain points?"
         → ANALYTICAL, DEEP
  SQ-3: "What are the migration costs?"
         → COMPUTATIONAL + SYNTHETIC, STANDARD
  SQ-4: "What is the team's GraphQL expertise?"
         → FACTUAL (if known) or flag for user input
  SQ-5: "What are the mobile-specific benefits of GraphQL?"
         → ANALYTICAL + COMPARATIVE, DEEP
  SQ-6: "What are the risks and downsides of migration?"
         → ANALYTICAL + ADVERSARIAL, DEEP
  SQ-7: "What does the migration path look like?"
         → SYNTHETIC + PROCEDURAL, DEEP
  SQ-8: "What is the recommendation?"
         → ADVISORY (synthesis), DEEP
```

## 5.3 — Complete Worked Example 3: Production Emergency

**WorkPlan Summary (from Stage 2):**
- "Users can't log in since the deploy 30 minutes ago"
- Priority: CRITICAL
- Emotional state: HIGH URGENCY

**Classification:**

```
PRIMARY TYPE:     DIAGNOSTIC (something broke, find cause)
SECONDARY TYPES:  PROCEDURAL (steps to fix), ANALYTICAL (why)
DEPTH:           MAXIMUM (diagnostic × critical priority)
DOMAIN:          SOFTWARE (authentication, deployment)
RISK:            CRITICAL (production system, users affected NOW)
STAGES ENGAGED:  All 11 at maximum depth
SPECIAL FLAGS:   TIME_SENSITIVE, SECURITY_SENSITIVE

ESCALATION NOTE:
  TIME_SENSITIVE flag means: prioritize SPEED.
  Provide most likely cause + fix FIRST.
  Then provide deeper analysis.
  Structure: "IMMEDIATE FIX → ROOT CAUSE ANALYSIS → PREVENTION"

DEPTH OVERRIDE:
  Despite MAXIMUM classification, TIME_SENSITIVE means:
  - Lead with the fix (don't wait for complete analysis)
  - Do the analysis in parallel
  - Present: "Try this NOW: [fix]. Meanwhile, here's why..."
```

## 5.4 — Anti-Pattern Catalog

### 5.4.1 — Type Misclassification

```
WHAT HAPPENS: The question is classified as the wrong type.
  An advisory question classified as factual → no tradeoff analysis.
  A diagnostic question classified as procedural → steps without
  understanding the cause.

WHY DANGEROUS: Wrong reasoning approach applied to problem.
  Every subsequent stage uses the wrong cognitive tools.

EXAMPLE:
  "Should I use React?" classified as FACTUAL.
  Answer: "React is a JavaScript library maintained by Meta."
  That's factually correct but completely useless. The user
  needed ADVISORY (analysis of whether React fits their needs).
```

### 5.4.2 — Depth Underestimate

```
WHAT HAPPENS: Problem classified at too-shallow depth.
  A complex synthetic problem at STANDARD depth.
  A critical diagnostic at MINIMAL depth.

WHY DANGEROUS: Insufficient processing for problem complexity.
  The answer addresses the surface but misses the depth.

EXAMPLE:
  "Design a payment system" at STANDARD depth.
  Answer covers basic flow but misses: security, error handling,
  PCI compliance, idempotency, reconciliation, refunds, disputes.
  These aren't "nice to have" — they're essential for payments.
```

### 5.4.3 — Depth Overestimate

```
WHAT HAPPENS: Simple problem classified at too-deep depth.
  A factual lookup at MAXIMUM depth.
  A simple procedural at DEEP depth.

WHY DANGEROUS: Wastes processing time. Over-complicates the answer.
  User asks "What port does PostgreSQL use?" and gets a 5-page
  analysis of port configuration, security implications, and
  network architecture.

MITIGATION: The depth matrix prevents most overestimation.
  But check: "Would a competent human spend this much time
  on this question?" If not, reduce depth.
```

### 5.4.4 — Single-Type Tunnel Vision

```
WHAT HAPPENS: Multi-type problem classified as single type.
  "Should we migrate to GraphQL?" classified as only COMPARATIVE.
  Missing ADVISORY (decision support), ANALYTICAL (fit analysis),
  SYNTHETIC (migration plan).

WHY DANGEROUS: Answer addresses only one dimension of the problem.
  A pure comparison without decision support is interesting but
  not actionable.

EXAMPLE:
  Pure comparative output: "GraphQL pros: X, Y, Z. REST pros: A, B, C."
  What's missing: "For YOUR specific situation, considering YOUR team,
  YOUR scale, YOUR timeline, the recommendation is..."
```

### 5.4.5 — Risk Blindness

```
WHAT HAPPENS: High-risk question treated as low-risk.
  Security-critical code reviewed casually.
  Medical question answered without appropriate hedging.
  Production deployment advice without rollback planning.

WHY DANGEROUS: Errors have outsized consequences when risk is
  underestimated. The system doesn't apply appropriate caution.

EXAMPLE:
  "Is this auth code secure?" answered with "Looks fine!" without
  adversarial testing, OWASP check, or security audit methodology.
```

### 5.4.6 — Domain Blindness

```
WHAT HAPPENS: Domain-specific requirements missed because domain
  wasn't identified. Software question with financial implications
  treated as pure software. Engineering question with code compliance
  treated as pure design.

WHY DANGEROUS: Domain-specific verification methods aren't applied.
  Regulatory requirements are missed. Professional scope limitations
  aren't noted.

EXAMPLE:
  "Design a patient data system" treated as pure SOFTWARE.
  HIPAA requirements completely missed. No encryption at rest.
  No access logging. No BAA with cloud provider. The design is
  technically sound and completely non-compliant.
```

## 5.5 — Complete Output Specification

Stage 3 produces a **ProblemProfile** object:

```
ProblemProfile {

  // === Overall Classification ===

  primary_type: enum,                // "factual" | "computational" | "analytical" |
                                     // "synthetic" | "advisory" | "diagnostic" |
                                     // "procedural" | "comparative"

  secondary_types: [enum],           // Array of secondary types

  type_confidence: float,            // 0.0-1.0 — how confident is the classification?

  type_justification: string,        // Why this classification was chosen

  // === Per-Question Classification ===

  per_question_types: {
    [question_id: string]: {
      primary_type: enum,
      secondary_types: [enum],
      reasoning_approach: string     // How this specific question should be attacked
    }
  },

  // === Depth & Routing ===

  depth_level: enum,                 // "MINIMAL" | "STANDARD" | "DEEP" | "MAXIMUM"

  depth_justification: string,       // Why this depth level

  required_stages: [int],            // Which stages to engage [1,2,3,...,11]

  stage_intensity: {                 // Per-stage processing intensity
    [stage_number: int]: enum        // "skip" | "light" | "full" | "deep" | "maximum"
  },

  processing_budget: {
    reasoning_chains: int,           // How many independent reasoning chains
    verification_methods: int,       // How many verification methods to apply
    sources_to_consult: int          // How many sources to retrieve
  },

  // === Domain ===

  domain: {
    primary: string,                 // Primary knowledge domain
    secondary: [string],             // Secondary domains
    terminology_context: string      // Domain-specific term disambiguation
  },

  // === Risk ===

  risk_level: enum,                  // "low" | "moderate" | "high" | "critical"

  risk_factors: [string],            // What makes this risky

  risk_mitigators: [string],         // What reduces the risk

  risk_adjusted_processing: string,  // How risk modifies processing

  // === Special Considerations ===

  special_flags: [enum],             // "SAFETY_CRITICAL" | "REGULATORY" |
                                     // "LICENSED_PRACTICE" | "SECURITY_SENSITIVE" |
                                     // "DATA_SENSITIVE" | "TIME_SENSITIVE" |
                                     // "VERSION_SENSITIVE"

  special_considerations: [string],  // Human-readable notes on special handling

  // === Escalation ===

  escalation_triggers: [string],     // What would cause depth escalation
  current_escalation_level: int,     // 0 = no escalation, 1+ = escalated

  // === Validation ===

  validation: {
    type_classification_confident: boolean,
    depth_appropriate: boolean,
    domain_identified: boolean,
    risk_assessed: boolean,
    special_flags_checked: boolean,
    anti_patterns_checked: [
      { pattern: string, detected: boolean }
    ]
  }
}
```

---

## 5.6 — Stage 3 → Stage 4 Interface

The ProblemProfile passes to Stage 4 (SCOPE) which will:

1. Use the domain classification to identify what knowledge sources
   to access
2. Use the depth level to determine how extensively to search
3. Use the risk level to determine how carefully to verify sources
4. Use special flags to engage domain-specific knowledge requirements
5. Use the per-question types to know what kind of knowledge each
   sub-question needs

---

*End of Stage 3: CLASSIFY — Complete Technical Specification*

*Sections: 5 of 5 complete*
*Next: Stage 4: SCOPE*

---
