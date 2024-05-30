// "use client";

// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { IoIosArrowDown } from "react-icons/io";

// export default function FilterAccordian({ title, filter, options }) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const path = usePathname();
//   const params = new URLSearchParams(searchParams);
//   const variants = searchParams.get("variants");

//   const selectedVariants =
//     variants && variants.split(",").map((item) => Number(item));

//   const handleFilterClick = (id, checked) => {
//     console.log(params, "params");
//     let variants = params.get("variants")
//       ? params.get("variants").split(",").map(Number)
//       : [];

//     if (checked) {
//       variants.push(id);
//     } else {
//       variants = variants.filter((variantId) => variantId !== id);
//     }

//     if (variants.length) {
//       params.set("variants", variants.join(","));
//     } else {
//       params.delete("variants");
//     }

//     router.push(`${path}?${params.toString()}`);
//   };

//   return (
//     <Disclosure
//       as="div"
//       defaultOpen={true}
//       onClick={() => setToggle(!toggle)}
//       className="border-b"
//     >
//       <DisclosureButton className="group flex w-full items-center justify-between px-6 py-6">
//         <span className=" uppercase font-semibold "> {title}</span>
//         <IoIosArrowDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
//       </DisclosureButton>
//       <DisclosurePanel className="py-2">
//         {filter.map((item) => {
//           item.id === 168 ? (
//             <div className=" flex flex-col items-start justify-center gap-6 overflow-hidden w-full ">
//               <div className="flex flex-col gap-4 w-full overflow-y-auto max-h-[150px] scrollbar-thin scrollbar-webkit pt-2">
//                 {options.map((filterItem) => (
//                   <div
//                     key={filterItem.id}
//                     className="flex items-center justify-start gap-2"
//                   >
//                     <button>
//                       <label className="flex items-center justify-start gap-2 cursor-pointer">
//                         <input
//                           onChange={(e) =>
//                             handleFilterClick(filterItem.id, e.target.checked)
//                           }
//                           type="checkbox"
//                           checked={
//                             selectedVariants &&
//                             selectedVariants.length > 0 &&
//                             selectedVariants.includes(filterItem.id)
//                           }
//                           className=" appearance-none hidden"
//                         />
//                         <div
//                           className="p-2 border w-4 h-4 border-slate-500 ring-1 rounded-full  hover:ring-offset-1"
//                           style={{ backgroundColor: filterItem.hex_code }}
//                         />
//                         <span className=" uppercase font-semibold text-slate-600">
//                           {filterItem.name}
//                         </span>
//                         <span className="font-semibold text-slate-600">
//                           &#40;{filterItem.id}&#41;
//                         </span>
//                       </label>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col items-start justify-center gap-6 overflow-hidden w-full ">
//               <div className="flex flex-col gap-4 w-full overflow-y-auto max-h-[150px] scrollbar-thin scrollbar-webkit pt-2 ">
//                 {options.map((filterItem) => (
//                   <div
//                     key={filterItem.id}
//                     className="flex items-center justify-start gap-2 "
//                   >
//                     <label className="flex items-center justify-start gap-2 cursor-pointer ">
//                       <input
//                         onChange={(e) =>
//                           handleFilterClick(filterItem.id, e.target.checked)
//                         }
//                         type="checkbox"
//                         checked={
//                           selectedVariants &&
//                           selectedVariants.length > 0 &&
//                           selectedVariants.includes(filterItem.id)
//                         }
//                       />

//                       <span className=" uppercase font-semibold text-slate-600">
//                         {filterItem.name}
//                       </span>
//                       <span className="font-semibold text-slate-600">
//                         &#40;{filterItem.id}&#41;
//                       </span>
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }
