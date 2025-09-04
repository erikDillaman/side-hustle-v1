# Side Hustle Explorer — README

I built this as a tiny, values-aware prototype to help teens compare side hustles. It’s intentionally simple: a small schema, a seed dataset, and two ranking “lenses” you can explain out loud.

---

## What’s here

- **`index.html`** – a static shell with five result slots (`numOne…numFive`) and two actions (**Highest Paying** / **Lowest Costs**).
- **`styles.css`** – basic card styling; no frameworks.
- **`side-hustles.js`** – a seed array of hustle objects with the fields below.
- **`script.js`** – the logic: **filter → sort → slice → display**. I used named helper functions (no arrow shorthand) so beginners can read them.

![Side Hustle Explorer – UI Mock](UI%20Design.png)

---

## Schema I used

```js
{
  name: string,
  hourlyRate: number,   // $/hr
  costs: number,        // $ per hour (materials/fees)
  transportRequired: boolean,
  category: string      // e.g., Outdoors, Tutoring, Digital…
}
```

![Schema Plan](Schema%20Plan.png)

---

## Quick start

1. Open `index.html` in a browser.  
2. Click **Highest Paying** or **Lowest Costs** to fill the five slots with the top results from `side-hustles.js`.

---

## How I actually built it (my process)

1. **Set guardrails.**  
   I decided *not* to make students hand-type data, and *not* to introduce async or file parsing yet. That keeps attention on arrays/objects, predicates, and explainable comparators.

2. **Sketch the UI first.**  
   I generated plain HTML/CSS that looks like the final thing but shows static data. Only when that felt clear did I wire the buttons.

3. **Lock the schema, then seed data.**  
   I picked five fields that map cleanly to classroom questions about *money* and *feasibility*. I seeded ~40 entries in `side-hustles.js` so we can demo without clerical work.

4. **Map features to array methods before coding.**  
   Used a “secret loop” pattern (filter/sort/slice) 
   - Highest Paying → `filter(rate ≥ 18)` → `sort(desc by rate)` → `slice(0,5)`  
   - Lowest Costs → `filter(costs ≤ 1)` → `sort(asc by costs)` → `slice(0,5)`  
   

6. **Write named helpers, not one-liners.**  
   `isRateHighEnough(h)`, `compareRates(a,b)`, `isCostLowEnough(h)`, `compareCosts(a,b)` and a single `displayResults(list)` that writes to the five slots. It’s slower to type, faster to learn.

---

## How it works (in plain English)

- We already have a **JavaScript array** of objects (`hustles`).  
- When you click a button, we **filter** by a rule (e.g., “rate ≥ 18”), **sort** by a metric (with a tie rule if needed), **slice** the top five, then **render** strings like `Name — $rate/hr (Costs: $x)` into `numOne…numFive`.  
- No explicit `for`/`while`; the iteration lives inside the array methods.

---

## Decisions & tradeoffs I accepted

- **Seed JS file over CSV parsing.** Students can still design the schema and rules without wrestling with parsing or async.  
- **Two files, fixed order.** `side-hustles.js` must load before `script.js`. It’s one extra rule, but the mental model (data file vs. logic file) may be worth it.  
- **Fixed five slots vs. dynamic rendering.** Hard-coding five outputs keeps DOM work tiny for Unit 3. We can switch to generated lists later.  
- **Classic `function` over arrow notation.** The goal is comprehension of parameters/returns, not condensed logic.  
- **No tables yet.** Cards/text make the data work visible; tables tend to balloon scope.

---

## Open questions I’m still holding

- **Data ingestion** Which path is official for this unit—seed array, helper-converted CSV, or form-built dataset? 
- **Depth of knowledge with Functions.** Readiness for higher-order functions: Will students learn and use function parameters + returns in time to write filter predicates and sort comparators?
- **Remix Creative Mode is a Work in Progress** The suggested TODOs often didn't align with student's depth of knowledge of JavaScript. How do put some guardrails in place to ensure that our Remix output works well to meet students where they at?
---

## Hidden insights that shaped the build

- **Teach the recipe, not the feature.** Once students learn **filter → sort → slice → display**, they can solve lots of problems without new syntax.  
- **Good scaffolds leave work.** A few TODOs and named helpers provide rails without stealing the learning.


