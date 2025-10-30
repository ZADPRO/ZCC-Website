
// import React, { useState } from "react";
// import AdminFeedback from "./AdminFeedback";
// import ListFeedback from "./ListFeedback";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import grpdr from "../../assets/ground1.jpg";



// const Feedback: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openIndex, setOpenIndex] = useState<number | null>(null); // ✅ ADD THIS
//   // ZCC FAQs
// const faqs = [
//   {
//     question: "How do I book a ground?",
//     answer:
//       "Visit the Booking section or call us directly. Choose your date, duration, and preferred pitch — we’ll confirm your cricket ground booking slot.",
//   },
//   {
//     question: "Can I rent just the ground (without staff)?",
//     answer:
//       "Yes, you can reserve a cricket ground for rent; we also offer optional support services such as scorers, umpires, and match coordination.",
//   },
//   {
//     question: "Do you host female cricket tournaments?",
//     answer:
//       "Absolutely. We regularly schedule female cricket tournaments and promote inclusive competition.",
//   },
//   {
//     question: "How far is your ground from me?",
//     answer:
//       "Use our map and ‘Nearest Ground’ locator to find the cricket ground near you or the nearest playground in your vicinity.",
//   },
//   {
//     question: "Does your facility function like a Room and food?",
//     answer:
//       "Yes — we offer Rooms and food options with a cricket ground environment, combining sport with comfort for players and spectators.",
//   },
// ];


//   return (
//     <div className="">
//       <section id="feedback" className="scroll-mt-50">
//         <div className="px-6 py-30 bg-blue-50 ">
//           <h2
//             className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#fdbe1b]"
//             style={{ fontFamily: "DM Sans" }}
//           >
//             Feedback
//           </h2>

//           {/* ✅ List of Reviews */}
//           <ListFeedback />

//           {/* FAQ section */}
//           {/* ✅ FAQ Section */}
// <div className="mt-20 bg-white rounded-xl shadow-md max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center p-8">


//   {/* Right: FAQ Content */}
//   <div>
//     {/* Heading */}
//     <h3
//       className="text-[#fdbe1b] text-lg font-bold uppercase mb-2"
//       style={{ fontFamily: "DM Sans" }}
//     >
//       FAQs
//     </h3>

//     {/* Intro paragraph */}
//     <h2
//       className="text-3xl font-bold text-[#18223d] mb-4 leading-snug"
//       style={{ fontFamily: "DM Sans" }}
//     >
//       Curious about ZCC? Let’s clear things up together.
//     </h2>
//     <p
//       className="text-gray-600 text-base mb-6"
//       style={{ fontFamily: "DM Sans" }}
//     >
//       Whether you’re booking a pitch, joining a tournament, or looking for a
//       cricket-themed getaway, here’s everything you need to know about our
//       grounds and facilities.
//     </p>

//     {/* Accordion */}
//     {faqs.map((faq, index) => (
//       // <div key={index} className="py-3">
//           <div key={index} className="border-b border-[#fdbe1b] py-3">      
//         <button
//           onClick={() => setOpenIndex(openIndex === index ? null : index)}
//           className="flex justify-between items-center w-full text-left text-base sm:text-lg font-semibold text-[#18223d] hover:text-[#fdbe1b] transition-colors"
//         >
//           {faq.question}
//           {openIndex === index ? (
//             <FaMinus className="text-[#fdbe1b]" />
//           ) : (
//             <FaPlus className="text-[#fdbe1b]" />
//           )}
//         </button>

//         {openIndex === index && (
//           <p className="text-gray-600 mt-2 text-sm leading-relaxed">
//             {faq.answer}
//           </p>
//         )}
//       </div>
//     ))}
//   </div>
//    {/* Left: Ground Image */}

//   {/* Right: Ground Image (Hidden on Mobile, Visible on md and above) */}
// <div className="hidden md:flex justify-center">
//   <img
//     src={grpdr}
//     alt="ZCC Ground"
//     className="rounded-xl shadow-md w-full max-w-md object-cover"
//   />
// </div>

// </div>


//           {/* ✅ Share Feedback Button */}
//           <div className="flex justify-center mt-10">
//             <button
//               onClick={() => setIsOpen(true)}
//               className="px-6 py-3 bg-[#fdbe1b] text-white rounded-md hover:bg-[#18223d] transition"
//               style={{ fontFamily: "DM Sans" }}
//             >
//               Share Your Feedback
//             </button>
//           </div>

