import {
  Popover,
  Transition,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import Link from "next/link";
import { useState, Fragment } from "react";

export default function Menu() {
  const [popoverStates, setPopoverStates] = useState({});

  const items = [
    {
      id: 1743,
      title: "Dresses",
      link: "/dresses",
      type: "categories",
      child_items: [
        {
          id: 1744,
          title: "Dress Shop",
          link: "/dresses/dress-shop",
          type: "categories",
          child_items: [
            {
              id: 1762,
              title: "All Dresses",
              link: "/dresses/dress-shop/all-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1753,
              title: "Floral Dresses",
              link: "/dresses/dress-shop/floral-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1756,
              title: "Jumpsuits & Rompers",
              link: "/dresses/dress-shop/jumpsuits-and-rompers",
              type: "categories",
              child_items: [],
            },
            {
              id: 1746,
              title: "New Dresses",
              link: "/dresses/dress-shop/new-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1758,
              title: "Shirt Dresses",
              link: "/dresses/dress-shop/shirt-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1749,
              title: "Summer Dresses",
              link: "/dresses/dress-shop/summer-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1751,
              title: "White Dresses",
              link: "/dresses/dress-shop/white-dresses",
              type: "categories",
              child_items: [],
            },
          ],
        },
        {
          id: 1770,
          title: "Shop By Length",
          link: "/dresses/shop-by-length",
          type: "categories",
          child_items: [
            {
              id: 1771,
              title: "Maxi Dresses",
              link: "/dresses/shop-by-length/maxi-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1773,
              title: "Midi Dresses",
              link: "/dresses/shop-by-length/midi-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1774,
              title: "Mini Dresses",
              link: "/dresses/shop-by-length/mini-dresses",
              type: "categories",
              child_items: [],
            },
          ],
        },
        {
          id: 1778,
          title: "Shop By Occasion",
          link: "/dresses/shop-by-occasion",
          type: "categories",
          child_items: [
            {
              id: 1780,
              title: "Casual Dresses",
              link: "/dresses/shop-by-occasion/casual-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1784,
              title: "Cocktail & Party Dresses",
              link: "/dresses/shop-by-occasion/cocktail-and-party-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1787,
              title: "Graduation Dresses",
              link: "/dresses/shop-by-occasion/graduation-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1785,
              title: "Wedding Guest Dresses",
              link: "/dresses/shop-by-occasion/wedding-guest-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1782,
              title: "Work Dresses",
              link: "/dresses/shop-by-occasion/work-dresses",
              type: "categories",
              child_items: [],
            },
          ],
        },
      ],
    },
    {
      id: 1802,
      title: "Suits",
      link: "/suits",
      type: "categories",
      child_items: [
        {
          id: 1805,
          title: "Womens Suit Shop",
          link: "/suits/womens-suit-shop",
          type: "categories",
          child_items: [
            {
              id: 1807,
              title: "All Suits",
              link: "/suits/womens-suit-shop/all-suits",
              type: "categories",
              child_items: [],
            },
            {
              id: 1806,
              title: "All Suits",
              link: "/suits/womens-suit-shop/all-suits",
              type: "categories",
              child_items: [],
            },
            {
              id: 1808,
              title: "All Work Essentials",
              link: "/suits/womens-suit-shop/all-work-essentials",
              type: "categories",
              child_items: [],
            },
            {
              id: 1809,
              title: "Blazers & Suits Jackets",
              link: "/suits/womens-suit-shop/blazers-and-suits-jackets",
              type: "categories",
              child_items: [],
            },
            {
              id: 1812,
              title: "Dress Pants",
              link: "/suits/womens-suit-shop/dress-pants",
              type: "categories",
              child_items: [],
            },
            {
              id: 1813,
              title: "Editor Collection",
              link: "/suits/womens-suit-shop/editor-collection",
              type: "categories",
              child_items: [],
            },
            {
              id: 1811,
              title: "Work Dresses",
              link: "/suits/womens-suit-shop/work-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1810,
              title: "Work Tops",
              link: "/suits/womens-suit-shop/work-tops",
              type: "categories",
              child_items: [],
            },
          ],
        },
      ],
    },
    {
      id: 1430,
      title: "Women",
      link: "/women",
      type: "categories",
      child_items: [
        {
          id: 1431,
          title: "Clothing",
          link: "/women/clothing",
          type: "categories",
          child_items: [
            {
              id: 1442,
              title: "Hyper Strech Jeans",
              link: "/women/new-and-now/the-summer-edit",
              type: "categories",
              child_items: [],
            },
            {
              id: 1445,
              title: "Skirts",
              link: "/women/clothing/skirts",
              type: "categories",
              child_items: [],
            },
            {
              id: 1432,
              title: "Special Sale",
              link: "/women/special-sale",
              type: "categories",
              child_items: [],
            },
            {
              id: 1440,
              title: "Tops",
              link: "/women/clothing/tops",
              type: "categories",
              child_items: [],
            },
            {
              id: 1471,
              title: "jackets and coats",
              link: "/women/clothing/jackets-and-coats",
              type: "categories",
              child_items: [],
            },
            {
              id: 1462,
              title: "pants",
              link: "/women/clothing/pants",
              type: "categories",
              child_items: [],
            },
            {
              id: 1465,
              title: "shorts",
              link: "/women/clothing/shorts",
              type: "categories",
              child_items: [],
            },
            {
              id: 1468,
              title: "suits",
              link: "/women/clothing/suits",
              type: "categories",
              child_items: [],
            },
            {
              id: 1467,
              title: "sweaters",
              link: "/women/clothing/sweaters",
              type: "categories",
              child_items: [
                {
                  id: 1669,
                  title: "Jeans",
                  link: "/jeans",
                  type: "categories",
                  child_items: [],
                },
              ],
            },
            {
              id: 1447,
              title: "the summer edit",
              link: "/women/new-and-now/the-summer-edit",
              type: "categories",
              child_items: [],
            },
          ],
        },
        {
          id: 1498,
          title: "accessories and shoes",
          link: "/women/accessories-and-shoes",
          type: "categories",
          child_items: [
            {
              id: 1533,
              title: "Belts",
              link: "/women/accessories-and-shoes/belts",
              type: "categories",
              child_items: [],
            },
            {
              id: 1536,
              title: "Shoes",
              link: "/women/accessories-and-shoes/shoes",
              type: "categories",
              child_items: [],
            },
            {
              id: 1520,
              title: "all accessories",
              link: "/women/accessories-and-shoes/all-accessories",
              type: "categories",
              child_items: [],
            },
            {
              id: 1521,
              title: "jewelry",
              link: "/women/accessories-and-shoes/jewelry",
              type: "categories",
              child_items: [],
            },
          ],
        },
        {
          id: 1511,
          title: "dress shop",
          link: "/women/dress-shop",
          type: "categories",
          child_items: [
            {
              id: 1513,
              title: "all dresses",
              link: "/women/dress-shop/all-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1515,
              title: "casual dresses",
              link: "/women/dress-shop/casual-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1516,
              title: "summer dresses",
              link: "/women/dress-shop/summer-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1517,
              title: "wedding guest dresses",
              link: "/women/dress-shop/wedding-guest-dresses",
              type: "categories",
              child_items: [],
            },
            {
              id: 1518,
              title: "white dresses",
              link: "/women/dress-shop/white-dresses",
              type: "categories",
              child_items: [],
            },
          ],
        },
        {
          id: 1451,
          title: "labels we love",
          link: "/women/labels-we-love",
          type: "categories",
          child_items: [
            {
              id: 1522,
              title: "upwest",
              link: "/women/labels-we-love/upwest",
              type: "categories",
              child_items: [],
            },
          ],
        },
        {
          id: 1460,
          title: "new and now",
          link: "/women/new-and-now",
          type: "categories",
          child_items: [
            {
              id: 1485,
              title: "linen shop",
              link: "/women/new-and-now/linen-shop",
              type: "categories",
              child_items: [],
            },
            {
              id: 1496,
              title: "new arrivals",
              link: "/women/new-and-now/new-arrivals",
              type: "categories",
              child_items: [],
            },
            {
              id: 1504,
              title: "vacation edit",
              link: "/women/new-and-now/vacation-edit",
              type: "categories",
              child_items: [],
            },
          ],
        },
        {
          id: 1482,
          title: "special sale",
          link: "/women/styling-community/special-sale",
          type: "categories",
          child_items: [],
        },
        {
          id: 1500,
          title: "styling community",
          link: "/women/styling-community",
          type: "categories",
          child_items: [
            {
              id: 1540,
              title: "Express You",
              link: "/women/styling-community/expressyou",
              type: "categories",
              child_items: [],
            },
            {
              id: 1641,
              title: "Labels We Love",
              link: "/men/labels-we-love",
              type: "categories",
              child_items: [],
            },
            {
              id: 1539,
              title: "Styling Community Inspo",
              link: "/women/styling-community/styling-community-inspo",
              type: "categories",
              child_items: [],
            },
            {
              id: 1480,
              title: "become a style editor",
              link: "/women/styling-community/become-a-style-editor",
              type: "categories",
              child_items: [],
            },
          ],
        },
        {
          id: 1523,
          title: "top shop",
          link: "/women/top-shop",
          type: "categories",
          child_items: [
            {
              id: 1527,
              title: "Bodysuits",
              link: "/women/top-shop/bodysuits",
              type: "categories",
              child_items: [],
            },
            {
              id: 1528,
              title: "Sweatshirts",
              link: "/women/top-shop/sweatshirts",
              type: "categories",
              child_items: [],
            },
            {
              id: 1524,
              title: "all tops",
              link: "/women/top-shop/all-tops",
              type: "categories",
              child_items: [],
            },
            {
              id: 1526,
              title: "basic tees and tanks",
              link: "/women/top-shop/basic-tees-and-tanks",
              type: "categories",
              child_items: [],
            },
            {
              id: 1525,
              title: "shirts and blouses",
              link: "/women/top-shop/shirts-and-blouses",
              type: "categories",
              child_items: [],
            },
          ],
        },
      ],
    },
    {
      id: 1684,
      title: "jeans",
      link: "/jeans",
      type: "categories",
      child_items: [
        {
          id: 1716,
          title: "Mens Jeans",
          link: "/jeans/mens-jeans",
          type: "categories",
          child_items: [
            {
              id: 1718,
              title: "All Mens Jeans",
              link: "/jeans/mens-jeans/all-mens-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1727,
              title: "Athletic Tapered Slim Jeans",
              link: "/jeans/mens-jeans/athletic-tapered-slim-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1737,
              title: "Colored Jeans",
              link: "/jeans/mens-jeans/colored-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1720,
              title: "Hyper Stretch Jeans",
              link: "/jeans/mens-jeans/hyper-stretch-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1736,
              title: "Relaxed Jeans",
              link: "/jeans/mens-jeans/relaxed-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1729,
              title: "Skinny Jeans",
              link: "/jeans/mens-jeans/skinny-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1721,
              title: "Slim Jeans",
              link: "/jeans/mens-jeans/slim-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1723,
              title: "Slim Straight Jeans",
              link: "/jeans/mens-jeans/slim-straight-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1733,
              title: "Straight Fit Jeans",
              link: "/jeans/mens-jeans/straight-fit-jeans",
              type: "categories",
              child_items: [],
            },
          ],
        },
        {
          id: 1687,
          title: "Womens Jeans",
          link: "/jeans/womens-jeans",
          type: "categories",
          child_items: [
            {
              id: 1689,
              title: "All Womens Jeans",
              link: "/jeans/womens-jeans/all-womens-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1706,
              title: "Cropped Jeans",
              link: "/jeans/womens-jeans/cropped-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1692,
              title: "FlexX Jeans",
              link: "/jeans/womens-jeans/flexx-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1696,
              title: "Hyper Sculpt Jeans",
              link: "/jeans/womens-jeans/hyper-sculpt-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1704,
              title: "Realxed Jeans",
              link: "/jeans/womens-jeans/relaxed-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1701,
              title: "Skinny Jeans",
              link: "/jeans/womens-jeans/skinny-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1703,
              title: "Slim Jeans",
              link: "/jeans/womens-jeans/slim-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1697,
              title: "Straight Jeans",
              link: "/jeans/womens-jeans/straight-jeans",
              type: "categories",
              child_items: [],
            },
            {
              id: 1702,
              title: "Wide Leg Jeans",
              link: "/jeans/womens-jeans/wide-leg-jeans",
              type: "categories",
              child_items: [],
            },
          ],
        },
      ],
    },
    {
      id: 1484,
      title: "men",
      link: "/men",
      type: "categories",
      child_items: [
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
      ],
    },
  ];

  function togglePopover(navlink, show = true) {
    setPopoverStates((prevState) => ({
      ...prevState,
      [navlink]: show,
    }));
  }

  return (
    <Popover className="relative flex bg-white justify-center items-center group ">
      <div className="flex text-sm font-semibold gap-10 justify-center items-center  ">
        {items &&
          items.map((item) => (
            <Fragment key={item.id}>
              <PopoverButton
                className="text-black text-sm uppercase font-bold cursor-pointer py-4 hover:underline underline-offset-[18px] decoration-2 delay-300 duration-300  md:block "
                onMouseEnter={() => togglePopover(item.title, true)}
                onMouseLeave={() => togglePopover(item.title, false)}
              >
                {item.title}
              </PopoverButton>

              <Transition
                as={Fragment}
                show={popoverStates[item.title]}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute left-1/2 transform -translate-x-1/2 top-full  w-[100%] opacity-100 z-[999]">
                  <div className="h-px bg-gray-400 w-full "></div>
                  <div
                    className="overflow-hidden bg-white w-full shadow-lg ring-1 ring-black/5 flex group-hover:block"
                    onMouseEnter={() => togglePopover(item.title, true)}
                    onMouseLeave={() => togglePopover(item.title, false)}
                  >
                    <div className="w-[80%] mx-auto ">
                      <div className="grid grid-cols-4 gap-x-[50px] gap-y-[50px] items-start justify-center">
                        {item.child_items.map((data) => (
                          <div key={data.id} className="p-10 space-y-3">
                            <div className="text-black py-3 text-base font-bold capitalize">
                              {data.child_items.length > 0 ? (
                                <h1>{data.title}</h1>
                              ) : (
                                <Link href={data.link}>{data.title}</Link>
                              )}
                            </div>

                            <div className="space-y-2">
                              {data?.child_items?.map((subItem) => (
                                <div
                                  key={subItem.id}
                                  className="text-gray-600 text-sm capitalize hover:text-black "
                                >
                                  <Link href={subItem.link}>
                                    {subItem.title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </Fragment>
          ))}
      </div>
    </Popover>
  );
}
