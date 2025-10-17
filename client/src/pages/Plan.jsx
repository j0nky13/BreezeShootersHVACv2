import PageHero from "../components/plan/PageHero";
import PlanBenefits from "../components/plan/PlanBenefits";
import PlanTiers from "../components/plan/PlanTiers";
import PlanFAQ from "../components/plan/PlanFAQ";
import PlanCTA from "../components/plan/PlanCTA";

export default function Plan() {
  return (
    <>
      <PageHero />
      <PlanBenefits />
      {/* <PlanTiers /> */}
      <PlanFAQ />
      <PlanCTA />
    </>
  );
}