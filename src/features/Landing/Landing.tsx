import { Link } from "react-router-dom";
import SectionWrapper from "~/components/Layouts/SectionWrapper";

const NAVIGATION_MENU = [
  {
    label: "Used Cars",
    link: "used-cars",
  },
  {
    label: "Auctions",
    link: "auctions",
  },
  {
    label: "New Cars",
    link: "new-cars",
  },
  {
    label: "Sell Cars",
    link: "sell-cars",
  },
  {
    label: "Local Dealers",
    link: "local-dealers",
  },
  {
    label: "Support",
    link: "support",
  },
];
const TRENDING_CARS = [
  {
    imageUrl: "https://source.unsplash.com/random/1920x1080/?car",
    label: "Used cars under $15,000",
    vehicleCount: 723457,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1920x1081/?car",
    label: "Used cars under $60,000",
    vehicleCount: 329570,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1920x1082/?toyota",
    label: "Toyota models 2021",
    vehicleCount: 3125,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1920x1082/?suv",
    label: "Compact SUVs",
    vehicleCount: 229660,
  },
];
const CAR_MODELS = [
  {
    imageUrl: "https://source.unsplash.com/random/1920x1080/?sedan",
    label: "Sedan",
    vehicleCount: 23457,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1920x1080/?suv",
    label: "SUV",
    vehicleCount: 16840,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1920x1080/?coupe",
    label: "Coupe",
    vehicleCount: 19700,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1920x1080/?hatchback",
    label: "Hatchback",
    vehicleCount: 12350,
  },
];
const CAR_MAKERS = [
  {
    imageUrl: "https://source.unsplash.com/random/1000x1000/?subaru",
    label: "Subaru",
    priceRange: 40,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1000x1001/?mercedes-benz",
    label: "Mercedes-Benz",
    priceRange: 60,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1000x1002/?volkswagen",
    label: "Volkswagen",
    priceRange: 15,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1000x1003/?hyundai",
    label: "Hyundai",
    priceRange: 30,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1000x1004/?toyota",
    label: "Toyota",
    priceRange: 27,
  },
  {
    imageUrl: "https://source.unsplash.com/random/1000x1005/?infiniti",
    label: "Infiniti",
    priceRange: 54,
  },
];
const RECENT_REVIEWS = [
  {
    title: "2021 Cadillac Escalade",
    imageUrl: "https://source.unsplash.com/random/2000x1000/?cadillac",
    description:
      "The 2021 Escalade is a technology showcase and a worthy claimant of the flagship American luxury vehicle title.",
    rating: {
      startCount: 4.91,
      respondents: 98,
    },
    author: {
      photoProfile: "https://source.unsplash.com/random/1000x1000/?selfie",
      name: "Hironaka Hiroe",
      title: "Chief Editor",
    },
  },
  {
    title: "2021 Hyundai Elantra",
    imageUrl: "https://source.unsplash.com/random/2000x1001/?hyundai",
    description:
      "If developing car was a marathon technological showcase, Hyundai didn't run the last mile with the 2021 Elantra.",
    rating: {
      startCount: 4.65,
      respondents: 93,
    },
    author: {
      photoProfile: "https://source.unsplash.com/random/1000x1001/?selfie",
      name: "Debashis Bhuiyan",
      title: "News Editor",
    },
  },
  {
    title: "2021 Mercedes-Benz GLA250",
    imageUrl: "https://source.unsplash.com/random/2000x1002/?mercedes-benz",
    description:
      "The new entry point into Mercedes-Benz's SUV lineup is bigger and improved, but still features a frustrating powertrain.",
    rating: {
      startCount: 4.55,
      respondents: 35,
    },
    author: {
      photoProfile: "https://source.unsplash.com/random/1000x1002/?selfie",
      name: "Lew Silverton",
      title: "Chief Editor",
    },
  },
];
const NAVIGATION_MENU_FOOTER = {
  About: ["How it works", "Careers", "About us", "Media"],
  Community: ["Against Discrimination", "Invite friends", "Gift cards"],
  "Become seller": [
    "Add your vehicle",
    "Business account",
    "Resource Center",
    "Community",
  ],
  "Booking support": [
    "Updates for COVID-19",
    "Help Center",
    "Support",
    "Trust & Safety",
  ],
};

