// src/data/reviews.ts

export type Review = {
  author: {
    name: string;
    designation: string;
    company: string;
    imageUrl: string;
  };
  comment: string;
};

export const reviews: Review[] = [
  {
    author: {
      name: "Emily Carter",
      designation: "Product Manager",
      company: "XYZ Retail",
      imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    comment:
      "Ghally understood our e-commerce goals quickly and delivered a fast, accessible storefront. Page load times improved noticeably and the checkout flow feels effortless.",
  },
  {
    author: {
      name: "Daniel Moore",
      designation: "Engineering Lead",
      company: "Acme Tech",
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    comment:
      "Clean architecture, great communication, and thoughtful trade-offs. The CI/CD setup reduced our deploy friction and made feature releases predictable.",
  },
  {
    author: {
      name: "Sofia Nguyen",
      designation: "Marketing Director",
      company: "BrightLabs",
      imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    comment:
      "Our marketing site edits used to take days. Now we can ship content updates in hours. The Next.js + headless CMS approach was a perfect fit.",
  },
  {
    author: {
      name: "Liam Thompson",
      designation: "Operations Manager",
      company: "San Remo",
      imageUrl: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    comment:
      "Super dependable. Brought the same discipline from manufacturing to our internal dashboard project—measurable improvements in reporting speed and accuracy.",
  },
  {
    author: {
      name: "Ava Johnson",
      designation: "Founder",
      company: "Indie Studio",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    comment:
      "Loved the attention to detail on UX. The dark/light mode implementation feels polished and consistent across pages.",
  },
];
export const featuredReviews: Review[] = reviews.slice(0, 3);