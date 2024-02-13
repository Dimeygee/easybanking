import { Wrapper } from "../wrapper";
import { ArticlesCard } from "../articlescard";
export const Articles = () => {
  return (
    <div className="py-[100px] bg-verylGray">
      <Wrapper>
        <div className="mb-[50px] font-p_sans text-center md:text-start text-[30px] md:text-[46px]"><span>Latest Articles</span></div>
        <div className="flex gap-[40px] flex-col md:flex-row">
          <ArticlesCard
            image="/images/image-currency.jpg"
            author="By claire Robinson"
            title="Receive money in any currency with no fees"
            content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
          />
          <ArticlesCard
            image="/images/image-restaurant.jpg"
            author="By Wilson Hutton"
            title="Treat yourself without worrying about money"
            content="Our simple budgeting feature allows you to separate out your spending and set realistic limits each mnth. That means you..."
          />
          <ArticlesCard
            image="/images/image-plane.jpg"
            author="By Wilson Hutton"
            title="Take your Easybank card whereveer you go"
            content="We want you to enjioy your travels. This is why we dont't charge any fees on purchases while you're abroad. we'll even show you..."
          />
          <ArticlesCard
            image="/images/image-confetti.jpg"
            author="By claire Robinson"
            title="Our Invite-only Beta accounts are now live!"
            content="After a lot of hand work by the whole team, We're excited to launch our closed beta. It's easy to request an invite through the site..."
          />
        </div>
      </Wrapper>
    </div>
  );
};