const Landing = () => {
  return (
    <main className="pt-5">
      {/* Navigation Bar Section */}
      <SectionWrapper className="lg:px-36">
        <nav className="flex items-center justify-between gap-x-3">
          <button className="lg:hidden">
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.679688 0.570312H17.3203V2.25H0.679688V0.570312ZM0.679688 4.75H17.3203V6.42969H0.679688V4.75ZM0.679688 8.92969H17.3203V10.5703H0.679688V8.92969Z"
                fill="#9A9EA7"
              />
            </svg>
          </button>
          <button className="grow lg:grow-0">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="40"
                height="40"
                rx="20"
                fill="url(#paint0_linear_0_2734)"
              />
              <mask
                id="mask0_0_2734"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <rect width="40" height="40" rx="20" fill="white" />
              </mask>
              <g mask="url(#mask0_0_2734)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-2.22396 31.5629C-2.48438 31.8543 -2.8099 32 -3.20052 32H-4.63281C-5.02344 32 -5.34896 31.8543 -5.60938 31.5629C-5.86979 31.2714 -6 30.924 -6 30.5205V19.0877L-3.13542 10.4795C-2.8316 9.49318 -2.15885 9 -1.11719 9H14.1172C15.1589 9 15.8316 9.49318 16.1354 10.4795L19 19.0877V30.5205C19 30.924 18.8698 31.2714 18.6094 31.5629C18.349 31.8543 18.0234 32 17.6328 32H16.2005C15.8099 32 15.4844 31.8543 15.224 31.5629C14.9635 31.2714 14.8333 30.924 14.8333 30.5205V29.1082H-1.83333V30.5205C-1.83333 30.924 -1.96354 31.2714 -2.22396 31.5629ZM-4 18H15L12.9597 11H-1.95973L-4 18ZM14 25C13.4583 25 12.9792 24.8125 12.5625 24.4375C12.1875 24.0625 12 23.5833 12 23C12 22.4167 12.1979 21.9375 12.5938 21.5625C12.9896 21.1875 13.4583 21 14 21C14.5417 21 15.0104 21.1875 15.4062 21.5625C15.8021 21.9375 16 22.4167 16 23C16 23.5833 15.8021 24.0625 15.4062 24.4375C15.0104 24.8125 14.5417 25 14 25ZM-3.4375 24.4375C-3.02083 24.8125 -2.54167 25 -2 25C-1.45833 25 -0.989583 24.8125 -0.59375 24.4375C-0.197917 24.0625 0 23.5833 0 23C0 22.4167 -0.197917 21.9375 -0.59375 21.5625C-0.989583 21.1875 -1.45833 21 -2 21C-2.54167 21 -3.01042 21.1875 -3.40625 21.5625C-3.80208 21.9375 -4 22.4167 -4 23C-4 23.5833 -3.8125 24.0625 -3.4375 24.4375Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_0_2734"
                  x1="40"
                  y1="40"
                  x2="40"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5A4AB3" />
                  <stop offset="1" stopColor="#7963F0" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          <ul className="hidden text-right text-base font-semibold lg:mr-[2.625rem] lg:block lg:grow lg:space-x-[2.625rem]">
            {NAVIGATION_MENU.map((nav) => (
              <Link key={nav.label} to={nav.link}>
                {nav.label}
              </Link>
            ))}
          </ul>
          <button className="flex items-center gap-x-3 text-base font-semibold text-brand-gray-4">
            <div className="rounded-[0.625rem] bg-brand-gray-1 p-[0.4375rem]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.02734 9.35547C4.41016 8.79297 5.73438 8.51172 7 8.51172C8.26562 8.51172 9.57812 8.79297 10.9375 9.35547C12.3203 9.89453 13.0117 10.6094 13.0117 11.5V13.0117H0.988281V11.5C0.988281 10.6094 1.66797 9.89453 3.02734 9.35547ZM9.10938 6.12109C8.52344 6.70703 7.82031 7 7 7C6.17969 7 5.47656 6.70703 4.89062 6.12109C4.30469 5.53516 4.01172 4.83203 4.01172 4.01172C4.01172 3.19141 4.30469 2.48828 4.89062 1.90234C5.47656 1.29297 6.17969 0.988281 7 0.988281C7.82031 0.988281 8.52344 1.29297 9.10938 1.90234C9.69531 2.48828 9.98828 3.19141 9.98828 4.01172C9.98828 4.83203 9.69531 5.53516 9.10938 6.12109Z"
                  fill="#9A9EA7"
                />
              </svg>
            </div>
            Sign Up
          </button>
        </nav>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="mx-3 mt-[1.8125rem] rounded-2xl bg-brand-purple-4 bg-[url('https://source.unsplash.com/random/1920x1080/?car,body,modern')] bg-center bg-no-repeat px-8 pb-[3.375rem] pt-[4.375rem] lg:mx-20 lg:space-y-36 lg:px-[4.375rem] lg:pt-32">
        <div className="space-y-11 lg:space-y-8">
          <h1 className="text-center text-4xl font-bold text-white lg:text-left lg:text-[3.5rem] lg:leading-tight">
            Find your next <br />
            awesome vehicle
          </h1>
          <div className="divide-y divide-brand-gray-2 rounded-lg bg-white px-6 py-4 lg:flex lg:w-3/4 lg:divide-x lg:divide-y-0 lg:p-0">
            {["Type", "Make", "Model", "Price"].map((item) => (
              <div
                key={item}
                className="w-full pb-3.5 pt-2.5 lg:px-3 lg:py-2.5"
              >
                <label
                  className="text-xs font-normal text-brand-gray-4"
                  htmlFor={item.toLocaleString()}
                >
                  {item}
                </label>
                <span className="flex w-full items-center justify-between">
                  <select
                    className="w-full appearance-none bg-transparent text-sm font-semibold"
                    name={item.toLocaleString()}
                    id={item.toLocaleString()}
                  >
                    <option value="">Default</option>
                  </select>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.55469 0.433594L5 3.87891L8.44531 0.433594L9.5 1.48828L5 5.98828L0.5 1.48828L1.55469 0.433594Z"
                      fill="#0D0A19"
                    />
                  </svg>
                </span>
              </div>
            ))}
            <button className="flex w-full items-center justify-center gap-x-[0.375rem] rounded-[0.625rem] bg-brand-purple-4 py-4 text-sm font-semibold text-white lg:m-2 lg:px-6 lg:py-3">
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.74609 7.52734C3.40234 8.18359 4.19922 8.51172 5.13672 8.51172C6.07422 8.51172 6.87109 8.18359 7.52734 7.52734C8.18359 6.87109 8.51172 6.07422 8.51172 5.13672C8.51172 4.19922 8.18359 3.40234 7.52734 2.74609C6.87109 2.08984 6.07422 1.76172 5.13672 1.76172C4.19922 1.76172 3.40234 2.08984 2.74609 2.74609C2.08984 3.40234 1.76172 4.19922 1.76172 5.13672C1.76172 6.07422 2.08984 6.87109 2.74609 7.52734ZM9.63672 8.51172L13.3633 12.2383L12.2383 13.3633L8.51172 9.63672V9.03906L8.30078 8.82812C7.41016 9.60156 6.35547 9.98828 5.13672 9.98828C3.77734 9.98828 2.61719 9.51953 1.65625 8.58203C0.71875 7.64453 0.25 6.49609 0.25 5.13672C0.25 3.77734 0.71875 2.62891 1.65625 1.69141C2.61719 0.730469 3.77734 0.25 5.13672 0.25C6.49609 0.25 7.64453 0.730469 8.58203 1.69141C9.51953 2.62891 9.98828 3.77734 9.98828 5.13672C9.98828 5.62891 9.87109 6.19141 9.63672 6.82422C9.40234 7.43359 9.13281 7.92578 8.82812 8.30078L9.03906 8.51172H9.63672Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>Search</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
          <button className="rounded-[0.625rem] bg-brand-purple-4 p-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.74609 12.2539C4.94141 13.4258 6.35938 14.0117 8 14.0117C9.64062 14.0117 11.0469 13.4258 12.2188 12.2539C13.4141 11.0586 14.0117 9.64062 14.0117 8C14.0117 6.35937 13.4141 4.95312 12.2188 3.78125C11.0469 2.58594 9.64062 1.98828 8 1.98828C6.35938 1.98828 4.94141 2.58594 3.74609 3.78125C2.57422 4.95312 1.98828 6.35937 1.98828 8C1.98828 9.64062 2.57422 11.0586 3.74609 12.2539ZM2.69141 2.72656C4.16797 1.25 5.9375 0.511719 8 0.511719C10.0625 0.511719 11.8203 1.25 13.2734 2.72656C14.75 4.17969 15.4883 5.9375 15.4883 8C15.4883 10.0625 14.75 11.832 13.2734 13.3086C11.8203 14.7617 10.0625 15.4883 8 15.4883C5.9375 15.4883 4.16797 14.7617 2.69141 13.3086C1.23828 11.832 0.511719 10.0625 0.511719 8C0.511719 5.9375 1.23828 4.17969 2.69141 2.72656ZM6.48828 11.375V4.625L10.9883 8L6.48828 11.375Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="text-white">
            <p className="text-base font-bold">Featured vehicles</p>
            <p className="text-sm font-normal">
              Watch the video to learn more.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Trending Near You Section */}
      <SectionWrapper className="mt-14 space-y-[1.625rem] lg:mt-20 lg:space-y-[2.5rem] lg:px-36">
        <h1 className="text-[1.375rem] font-bold lg:text-[1.75rem]">
          Trending near you
        </h1>
        <div className="no-scrollbar flex snap-x snap-mandatory flex-nowrap items-start gap-x-[1.875rem] overflow-x-auto">
          {TRENDING_CARS.map((trending) => (
            <div
              key={trending.vehicleCount}
              className="snap-center snap-always"
            >
              <img
                loading="lazy"
                src={trending.imageUrl}
                alt={trending.label}
                className="min-h-[11.75rem] min-w-[16.4375rem] rounded-t-md object-cover object-center"
              />
              <div className="px-[1.375rem] pb-[1.125rem] pt-4">
                <p className="text-base font-bold">{trending.label}</p>
                <p className="text-sm font-normal text-brand-gray-4">
                  {trending.vehicleCount.toLocaleString()} vehicles
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Find Car By Model Section */}
      <SectionWrapper className="mt-16 space-y-[1.625rem] lg:mt-20 lg:space-y-12 lg:px-36">
        <h1 className="text-[1.375rem] font-bold">Find car by model</h1>
        <div className="no-scrollbar flex snap-x snap-mandatory flex-nowrap items-start gap-x-[1.875rem] overflow-x-auto">
          {CAR_MODELS.map((model) => (
            <div
              key={model.vehicleCount}
              className="snap-center snap-always space-y-2.5 text-center"
            >
              <img
                loading="lazy"
                src={model.imageUrl}
                alt={model.label}
                className="min-h-[11.75rem] min-w-[16.4375rem] rounded-md object-cover object-center"
              />
              <p className="text-base font-bold">{model.label}</p>
              <button className="rounded-lg bg-brand-purple-4/20 px-4 py-2 text-xs font-bold text-brand-purple-4">
                {model.vehicleCount.toLocaleString()} vehicles
              </button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Best Selling Car Makers Section */}
      <SectionWrapper className="relative mt-16 lg:mt-20 lg:px-36 lg:pt-4">
        <div className="lg:flex lg:justify-between">
          <h1 className="text-[1.375rem] font-bold lg:basis-1/4 lg:text-[1.75rem]">
            Explore best selling car makers
          </h1>
          <h5 className="mt-2.5 text-sm font-normal text-brand-gray-4 lg:basis-2/4">
            Along with conventional advertising and below the line activities,
            organizations and corporate bodies have come to realize that they
            need to invest in trade shows in order to create maximum recall for
            their product or brand name.
          </h5>
        </div>

        <div className="relative space-y-3 pb-8 pt-7 lg:static lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-7 lg:gap-y-4 lg:space-y-0 lg:pb-12">
          {CAR_MAKERS.map((maker) => (
            <div
              key={maker.label}
              className="flex items-center gap-x-8 rounded-md bg-white px-8 py-[1.375rem]"
            >
              <img
                loading="lazy"
                src={maker.imageUrl}
                alt={maker.label}
                className="max-h-16 max-w-[4rem] rounded-md object-cover"
              />
              <div>
                <p className="text-lg font-bold">{maker.label}</p>
                <p className="text-sm font-normal text-brand-gray-4">
                  from ${maker.priceRange}k
                </p>
              </div>
            </div>
          ))}
          <div className="absolute -right-0 bottom-0 left-10 top-0 -z-10 -mr-3 rounded-bl-[2rem] rounded-tl-[14rem] bg-brand-gray-1 lg:left-2/4 lg:-mr-0 lg:rounded-bl-[6rem] lg:rounded-tl-[24rem]"></div>
        </div>
      </SectionWrapper>

      {/* Recent Reviews Section */}
      <SectionWrapper className="mt-14 space-y-[1.375rem] lg:mt-10 lg:space-y-10 lg:px-36">
        <h1 className="text-[1.375rem] font-bold lg:text-[1.75rem]">
          Recent reviews
        </h1>
        <div className="no-scrollbar flex snap-x snap-mandatory flex-nowrap items-start gap-x-4 overflow-x-auto">
          {RECENT_REVIEWS.map((review) => (
            <div key={review.title} className="snap-center snap-always">
              <img
                loading="lazy"
                src={review.imageUrl}
                alt={review.title}
                className="min-h-[14.25rem] min-w-[21.25rem] rounded-lg object-cover object-center"
              />
              <div className="mb-[1.375rem] pt-4">
                <p className="text-base font-bold">{review.title}</p>
                <p className="text-sm font-normal text-brand-gray-4">
                  {review.description}
                </p>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-x-3">
                  <img
                    className="h-[2.625rem] w-[2.625rem] rounded-full object-cover"
                    src={review.author.photoProfile}
                    alt={review.author.name}
                  />
                  <div className="text-sm">
                    <p className="font-bold">{review.author.name}</p>
                    <p className="font-normal">{review.author.title}</p>
                  </div>
                </div>
                <p className="flex items-center gap-x-1 text-sm">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 11.9375L3.35938 14.75L4.58984 9.47656L0.511719 5.92578L5.89062 5.46875L8 0.511719L10.1094 5.46875L15.4883 5.92578L11.4102 9.47656L12.6406 14.75L8 11.9375Z"
                      fill="#EF8354"
                    />
                  </svg>
                  <span className="font-bold">{review.rating.startCount}</span>
                  <span className="font-normal text-brand-gray-4">
                    ({review.rating.respondents})
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Footer Navigation Menu Section */}
      <SectionWrapper className="hidden bg-brand-gray-1 lg:mx-36 lg:mt-28 lg:block lg:rounded-[1.25rem] lg:px-32 lg:py-14">
        <ul className="flex justify-between text-sm text-brand-gray-4">
          {Object.keys(NAVIGATION_MENU_FOOTER).map((navMenu) => (
            <li key={navMenu}>
              <ul className="space-y-6">
                <li className="font-semibold text-black">{navMenu}</li>
                {NAVIGATION_MENU_FOOTER[
                  navMenu as keyof typeof NAVIGATION_MENU_FOOTER
                ].map((navMenuItem) => (
                  <li key={`${navMenu}-${navMenuItem}`}>{navMenuItem}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      {/* Footer Navigation Section */}
      <SectionWrapper className="mt-16 bg-brand-gray-1 py-6 text-sm lg:mt-0 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:bg-white lg:px-52">
        <div className="mb-5 flex items-center justify-between font-semibold text-brand-gray-4 lg:mb-0 lg:gap-x-3">
          <span>&#127760; English</span>
          <span className="flex items-center gap-x-1.5">
            <svg
              width="13"
              height="4"
              viewBox="0 0 13 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.44531 0.945312C5.75 0.640625 6.10156 0.488281 6.5 0.488281C6.89844 0.488281 7.25 0.640625 7.55469 0.945312C7.85938 1.25 8.01172 1.60156 8.01172 2C8.01172 2.39844 7.85938 2.75 7.55469 3.05469C7.25 3.35938 6.89844 3.51172 6.5 3.51172C6.10156 3.51172 5.75 3.35938 5.44531 3.05469C5.14062 2.75 4.98828 2.39844 4.98828 2C4.98828 1.60156 5.14062 1.25 5.44531 0.945312ZM9.94531 0.945312C10.25 0.640625 10.6016 0.488281 11 0.488281C11.3984 0.488281 11.75 0.640625 12.0547 0.945312C12.3594 1.25 12.5117 1.60156 12.5117 2C12.5117 2.39844 12.3594 2.75 12.0547 3.05469C11.75 3.35938 11.3984 3.51172 11 3.51172C10.6016 3.51172 10.25 3.35938 9.94531 3.05469C9.64062 2.75 9.48828 2.39844 9.48828 2C9.48828 1.60156 9.64062 1.25 9.94531 0.945312ZM0.945312 0.945312C1.25 0.640625 1.60156 0.488281 2 0.488281C2.39844 0.488281 2.75 0.640625 3.05469 0.945312C3.35938 1.25 3.51172 1.60156 3.51172 2C3.51172 2.39844 3.35938 2.75 3.05469 3.05469C2.75 3.35938 2.39844 3.51172 2 3.51172C1.60156 3.51172 1.25 3.35938 0.945312 3.05469C0.640625 2.75 0.488281 2.39844 0.488281 2C0.488281 1.60156 0.640625 1.25 0.945312 0.945312Z"
                fill="#9A9EA7"
              />
            </svg>
            USD
          </span>
        </div>
        <div className="space-y-6 text-center font-bold lg:flex lg:flex-row-reverse lg:items-center lg:gap-x-4 lg:space-y-0">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p className="text-brand-gray-4">
            &copy; {new Date().getUTCFullYear()} All rights reserved
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Landing;
