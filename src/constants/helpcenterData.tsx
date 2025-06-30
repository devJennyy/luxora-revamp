import { BiSolidTruck } from "react-icons/bi";
import { FaMouse, FaShieldAlt } from "react-icons/fa";
import { IoIosRocket, IoIosSettings } from "react-icons/io";
import { MdPayments, MdSupportAgent } from "react-icons/md";
import { TbRotateRectangle } from "react-icons/tb";
import { IoTicket } from "react-icons/io5";

export const data = [
  {
    title: "Getting Started",
    description:
      "Learn how to create an account, set up your profile, and start using our services in minutes.",
    icon: <IoIosRocket className="text-xl" />,
  },
  {
    title: "Account Settings",
    description:
      "Manage your personal information, change your password, and configure notification preferences.",
    icon: <IoIosSettings className="text-[22px]" />,
  },
  {
    title: "Troubleshooting",
    description:
      "Find solutions to common problems, error messages, and technical issues you may encounter.",
    icon: <FaMouse className="text-lg" />,
  },
  {
    title: "Billing & Payments",
    description:
      "Understand how we process payments, update billing details, and resolve failed transactions.",
    icon: <MdPayments className="text-xl" />,
  },
  {
    title: "Shipping Information",
    description:
      "See delivery times, shipping options, and how to track or change your order effectively.",
    icon: <BiSolidTruck className="text-xl" />,
  },
  {
    title: "Returns & Refunds",
    description:
      "Learn how to return items, check refund status, and understand how our return policy works.",
    icon: <TbRotateRectangle className="text-xl" />,
  },
  {
    title: "Security & Privacy",
    description:
      "Read about how we protect your data, manage permissions, and keep your account secure.",
    icon: <FaShieldAlt className="text-xl" />,
  },
  {
    title: "Using Vouchers & Coupons",
    description:
      "Apply promo codes at checkout, check voucher validity, and discover all our exclusive deals.",
    icon: <IoTicket className="text-xl" />,
  },
  {
    title: "Contact Support",
    description:
      "Need more help? Learn how to reach our support team via chat, email, or phone. Available 24/7.",
    icon: <MdSupportAgent className="text-2xl" />,
  },
];

export const itemPill = [
  {
    title: "Popular Topics",
    link: "#topics",
  },
  {
    title: "FAQs",
    link: "/faqs",
  },
  {
    title: "Discover More",
    link: "#footer",
  },
];
