import React, { useEffect, useState } from "react";
import CarouselSimple from "../../Components/CarouselSimple/CarouselSimple";
import { useLoaderData } from "react-router";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import downloadImg from "../../assets/How_to_download.svg";
import billImg from "../../assets/bill.svg";
import introImg from "../../assets/introduction.svg";
import productImg from "../../assets/Product-Features.svg";
import billManegeImg from "../../assets/MicrosoftTeams.png";

const Home = () => {
  const data = useLoaderData();
  const [service, setService] = useState([]);

  useEffect(() => {
    setService(data.slice(0, 10));
  }, [data]);

  return (
    <div className="py-12">
      <main>
        <section className="bg-green-500 px-10 py-10 rounded-lg shadow-lg">
          <CarouselSimple />
        </section>

        {/* Bill Management */}
        <section className="py-8 text-center bg-base-300 my-8 px-5 rounded-lg shadow-lg">
          <h1 className="text-2xl lg:text-4xl font-bold">Bill Management</h1>
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <p className="mt-5 text-justify lg:w-[50%]">
              Managing multiple bills every month can be overwhelming—especially
              when it involves different services, payment methods, due dates,
              and providers. That’s where SmartBill comes in. Our web-based bill
              management application is designed to simplify your life by
              keeping all your essential payments in one place. Whether it’s
              your electricity bill from DESCO, your gas payment to Titas,
              tuition fees for your child’s school, or your monthly internet
              bill—SmartBill helps you organize, track, and pay everything on
              time. With SmartBill, you no longer need to set manual reminders
              or dig through emails to find bill notifications. The platform
              supports a wide range of bill types including electricity, gas,
              water, internet, credit card payments, tuition, school and college
              fees, and more. Each bill entry includes the bill type, amount
              due, due date, service provider, and even an icon for easy visual
              recognition. Our intuitive dashboard displays upcoming and overdue
              bills clearly, while the one-click "Pay Now" button redirects you
              to a secure payment page where you can select from various bank
              cards. The application is responsive, user-friendly, and built
              with modern web technologies like React, making it fast, reliable,
              and visually appealing on all devices. Whether you're a student, a
              parent, or a busy professional, SmartBill saves you time, reduces
              stress, and ensures you never miss another due date. Join the
              growing number of users who trust SmartBill to manage their
              monthly expenses efficiently and effortlessly. Take control of
              your finances—start using SmartBill today.
            </p>

            <div className="">
              <img className="" src={billManegeImg} alt="" />
            </div>
          </div>
        </section>

        {/* Service */}
        <section className="py-8 text-center bg-gray-800 my-8 px-5 rounded-lg text-white shadow-lg">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-3">Services</h1>
            <p className="text-base-300 mb-5">
              Bill Management Agent offers the Following Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {service.map((card) => (
              <ServiceCard key={card.id} card={card} />
            ))}
          </div>
        </section>

        {/* overview */}
        <section className="grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-5 text-center mt-10">
          <div>
            <img
              className="w-25 h-25 mx-auto"
              src={introImg}
              alt="introduction image"
            />
            <h2 className="font-bold">OVERVIEW</h2>
          </div>
          <div>
            <img className="w-25 h-25 mx-auto" src={billImg} alt="bill image" />
            <h2 className="font-bold">WHY BILL MANAGEMENT</h2>
          </div>
          <div>
            <img
              className="w-25 h-25 mx-auto"
              src={productImg}
              alt="product image"
            />
            <h2 className="font-bold">FEATURES</h2>
          </div>
          <div>
            <img
              className="w-25 h-25 mx-auto"
              src={downloadImg}
              alt="product image"
            />
            <h2 className="font-bold">HOW TO DOWNLOAD</h2>
          </div>
        </section>

        {/* FAQs */}
        <section className="my-12 py-12 bg-base-300 px-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold lg:text-3xl mb-5">FAQs</h1>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
              What is this Bill Management application?
            </div>
            <div className="collapse-content text-sm">
              This is a digital platform that helps you track, manage, and pay
              your utility bills like electricity, gas, water, internet, credit
              cards, and educational fees—all from one place.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
              Is it free to use?
            </div>
            <div className="collapse-content text-sm">
              Yes! Our basic features are completely free. You can view bills,
              receive payment reminders, and track due dates without any cost.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
              How do I pay a bill?
            </div>
            <div className="collapse-content text-sm">
              Click the “Pay” button on any bill card, choose your preferred
              payment method (bank card, mobile banking, etc.), and follow the
              instructions to complete your transaction securely.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
              Can I track past payments?
            </div>
            <div className="collapse-content text-sm">
              Yes. The application maintains a detailed history of your paid
              bills so you can view previous transactions anytime.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
              What happens if I miss a due date?
            </div>
            <div className="collapse-content text-sm">
              If a bill goes unpaid after the due date, you may be subject to
              late fees or service interruption, depending on the service
              provider. Our system will send you reminders before due dates to
              help you avoid this.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
