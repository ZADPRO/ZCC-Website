
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import decrypt from "../../Helper/helper";
// import heroImg1 from "../../assets/ACHIVEMENTS.jpg"; // ✅ Import background image

// interface Achievement {
//   achievementTitle: string;
//   achievementDescription: string;
//   achievedOn: string;
// }

// interface AchievementsResponse {
//   success: boolean;
//   Achievements?: Achievement[];
// }

// const Achievements: React.FC = () => {
//   const [listAchievements, setListAchievements] = useState<Achievement[]>([]);
//   const navigate = useNavigate();

//   const fetchAchievements = () => {
//     axios
//       .post(
//         `${import.meta.env.VITE_API_URL}/UserRoutes/listAchievements`,
//         { refProductsId: import.meta.env.VITE_PRODUCT_ID },
//         { headers: { "Content-Type": "application/json" } }
//       )
//       .then((response) => {
//         const data = decrypt<AchievementsResponse>(
//           response.data[1],
//           response.data[0],
//           import.meta.env.VITE_ENCRYPTION_KEY
//         );

//         if (data.success) {
//           setListAchievements(data.Achievements || []);
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to listAchievements:", error);
//       });
//   };

//   useEffect(() => {
//     fetchAchievements();
//     window.scrollTo(0, 0);
//   }, []);

//   const stripHtmlTags = (html: string = "") => {
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = html;
//     return tempDiv.textContent || tempDiv.innerText || "";
//   };

//   return (
//     <section
//       className="relative min-h-screen flex flex-col justify-center px-6 py-16"
//       style={{
//         backgroundImage: `url(${heroImg1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Dark overlay for text readability */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       <div className="relative max-w-6xl mx-auto text-center mb-12 text-white">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{fontFamily:"DM Sans"}}>Achievements</h2>
//         <p className="text-lg max-w-3xl mx-auto mb-10" style={{fontFamily:"DM Sans"}}>
//           Celebrating milestones and successes of ZadBy Cricket Club and its
//           members.
//         </p>
//       </div>

//       {/* Animated Cards */}
//       <motion.div
//         className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
//         initial="hidden"
//         animate="show"
//         variants={{
//           hidden: { opacity: 0 },
//           show: {
//             opacity: 1,
//             transition: { staggerChildren: 0.2 },
//           },
//         }}
//       >
//         {listAchievements.slice(0, 3).map((achievement, index) => (
//           <motion.div
//             key={index}
//             className="bg-white/90 backdrop-blur rounded-lg shadow p-6 text-left cursor-pointer"
//             onClick={() =>
//               navigate("/achievement-view", { state: { achievement } })
//             }
//             variants={{
//               hidden: { opacity: 0, y: 40, scale: 0.9 },
//               show: { opacity: 1, y: 0, scale: 1 },
//             }}
//             whileHover={{
//               scale: 1.05,
//               rotate: 1,
//               boxShadow: "0px 8px 20px rgba(45,20,135,0.3)",
//             }}
//             whileTap={{ scale: 0.97 }}
//             transition={{ type: "spring", stiffness: 150, damping: 12 }}
//           >
//             {/* <div className="flex justify-between items-center mb-3">
//               <h3
//                 className="font-semibold text-lg truncate" style={{fontFamily:"DM Sans"}}
//                 title={achievement.achievementTitle}
//               >
//                 {achievement.achievementTitle}
//               </h3>
//               <p className="text-sm text-gray-500" style={{fontFamily:"DM Sans"}}>{achievement.achievedOn}</p>
//             </div> */}
//             <div className="flex justify-between items-center mb-3 gap-2">
//   <h3
//     className="font-semibold text-lg leading-snug max-w-[70%] truncate"
//     style={{ fontFamily: "DM Sans" }}
//     title={achievement.achievementTitle} // full title on hover
//   >
//     {achievement.achievementTitle}
//   </h3>
//   <p
//     className="text-sm text-gray-500 whitespace-nowrap"
//     style={{ fontFamily: "DM Sans" }}
//   >
//     {achievement.achievedOn}
//   </p>
// </div>