//           {/* ✅ Popup Modal with AdminFeedback */}
//           {isOpen && (
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//               <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-5 relative">
//                 {/* Close Button */}
//                 <button
//                   className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
//                   onClick={() => setIsOpen(false)}
//                   aria-label="Close"
//                 >
//                   ✕
//                 </button>

//                 {/* Feedback Form */}
//                 <div className="max-h-[80vh] pr-1">
//                   <AdminFeedback />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Feedback;

import React, { useState } from "react";
import { motion } from "framer-motion";
import AdminFeedback from "./AdminFeedback";
import ListFeedback from "./ListFeedback";
import { FaPlus, FaMinus } from "react-icons/fa";
import grpdr from "../../assets/cricketer-field-action.jpg";

const Feedback: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ZCC FAQs
  const faqs = [
    {
      question: "How do I book a ground?",
      answer:
        "Visit the Booking section or call us directly. Choose your date, duration, and preferred pitch — we’ll confirm your cricket ground booking slot.",
    },
    {
      question: "Can I rent just the ground (without staff)?",
      answer:
        "Yes, you can reserve a cricket ground for rent; we also offer optional support services such as scorers, umpires, and match coordination.",
    },
    {
      question: "Do you host female cricket tournaments?",
      answer:
        "Absolutely. We regularly schedule female cricket tournaments and promote inclusive competition.",
    },
    {
      question: "How far is your ground from me?",
      answer:
        "Use our map and ‘Nearest Ground’ locator to find the cricket ground near you or the nearest playground in your vicinity.",
    },
    {
      question: "Does your facility function like a Room and food?",
      answer:
        "Yes — we offer Rooms and food options with a cricket ground environment, combining sport with comfort for players and spectators.",
    },
  ];

  return (
    <div className="">
      <section id="feedback" className="scroll-mt-50">
        <div className="px-6 py-30 bg-blue-50">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#fdbe1b]"
            style={{ fontFamily: "DM Sans" }}
          >
            Feedback
          </h2>

          {/* ✅ List of Reviews */}
          <ListFeedback />

          {/* ✅ FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-lg shadow-md max-w-3xl xl:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6"
          >
            {/* Left: FAQ Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3
                className="text-[#fdbe1b] text-sm font-bold uppercase mb-1"
                style={{ fontFamily: "DM Sans" }}
              >
                FAQs
              </h3>

              <h2
                className="text-2xl font-bold text-[#18223d] mb-3 leading-snug"
                style={{ fontFamily: "DM Sans" }}
              >
                Curious about ZCC? Let’s clear things up together.
              </h2>

              <p
                className="text-gray-600 text-sm mb-4 leading-relaxed"
                style={{ fontFamily: "DM Sans" }}
              >
                Whether you’re booking a pitch, joining a tournament, or looking
                for a cricket-themed getaway, here’s everything you need to know
                about our grounds and facilities.
              </p>

              {/* Accordion */}
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="border-b border-[#fdbe1b] py-2"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex justify-between items-center w-full text-left text-sm sm:text-base font-semibold text-[#18223d] hover:text-[#fdbe1b] transition-colors"
                  >
                    {faq.question}
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <FaMinus className="text-[#fdbe1b]" />
                      ) : (
                        <FaPlus className="text-[#fdbe1b]" />
                      )}
                    </motion.span>
                  </button>

                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-600 mt-1 text-xs leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Ground Image */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="hidden md:flex justify-center items-start"
            >
              <img
                src={grpdr}
                alt="ZCC Ground"
                className="rounded-lg shadow-md w-full max-w-xs h-[320px] object-cover object-top"
              />
            </motion.div>
          </motion.div>


          {/* ✅ Share Feedback Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 bg-[#fdbe1b] text-white rounded-md hover:bg-[#18223d] transition"
              style={{ fontFamily: "DM Sans" }}
            >
              Share Your Feedback
            </button>
          </div>

          {/* ✅ Popup Modal with AdminFeedback */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-5 relative">
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                >
                  ✕
                </button>

                {/* Feedback Form */}
                <div className="max-h-[80vh] pr-1">
                  <AdminFeedback />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Feedback;




