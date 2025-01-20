// import { Building2, Users, Trophy } from "lucide-react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";

// export default function FeaturesSection() {
//   const features = [
//     {
//       title: "Industry Expertise",
//       description:
//         "CASEY'B understands the unique demands of different industries, allowing clients to benefit from speculative team matches.",
//       icon: Building2,
//     },
//     {
//       title: "Tailored Recruitment",
//       description:
//         "Having a dedicated team focused on highlighting best matches while providing personalized recruitment solutions.",
//       icon: Users,
//     },
//     {
//       title: "Extensive Network",
//       description:
//         "Our expertise helps your company scaling top-tier resources who are actively looking to explore new opportunities.",
//       icon: Users,
//     },
//     {
//       title: "Proven Success",
//       description:
//         "We've built a strong reputation for successful placements driving green growth and business success.",
//       icon: Trophy,
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-[#1D3B35] p-6 md:p-8 rounded-xl text-white">
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">
//               We are Your <br />
//               Co-to Agency <br />
//               Because We Have...
//             </h2>
//           </div>
//           <div className="grid sm:grid-cols-2 gap-4">
//             {features.map((feature) => (
//               <Card key={feature.title} className="border-none shadow-md">
//                 <CardHeader>
//                   <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-[#4CD4C1] mb-2" />
//                   <CardTitle className="text-[#1D3B35] text-lg md:text-xl">
//                     {feature.title}
//                   </CardTitle>
//                   <CardDescription className="text-sm md:text-base">
//                     {feature.description}
//                   </CardDescription>
//                 </CardHeader>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
