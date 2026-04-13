"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  {
    category: "Ordering & Customization",
    questions: [
      { q: "How long does production take?", a: "Each piece is handcrafted to order. Lead times usually range from 4 to 8 weeks depending on the complexity of the design and wood availability." },
      { q: "Can I request custom dimensions?", a: "Yes, we offer customization for most of our designs. If the standard options don't fit your space, please contact us for a bespoke quote." },
      { q: "What is your warranty policy?", a: "We offer a lifetime warranty on the structural integrity of our furniture. This covers joinery and craftsmanship defects." }
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      { q: "Do you ship internationally?", a: "Currently, we ship within the continental US and select European countries. Please contact us for a shipping quote to other locations." },
      { q: "What is white-glove delivery?", a: "Our white-glove service includes delivery to your room of choice, professional assembly, and removal of all packaging materials." },
      { q: "Can I pick up my order?", a: "Yes, local pickup is available at our workshop in Portland, Oregon. Please select 'Local Pickup' at checkout." }
    ]
  },
  {
    category: "Care & Maintenance",
    questions: [
      { q: "How do I care for my solid wood furniture?", a: "We recommend using a slightly damp cloth for regular cleaning. Avoid harsh chemicals and keep furniture away from direct heat sources to prevent cracking." },
      { q: "Should I oil my furniture?", a: "For oiled finishes, we recommend reapplying a natural furniture oil every 6-12 months to maintain the wood's luster and protection." }
    ]
  }
];

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className="text-xl font-display font-medium group-hover:text-accent transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
          size={24} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-6 text-muted leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-4xl px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">Help Center</h2>
          <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">Frequently Asked Questions</h1>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
            <input
              type="text"
              placeholder="Search for answers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary/50 border border-border rounded-full pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>
        </div>

        <div className="space-y-20">
          {faqs.map((group) => (
            <div key={group.category}>
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted mb-8 pb-4 border-b border-border/50">
                {group.category}
              </h2>
              <div className="space-y-0">
                {group.questions
                  .filter(q => q.q.toLowerCase().includes(search.toLowerCase()) || q.a.toLowerCase().includes(search.toLowerCase()))
                  .map((faq, i) => (
                    <AccordionItem key={i} question={faq.q} answer={faq.a} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-secondary rounded-[2rem] text-center">
          <h3 className="text-2xl font-display font-medium mb-4">Still have questions?</h3>
          <p className="text-muted mb-8">Our team is here to help you with anything you need.</p>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-medium hover:bg-primary/90 transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
