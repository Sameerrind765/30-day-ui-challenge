
import { Check } from "lucide-react";
import "./pricingcards.css"

const PricingCards = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "Perfect For Small Teams",
      buttonText: "Start Hiring",
      cardStyle: "linear-gradient(90deg, #efefef, #eeeeee)",
      features: [
        "3 Projects",
        "AI Applicant Screening",
        "AI Recruiter"
      ]
    },
    {
      name: "PROFESSIONAL",
      price: "$99",
      period: "/month",
      description: "Perfect For Growing Teams",
      buttonText: "Start Hiring",
      cardStyle: "linear-gradient(90deg, #dad7f1, #d5dcf1, #d1e0f0)",
      features: [
        "Unlimited Projects",
        "AI Applicant Screening",
        "AI Recruiter",
        "Risk-Free Guarantee"
      ]
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      period: "",
      description: "For Large Organizations",
      buttonText: "Contact Us",
      cardStyle: "linear-gradient(90deg, #efefef, #eeeeee)",
      features: [
        "Unlimited Projects",
        "AI Applicant Screening",
        "Custom Skill Assessments",
        "Custom AI Recruiter"
      ]
    }
  ];

  return (
    <div id="pricing-cards" className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4">
            Pricing plans
          </h1>
          <p className="text-xl text-gray-600">
            Choose the right plan for your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div id="price-cards-container" className="justify-center grid gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`price-cards rounded-3xl shadow-sm flex flex-col h-full gap-11 pb-[73px]`}
            >
              {/* Plan Name */}
              <div className="bg-white p-3.5 rounded-[30px] card-header">
                <div className="price-section" style={{ background: plan.cardStyle }}>
                  <h3 className="text-[12px] font-extrabold flex bg-white px-4 w-fit text-center justify-center h-[27px] items-center rounded-2xl text-gray-800 mb-6">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="font-bold">
                    <span className="text-5xl text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-xl">
                        {plan.period}
                      </span>
                    )}
                  </div>

                </div>
                {/* Description */}
                <p className="description font-medium font-inter">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <button className={`text-white w-full py-4 px-6 rounded-full font-meduim text-lg transition-colors duration-200 font-inter`}>
                  {plan.buttonText}
                </button>
              </div>


              {/* Features */}
              <div className="flex-1 price-card-features">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center font-medium font-inter">
                      <Check className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingCards;