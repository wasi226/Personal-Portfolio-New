// import React from "react";
// import { motion } from "framer-motion";
// import { GalleryItems } from "@/entities/Gallery";

// const typeStyles = {
//   Certificate: "bg-red-600/20 text-red-200 border-red-600/30",
//   Project: "bg-cyan-500/20 text-cyan-100 border-cyan-500/30",
//   Visual: "bg-emerald-500/20 text-emerald-100 border-emerald-500/30",
// };

// export default function GallerySection() {
//   return (
//     <div id="gallery" className="w-full py-20 text-white">
//       <div className="container mx-auto px-6 relative z-20 w-full">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
//           >
//             Gallery <span className="text-red-600">Highlights</span>
//           </motion.h2>
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "120px" }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="h-[2px] bg-red-600 mx-auto"
//           ></motion.div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {GalleryItems.map((item, index) => (
//             <motion.article
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.05, duration: 0.6 }}
//               className="group rounded-2xl overflow-hidden border border-red-600/20 bg-gradient-to-br from-[#0f131f]/70 to-[#0b0d14]/40 shadow-lg hover:shadow-red-600/20 transition-all duration-500"
//             >
//               <div className="relative aspect-[4/3] overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-in-out"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80"></div>
//               </div>
//               <div className="p-4 flex items-start justify-between gap-3">
//                 <div>
//                   <p className="text-sm text-gray-300 mb-1">{item.type}</p>
//                   <h3 className="text-lg font-semibold text-white group-hover:text-red-200 transition-colors">
//                     {item.title}
//                   </h3>
//                 </div>
//                 <span
//                   className={`text-[11px] uppercase tracking-[0.25em] border rounded-full px-3 py-1 ${
//                     typeStyles[item.type] || "bg-white/10 text-white/70 border-white/20"
//                   }`}
//                 >
//                   {item.type}
//                 </span>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import GalleryCarousel from "@/components/portfolio/GalleryCarousel";

export default function GallerySection() {
  return (
    <div id="gallery" className="w-full text-white">
      <div className="text-center pt-20">
        <h2 className="text-5xl font-extrabold">
          Gallery <span className="text-red-600">Highlights</span>
        </h2>
      </div>

      <GalleryCarousel />
    </div>
  );
}
