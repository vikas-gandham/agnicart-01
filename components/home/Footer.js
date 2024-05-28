import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaPinterestSquare,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export default function Footer() {
  const men = [
    {
      id: 1650,
      title: "Accessories & Shoes",
      link: "/men/accessories-and-shoes",
      type: "categories",
      child_items: [
        {
          id: 1661,
          title: "All Accessories",
          link: "/men/accessories-and-shoes/all-accessories",
          type: "categories",
          child_items: [],
        },
        {
          id: 1655,
          title: "Shoes & Sneakers",
          link: "/men/accessories-and-shoes/shoes-and-sneakers",
          type: "categories",
          child_items: [],
        },
        {
          id: 1657,
          title: "Ties & Bowties",
          link: "/men/accessories-and-shoes/ties-and-bowties",
          type: "categories",
          child_items: [],
        },
        {
          id: 1652,
          title: "Underwear",
          link: "/men/accessories-and-shoes/underwear",
          type: "categories",
          child_items: [],
        },
      ],
    },
    {
      id: 1546,
      title: "Clothing",
      link: "/men/clothing",
      type: "categories",
      child_items: [
        {
          id: 1562,
          title: "Button Down Shirts",
          link: "/men/clothing/button-down-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1567,
          title: "Chinos & Joggers",
          link: "/men/clothing/chinos-and-joggers",
          type: "categories",
          child_items: [],
        },
        {
          id: 1554,
          title: "Full Suits",
          link: "/men/clothing/full-suits",
          type: "categories",
          child_items: [],
        },
        {
          id: 1572,
          title: "Jackets & Coats",
          link: "/men/clothing/jackets-and-coats",
          type: "categories",
          child_items: [],
        },
        {
          id: 1556,
          title: "Jeans",
          link: "/men/clothing/jeans",
          type: "categories",
          child_items: [],
        },
        {
          id: 1565,
          title: "Pants",
          link: "/men/clothing/pants",
          type: "categories",
          child_items: [],
        },
        {
          id: 1563,
          title: "Polos",
          link: "/men/clothing/polos",
          type: "categories",
          child_items: [],
        },
        {
          id: 1569,
          title: "Shorts",
          link: "/men/clothing/shorts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1551,
          title: "Spacial Sale",
          link: "/men/clothing/special-sale",
          type: "categories",
          child_items: [],
        },
        {
          id: 1575,
          title: "Suit Jackets & Blazers",
          link: "/men/clothing/suit-jackets-and-blazers",
          type: "categories",
          child_items: [],
        },
        {
          id: 1570,
          title: "Swim Trunks",
          link: "/men/clothing/swim-trunks",
          type: "categories",
          child_items: [],
        },
        {
          id: 1564,
          title: "T-Shirts",
          link: "/men/clothing/t-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1561,
          title: "Tops",
          link: "/men/clothing/tops",
          type: "categories",
          child_items: [],
        },
      ],
    },
    {
      id: 1577,
      title: "NEW & NOW",
      link: "/men/new-and-now",
      type: "categories",
      child_items: [
        {
          id: 1581,
          title: "Linen Shop",
          link: "/men/new-and-now/linen-shop",
          type: "categories",
          child_items: [],
        },
        {
          id: 1583,
          title: "Matching Summer Sets",
          link: "/men/new-and-now/matching-summer-sets",
          type: "categories",
          child_items: [],
        },
        {
          id: 1579,
          title: "New Arrivals",
          link: "/men/new-and-now/new-arrivals",
          type: "categories",
          child_items: [],
        },
        {
          id: 1580,
          title: "Perfect Prima Cotton Tops",
          link: "/men/new-and-now/perfect-pima-cotton-tops",
          type: "categories",
          child_items: [],
        },
      ],
    },
    {
      id: 1584,
      title: "SUIT SHOP",
      link: "/men/suit-shop",
      type: "categories",
      child_items: [
        {
          id: 1606,
          title: "All Shirts",
          link: "/men/shirt-shop/all-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1590,
          title: "Dress Pants",
          link: "/men/suit-shop/dress-pants",
          type: "categories",
          child_items: [],
        },
        {
          id: 1587,
          title: "Full Suits",
          link: "/men/suit-shop/full-suits",
          type: "categories",
          child_items: [],
        },
        {
          id: 1592,
          title: "Modern Tech Suits",
          link: "/men/suit-shop/modern-tech-suits",
          type: "categories",
          child_items: [],
        },
        {
          id: 1599,
          title: "Prom Shop",
          link: "/men/suit-shop/prom-shop",
          type: "categories",
          child_items: [],
        },
        {
          id: 1589,
          title: "Suit Jackets & Blazers",
          link: "/men/suit-shop/suit-jackets-and-blazers",
          type: "categories",
          child_items: [],
        },
        {
          id: 1597,
          title: "Wdding Shop",
          link: "/men/suit-shop/wedding-shop",
          type: "categories",
          child_items: [],
        },
      ],
    },
    {
      id: 1604,
      title: "Shirt Shop",
      link: "/men/shirt-shop",
      type: "categories",
      child_items: [
        {
          id: 1622,
          title: "1MX Dress Shirts",
          link: "/men/shirt-shop/1mx-dress-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1615,
          title: "Caual Shirts",
          link: "/men/shirt-shop/casual-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1617,
          title: "Linen Shirts",
          link: "/men/shirt-shop/linen-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1620,
          title: "Performance Shirts",
          link: "/men/shirt-shop/performance-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1623,
          title: "Short Sleeve Button Ups",
          link: "/men/shirt-shop/short-sleeve-button-ups",
          type: "categories",
          child_items: [],
        },
      ],
    },
    {
      id: 1635,
      title: "Styling Community",
      link: "/men/styling-community",
      type: "categories",
      child_items: [
        {
          id: 1638,
          title: "Become A Style Editor",
          link: "/men/styling-community/become-a-style-editor",
          type: "categories",
          child_items: [],
        },
        {
          id: 1637,
          title: "Stylinng Community Inspo",
          link: "/men/styling-community/styling-community-inspo",
          type: "categories",
          child_items: [],
        },
      ],
    },
  ];

  return (
    <div className="w-full mx-auto bottom-full  bg-white p-[100px] space-y-10 border-t ">
      <div className="flex items-start justify-center gap-[100px]  ">
        <div className="flex flex-col items-start justify-center space-y-8">
          <div className="flex items-center justify-center gap-4">
            <a className="flex items-center justify-center gap-2  border border-black px-2 py-1 cursor-pointer">
              <FaApple size="1.5rem" />
              <div className="flex flex-col items-start justify-center">
                <span className=" text-[0.5rem] text-slate-800">
                  Download on the
                </span>
                <span className="text-sm font-bold">App Store</span>
              </div>
            </a>
            <a className="flex items-center justify-center gap-2 border border-black px-2 py-1 cursor-pointer">
              <FaGooglePlay size="1.5rem" />
              <div className="flex flex-col items-start justify-center">
                <span className="text-[0.5rem] text-slate-800">Get in on</span>
                <span className="text-sm font-bold">Google Play</span>
              </div>
            </a>
          </div>
          <a className=" text-sm cursor-pointer uppercase underline underline-offset-2 font-semibold ">
            Sign Up For Mobile Alerts
          </a>
          <a className=" text-sm cursor-pointer uppercase underline underline-offset-2 font-semibold ">
            Sign up for email
          </a>
          <div className="flex items-center justify-center gap-5">
            <a className=" cursor-pointer">
              <FaInstagram size="1.5rem" />
            </a>
            <a className=" cursor-pointer">
              <FaFacebook size="1.5rem" />
            </a>
            <a className=" cursor-pointer">
              <FaTiktok size="1.5rem" />
            </a>
            <a className=" cursor-pointer">
              <FaYoutube size="1.5rem" />
            </a>
            <a className=" cursor-pointer">
              <FaLinkedin size="1.5rem" />
            </a>
            <a className=" cursor-pointer">
              <FaPinterestSquare size="1.5rem" />
            </a>
          </div>
        </div>
        <div className="space-y-12">
          <div className="grid grid-cols-4 gap-x-4 gap-y-4">
            {men.map((item) => (
              <div key={item.id}>
                <h1 className=" font-bold">{item.title}</h1>
                {item.child_items.map((data) => (
                  <a key={data.id} className="cursor-pointer">
                    <p className="text-sm text-slate-600 hover:text-slate-900 hover:underline">
                      {data.title}
                    </p>
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            <a className="text-sm text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Terms & Conditions
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-sm text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Accessibility
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-sm text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              About Ads
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-sm text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Privacy Policy
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-sm text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Do Not Sell Or Share My Personal Information
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-sm text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Site Map
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-sm text-slate-900">
              © 2024 Express. All rights reserved.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
