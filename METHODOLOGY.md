# Carbon methodology and model caveats

The formulas in this educational prototype are **exploratory**, and all sample inputs are assumed rather than measured.

## Workload baseline

Facility kWh/year = IT kWh/year × assumed PUE.
Operational tCO2e/year = Facility kWh × assumed grid kgCO2e/kWh / 1000.
Total modeled tCO2e/year = Operational tCO2e + allocated embodied tCO2e (optional).

## Optimization scenario

Scenario IT kWh = Baseline IT kWh × (1 − efficiency percentage/100) × (1 + rebound percentage/100).
Scenario facility kWh = Scenario IT kWh × PUE.
Scenario operational tCO2e = Scenario facility kWh × grid factor / 1000.
Scenario total tCO2e = Scenario operational tCO2e + **unchanged** allocated embodied tCO2e (optional).
Modeled avoided emissions = baseline total − scenario total (may be negative).

Efficiencies and rebound are independent scenario assumptions. Emissions factors and PUE are held constant. Grid factors are not verified and must not be described as real-time or marginal emissions. Embodied emissions are not independently estimated from equipment inventory and life cycles.

## Governance recommender

Rules propose one of scheduling, right-sizing, or idle consolidation for each workload. Savings percentages, latency changes and cost deltas are **synthetic** and only useful to demonstrate a policy workflow. There is no live performance model, recommendation guarantee, actual optimizer, or execution engine. Personas are simulated, with FinOps lacking mock approval permission. The audit is stored in the local browser and is not immutable.

## Inventory/accounting boundary

- Source values must refer to defined, nonoverlapping workloads and consistent annual time horizons.
- Do not apply PUE to data that already represents facility electricity.
- Do not double count provider-reported emissions and your own IT/PUE emissions for the same boundary.
- A location-based annual emissions factor and marginal dispatch emissions factor answer different questions.
- Scope 2 corporate reporting and customer allocations of cloud-provider Scope 3 emissions require different accounting boundaries.
- The optional embodied allocation does not automatically map to an auditable corporate Scope 3 inventory.
- Cost calculations in the quick simulator are simple assumptions, not bills or ROI forecasts.

## Reference methodology to evaluate before production

- ISO/IEC 21031:2024 (Software Carbon Intensity).
- Green Software Foundation Software Carbon Intensity guidance.
- GHG Protocol Corporate Accounting and Reporting Standard; Scope 2 Guidance; Corporate Value Chain (Scope 3) Standard.
- ISO 14064 family for GHG accounting and verification.

**Do not claim compliance or certification** based on the demo. Production accounting needs verified data, defensible factors and formal methodological validation.

## Phase 2.1: Monthly carbon footprint tracker

For each distinct reporting month and business unit:

- **Estimated operational emissions (tCO₂e)** = `facilityKwh × factorKg / 1,000`.
- **Estimated electricity cost (USD)** = `facilityKwh × priceUsd`.
- Multiple units in one month are summed only if they represent **non-overlapping reporting boundaries**.
- The historical tracker intentionally uses **facility electricity**, not IT electricity, and therefore **does not apply PUE again**.
- Historical tracker excludes embodied emissions and market-based Scope 2 contractual instruments. It does not establish a complete organizational GHG inventory.

The reduction target is compared with two equal three-month windows (three earliest and three latest distinct reporting months) for at least six reporting periods, assuming a non-zero baseline. This comparison is not seasonally adjusted, normalized to service delivered, or causally linked to the simulated recommendations. Emissions changes could result from different factor assumptions, workload demand, seasons or reporting boundaries.

All provided monthly rows are **synthetic**. Imported and manually entered rows are **unverified** and retained only in the current browser. No real electricity meters, utility accounts, enterprise APIs or external emission factor services are connected.

For authoritative background: [GHG Protocol Scope 2 Guidance](https://ghgprotocol.org/scope-2-guidance), [ISO/IEC 21031:2024](https://www.iso.org/standard/86612.html), and [UN Sustainable Development Goals](https://sdgs.un.org/goals). References are not a claim of validation or certification.