//             <p className="text-gray-600 text-sm line-clamp-2" style={{fontFamily:"DM Sans"}}>
//               {stripHtmlTags(achievement.achievementDescription).length > 100
//                 ? `${stripHtmlTags(
//                     achievement.achievementDescription
//                   ).slice(0, 100)}...`
//                 : stripHtmlTags(achievement.achievementDescription)}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* View All Button */}
//       <motion.div
//         className="relative text-center mt-8"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//       >
//         <motion.button
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/achievements-all")}
//           className="bg-[#fdbe1b] hover:bg-[#18223d] text-white px-6 py-3 rounded-full font-semibold transition"
//         >
//           View All Achievements
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// };

// export default Achievements;
/////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import decrypt from "../../Helper/helper";
// import heroImg1 from "../../assets/ACHIVEMENTS.jpg"; // ✅ Import background image

// interface Achievement {
//   achievementTitle: string;
//   achievementDescription: string;
//   achievedOn: string;
// }

// interface AchievementsResponse {
//   success: boolean;
//   Achievements?: Achievement[];
// }

// const Achievements: React.FC = () => {
//   const [listAchievements, setListAchievements] = useState<Achievement[]>([]);
//   const navigate = useNavigate();

//   const fetchAchievements = () => {
//     axios
//       .post(
//         `${import.meta.env.VITE_API_URL}/UserRoutes/listAchievements`,
//         { refProductsId: import.meta.env.VITE_PRODUCT_ID },
//         { headers: { "Content-Type": "application/json" } }
//       )
//       .then((response) => {
//         const data = decrypt<AchievementsResponse>(
//           response.data[1],
//           response.data[0],
//           import.meta.env.VITE_ENCRYPTION_KEY
//         );

//         if (data.success) {
//           setListAchievements(data.Achievements || []);
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to listAchievements:", error);
//       });
//   };

//   useEffect(() => {
//     fetchAchievements();
//     window.scrollTo(0, 0);
//   }, []);

//   const stripHtmlTags = (html: string = "") => {
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = html;
//     return tempDiv.textContent || tempDiv.innerText || "";
//   };

//   return (
//     <section
//       className="relative min-h-screen flex flex-col justify-center px-6 py-16"
//       style={{
//         backgroundImage: `url(${heroImg1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Dark overlay for text readability */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Heading */}
//       <div className="relative max-w-6xl mx-auto text-center mb-12 text-white">
//         <h2
//           className="text-3xl sm:text-4xl font-bold mb-4"
//           style={{ fontFamily: "DM Sans" }}
//         >
//           Achievements
//         </h2>
//         <p
//           className="text-lg max-w-3xl mx-auto mb-10"
//           style={{ fontFamily: "DM Sans" }}
//         >
//           Celebrating milestones and successes of ZadBy Cricket Club and its
//           members.
//         </p>
//       </div>

//       {/* Animated Cards */}
//       <motion.div
//         className="relative grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
//         initial="hidden"
//         animate="show"
//         variants={{
//           hidden: { opacity: 0 },
//           show: {
//             opacity: 1,
//             transition: { staggerChildren: 0.2 },
//           },
//         }}
//       >
//         {listAchievements.slice(0, 3).map((achievement, index) => (
//           <motion.div
//             key={index}
//             className="bg-white/90 backdrop-blur rounded-lg shadow p-4 sm:p-5 md:p-6 w-full max-w-sm mx-auto text-left cursor-pointer"
//             onClick={() =>
//               navigate("/achievement-view", { state: { achievement } })
//             }
//             variants={{
//               hidden: { opacity: 0, y: 40, scale: 0.9 },
//               show: { opacity: 1, y: 0, scale: 1 },
//             }}
//             whileHover={{
//               scale: 1.05,
//               rotate: 1,
//               boxShadow: "0px 8px 20px rgba(45,20,135,0.3)",
//             }}
//             whileTap={{ scale: 0.97 }}
//             transition={{ type: "spring", stiffness: 150, damping: 12 }}
//           >
//             {/* Title + Date */}
//             <div className="flex justify-between items-center mb-3 gap-2">
//               <h3
//                 className="font-semibold text-base sm:text-lg leading-snug max-w-[65%] truncate"
//                 style={{ fontFamily: "DM Sans" }}
//                 title={achievement.achievementTitle}
//               >
//                 {achievement.achievementTitle}
//               </h3>
//               <p
//                 className="text-xs sm:text-sm text-gray-500 whitespace-nowrap"
//                 style={{ fontFamily: "DM Sans" }}
//               >
//                 {achievement.achievedOn}
//               </p>
//             </div>

