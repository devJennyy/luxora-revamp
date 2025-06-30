export const featuredFaqs = [
  {
    title: "Where is my order?",
    quote:
      "Track easily your shipment and see the latest delivery updates for your recent purchase.",
    cta: "Track order",
  },
  {
    title: "Return & refund policy?",
    quote:
      "Learn how to return an item, what’s required, and how long it takes to get your money back.",
    cta: "View return policy",
  },
  {
    title: "Do you ship internationally?",
    quote:
      "es! See available shipping options, estimated delivery times, and coverage by region or country.",
    cta: "See shipping details",
  },
  {
    title: "How do I create an account?",
    quote:
      "Sign up in seconds to track orders, save favorites, and enjoy a personalized shopping experience.",
    cta: "Create an account",
  },
];

export const faqSections = [
  {
    id: "general",
    title: "General Faqs",
    description: (
      <>
        Everything you need to know about the product and how it works. Can't
        find answer?{" "}
        <span className="underline underline-offset-4 decoration-secondary/60">
          Chat to our team.
        </span>
      </>
    ),
    items: [
      {
        value: "item-1",
        title: "Product Information",
        content: [
          "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
          "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
        ],
      },
      {
        value: "item-2",
        title: "Shipping Details",
        content: [
          "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
          "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
        ],
      },
      {
        value: "item-3",
        title: "Return Policy",
        content: [
          "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
          "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
        ],
      },
    ],
  },
  {
    id: "account",
    title: "Account & Orders",
    description: (
      <>
        Everything you need to know about managing your account and orders. Need
        more help?
      </>
    ),
    items: [
      {
        value: "item-1",
        title: "Creating an Account",
        content: [
          "Sign up with your email or use a social account like Google or Facebook. It only takes a minute.",
          "Having an account allows you to track orders, save favorites, and check out faster.",
        ],
      },
      {
        value: "item-2",
        title: "Order Tracking",
        content: [
          "After placing an order, you'll receive an email with a tracking link.",
          "You can also log in to your account anytime to view the current status of all your orders.",
        ],
      },
      {
        value: "item-3",
        title: "Changing or Canceling Orders",
        content: [
          "You can change or cancel your order within 2 hours of placing it by contacting our support.",
          "After that window, the order may already be processing or shipped and changes might not be possible.",
        ],
      },
    ],
  },
];
