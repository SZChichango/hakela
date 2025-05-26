import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MainHeader } from "@/components/main-header";
import MainFooter from "@/components/main-footer";

export default function Home() {
  return (
    <>
      <MainHeader />
      <main>
        <section className="hero bg-[url(/images/landing_page-1.jpg)] bg-cover bg-center p-16 h-screen">
          <h1 className="text-white text-4xl font-bold m-16 text-bold">
            Professional Invoices & Mobile Payments in One Click
          </h1>
          <Link
            href="#"
            className="text-white p-4 bg-yellow-400 rounded-4xl mx-16 border divide-yellow-400 hover:bg-transparent hover:text-yellow-400 duration-300"
          >
            Get Started
          </Link>
        </section>
        <section id="services" className="p-4 flex gap-4 flex-wrap mb-8">
          <div className="service w-[150] grow flex flex-col items-center gap-4">
            <h3 className="font-bold text-xl text-center">
              Create and Send Invoices Instantly
            </h3>
            <div className="icon-container bg-blue-400 p-4 rounded-2xl">
              <FontAwesomeIcon
                className="w-[40]"
                icon={faFileInvoice}
                style={{ color: "white" }}
              />
            </div>
            <div className="text-container">
              <p>
                No more messy receipts or missed payments. With Hakela, you can
                generate beautiful invoices and receipts customized for M-Pesa,
                E-Mola, MKesh, and more — in just minutes.
              </p>
              <ul className="list-disc pl-16">
                <li>
                  Simple Invoice Creator — Add services, amounts, and taxes
                  easily.
                </li>
                <li>Local & USD Currency — Show totals in both currencies.</li>
                <li>
                  Automatic Receipts — Receipts are generated and sent after
                  payment.
                </li>
              </ul>
            </div>
          </div>
          <div className="service w-[150] grow flex flex-col items-center gap-4">
            <h3 className="font-bold text-xl text-center">
              Let Clients Pay Straight from the Invoice
            </h3>
            <div className="icon-container bg-blue-400 p-4 rounded-2xl">
              <FontAwesomeIcon
                className="w-[50]"
                icon={faMoneyBillWave}
                style={{ color: "white" }}
              />
            </div>
            <div className="text-container">
              <p>Make it easy for your clients to pay you.</p>
              <ul className="list-disc pl-16">
                <li>
                  Built-in Mobile Payment Integration — M-Pesa, E-Mola, MKesh.
                </li>
                <li>
                  Secure Payments — Clients receive instant payment
                  confirmation.
                </li>
                <li>
                  Track Everything — See when invoices are viewed, paid, and
                  completed.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full flex flex-col items-center p-8">
          <h1 className="font-bold text-xl">Frequently Asked Questions</h1>
          <Accordion className="max-w-[700] w-full" type="single" collapsible>
            <AccordionItem className="cursor-pointer" value="item-1">
              <AccordionTrigger>What is Hakela?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Hakela Inc. is an easy-to-use tool that lets you create
                  professional invoices, accept mobile wallet payments (like
                  M-Pesa, E-Mola, MKesh), and automatically generate receipts —
                  all from one simple link.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="cursor-pointer" value="item-2">
              <AccordionTrigger>How do I create an invoice?</AccordionTrigger>
              <AccordionContent>
                <p>
                  After signing up, just click "Create Invoice," fill in your
                  client’s details, add your services or products, and set the
                  amount. You can send the invoice via a link, email, or
                  WhatsApp.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="cursor-pointer" value="item-3">
              <AccordionTrigger>
                Can my clients pay directly from the invoice?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes! Every invoice includes a “Pay Now” button. Your clients
                  can pay using mobile money platforms like M-Pesa, E-Mola,
                  MKesh, or bank card (depending on your setup).
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What happens after a client pays?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Once payment is confirmed, Hakela Inc. automatically marks the
                  invoice as "Paid" and instantly generates a professional
                  receipt you can send to your client.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="cursor-pointer" value="item-5">
              <AccordionTrigger>
                What mobile payment methods do you support?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We currently support M-Pesa, E-Mola, MKesh, and selected card
                  payments. We’re working to add more options soon!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How much does it cost to use Hakela Inc.?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  You can start for free with limited invoices each month. For
                  unlimited invoices, custom branding, and advanced features,
                  you can upgrade to Premium at affordable monthly rates.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Is my data secure?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Absolutely. We use secure encryption for your data and
                  transactions. Your invoices, client info, and payment details
                  are protected at all times.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Can I customize my invoices and receipts?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes! You can add your business name, logo, contact details,
                  and even personalize the design with Premium.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="cursor-pointer" value="item-9">
              <AccordionTrigger>
                How do I contact support if I need help?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  You can reach our support team directly via the Help Center or
                  email us at{" "}
                  <a href="mailto:support@hakela.co.mz">support@hakela.co.mz</a>
                  . We usually respond within 24 hours.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <MainFooter />
    </>
  );
}