//             {/* Description */}
//             <p
//               className="text-gray-600 text-xs sm:text-sm line-clamp-2"
//               style={{ fontFamily: "DM Sans" }}
//             >
//               {stripHtmlTags(achievement.achievementDescription).length > 100
//                 ? `${stripHtmlTags(
//                     achievement.achievementDescription
//                   ).slice(0, 100)}...`
//                 : stripHtmlTags(achievement.achievementDescription)}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* View All Button */}
//       <motion.div
//         className="relative text-center mt-8"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//       >
//         <motion.button
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/achievements-all")}
//           className="bg-[#fdbe1b] hover:bg-[#18223d] text-white px-6 py-3 rounded-full font-semibold transition"
//         >
//           View All Achievements
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// };

// export default Achievements;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import decrypt from "../../Helper/helper";
import heroImg1 from "../../assets/ACHIVEMENTS.jpg"; // ✅ Import background image

interface Achievement {
  achievementTitle: string;
  achievementDescription: string;
  achievedOn: string;
}

interface AchievementsResponse {
  success: boolean;
  Achievements?: Achievement[];
}

const Achievements: React.FC = () => {
  const [listAchievements, setListAchievements] = useState<Achievement[]>([]);
  const navigate = useNavigate();

  const fetchAchievements = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/UserRoutes/listAchievements`,
        { refProductsId: import.meta.env.VITE_PRODUCT_ID },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        const data = decrypt<AchievementsResponse>(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );

        if (data.success) {
          setListAchievements(data.Achievements || []);
        }
      })
      .catch((error) => {
        console.error("Failed to listAchievements:", error);
      });
  };

  useEffect(() => {
    fetchAchievements();
    window.scrollTo(0, 0);
  }, []);

  const stripHtmlTags = (html: string = "") => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-4 py-12"
      style={{
        backgroundImage: `url(${heroImg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Heading */}
      <div className="relative max-w-4xl mx-auto text-center mb-10 text-white">
        <h2
          className="text-2xl sm:text-4xl font-bold mb-3"
          style={{ fontFamily: "DM Sans" }}
        >
          Achievements
        </h2>
        <p
          className="text-base sm:text-lg max-w-2xl mx-auto"
          style={{ fontFamily: "DM Sans" }}
        >
          Celebrating milestones and successes of ZadBy Cricket Club and its
          members.
        </p>
      </div>

      {/* Animated Cards */}
      <motion.div
        className="relative grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {listAchievements.slice(0, 3).map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-white/90 backdrop-blur rounded-lg shadow p-3 sm:p-4 w-[90%] max-w-xs mx-auto text-left cursor-pointer"
            onClick={() =>
              navigate("/achievement-view", { state: { achievement } })
            }
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0px 8px 20px rgba(45,20,135,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
          >
            {/* Title + Date */}
            <div className="flex justify-between items-center mb-2 gap-2">
              <h3
                className="font-semibold text-sm sm:text-base leading-snug max-w-[65%] truncate"
                style={{ fontFamily: "DM Sans" }}
                title={achievement.achievementTitle}
              >
                {achievement.achievementTitle}
              </h3>
              <p
                className="text-xs text-gray-500 whitespace-nowrap"
                style={{ fontFamily: "DM Sans" }}
              >
                {achievement.achievedOn}
              </p>
            </div>

            {/* Description */}
            <p
              className="text-gray-600 text-xs sm:text-sm line-clamp-2"
              style={{ fontFamily: "DM Sans" }}
            >
              {stripHtmlTags(achievement.achievementDescription).length > 100
                ? `${stripHtmlTags(
                    achievement.achievementDescription
                  ).slice(0, 100)}...`
                : stripHtmlTags(achievement.achievementDescription)}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        className="relative text-center mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/achievements-all")}
          className="bg-[#fdbe1b] hover:bg-[#18223d] text-white px-5 py-2.5 rounded-full font-semibold text-sm sm:text-base transition"
        >
          View All Achievements
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Achievements;

