import { Wrapper } from "../wrapper";
import { FeatureCard } from "../featurecard";

export const WhySection = () => {
  return (
    <div className="bg-[hsl(220,16%,96%)]">
      <Wrapper>
        <div className="py-[70px] md:py-[100px]">
          <div className="font-p_sans mb-[70px]">
            <h4 className="text-[36px] text-center md:text-start text-darkblue">Why choose easybank?</h4>
            <p className="mt-[25px] text-center md:text-start text-[hsl(233,8%,62%)]">
              We leverge open Banking to turn your bank account into your
              financial hub.
            </p>
            <p className="text-center md:text-start text-[hsl(233,8%,62%)]">Control your finance like never before.</p>
          </div>
          <div className="flex gap-[40px] flex-col md:flex-row">
            <FeatureCard
              image="/images/icon-online.svg"
              title="Online Banking"
              desc="Our modern web and mobile application allow you to keep track of your finances wherever you are in the world."
            />
            <FeatureCard
              image="/images/icon-budgeting.svg"
              title="Simple Budgeting"
              desc="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
            />
            <FeatureCard
              image="/images/icon-onboarding.svg"
              title="Fast Onboarding"
              desc="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
            />
            <FeatureCard
              image="/images/icon-api.svg"
              title="Open Api"
              desc="Manage your savings, investment, pension, and much more from one account. Tracking your money has never been easier."
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
