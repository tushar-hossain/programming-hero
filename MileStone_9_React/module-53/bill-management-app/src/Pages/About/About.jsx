import React from "react";

const About = () => {
  return (
    <div className="py-12">
      <h1 className="font-bold text-2xl lg:text-3xl">About</h1>
      <p className="text-justify mt-5 mb-5">
        Welcome to <strong>SmartBill</strong>, your reliable partner in modern
        bill management. At SmartBill, we believe that managing household and
        personal expenses shouldn't be stressful or time-consuming. That's why
        we built a simple, user-friendly platform to help individuals and
        families organize, track, and pay their monthly bills—all in one place.
        From electricity and gas to water, internet, tuition, and credit card
        bills, SmartBill brings together all your recurring payments under a
        single dashboard. No more searching through emails or paper statements.
        With real-time due date tracking and clear visual indicators, you’ll
        always know what’s due, when, and how much. Our goal is to simplify your
        life and give you more control over your finances. Whether you're
        managing bills for yourself or your entire family, SmartBill keeps
        everything organized and accessible. We’ve designed our application
        using modern technologies like React and responsive layouts so it works
        smoothly on mobile devices, tablets, and desktops. At SmartBill, your
        financial well-being is our priority. We're constantly working to
        improve features, enhance security, and provide a seamless experience
        that helps you stay ahead of your payments and avoid unnecessary late
        fees. Thank you for choosing SmartBill. Let's make bill management
        smart, simple, and stress-free—together.
      </p>
      <div>
        <h1 className="font-bold md:text-2xl mb-3">
          The Following Services Will Be Covered Under Bill Management:
        </h1>
        <li>
          Collection of small-value cash deposits and cash withdrawals (as per
          ceilings set by the Bank following central bank guidelines)
        </li>
        <li>Disbursement of inward foreign remittance</li>
        <li>
          Facilitation of small-value loan disbursement and recovery of loan
          installments
        </li>
        <li>Utility bill payment services</li>
        <li>Fund transfer facilitation</li>
      </div>
    </div>
  );
};

export default About;
