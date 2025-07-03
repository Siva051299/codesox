const slides = [
  {
    id: 1,
    background: "https://i.postimg.cc/CKMYp4B8/H1.png",
    label: "BRANDING AND ADVERTISING AGENCY",
    title:
      "Transform Your <span>Vision</span> with Expert Branding & Advertising",
    description:
      "We transform ideas into stunning print and digital experiences. Our passionate team combines creativity with technical excellence to deliver solutions that captivate and engage.",
  },
  {
    id: 2,
    background: "https://i.postimg.cc/252z36JF/H2.png",
    label: "BRANDING AND ADVERTISING AGENCY",
    title: "Innovative <span>Solutions</span> for Modern Business",
    description:
      "From brand identity to marketing collateral, we create cohesive visual experiences that make your business stand out in today's competitive market.",
  },
];

let currentSlide = 0;
const hero = document.getElementById("hero");
const label = document.getElementById("slide-label");
const title = document.getElementById("slide-title");
const desc = document.getElementById("slide-desc");
const dots = document.querySelectorAll(".dot");

function renderSlide(index) {
  const slide = slides[index];
  hero.style.backgroundImage = `url(${slide.background})`;
  label.textContent = slide.label;
  title.innerHTML = slide.title;
  if (index === 1) {
    title.classList.add("second-title");
  } else {
    title.classList.remove("second-title");
  }
  desc.textContent = slide.description;
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

function setSlide(index) {
  currentSlide = index;
  renderSlide(index);
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  renderSlide(currentSlide);
}, 5000);

renderSlide(currentSlide);

const services = [
  {
    title: "Brand Identity",
    description:
      "We craft cohesive visual identities that communicate your brand's values and resonate with your audience.",
    icon: `assets/service1.svg`,
  },
  {
    title: "Digital Presence",
    description:
      "From websites to social media, we build digital experiences that elevate your brand in the online world.",
    icon: `assets/service2.svg`,
  },
  {
    title: "Brand Strategy",
    description:
      "We develop strategic frameworks that position your brand for growth and connect with your target market.",
    icon: `assets/service3.svg`,
  },
  {
    title: "Advertising",
    description:
      "Our campaigns cut through the noise with memorable messages that drive awareness and action.",
    icon: `assets/service4.svg`,
  },
  {
    title: "Design Services",
    description:
      "From packaging to print, our design solutions help your products stand out in competitive markets.",
    icon: `assets/service5.svg`,
  },
  {
    title: "Video Production",
    description:
      "We create compelling video content that tells your story and engages your audience across channels.",
    icon: `assets/service6.svg`,
  },
];

const grid = document.getElementById("services-grid");
services.forEach((service) => {
  const card = document.createElement("div");
  card.className = "section-2-card";
  card.innerHTML = `
    <img class="section-2-icon" src=${service.icon} alt="${service.title}" />
    <h3 class="section-2-card-title">${service.title}</h3>
    <p class="section-2-card-desc">${service.description}</p>
  `;
  grid.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();

const platformButtons = [
  {
    name: "Bus",
    defaultIcon: "assets/blackbus.svg",
    activeIcon: "assets/whitebus.svg",
  },
  {
    name: "Taxi",
    defaultIcon: "assets/blackcar.svg",
    activeIcon: "assets/whitecar.svg",
  },
  {
    name: "MRT Stations",
    defaultIcon: "assets/blacktrain.svg",
    activeIcon: "assets/whitetrain.svg",
  },
  {
    name: "Bus Hub",
    defaultIcon: "assets/blackhub.svg",
    activeIcon: "assets/whitehub.svg",
  },
  {
    name: "Digital",
    defaultIcon: "assets/blackdigital.svg",
    activeIcon: "assets/whitedigital.svg",
  },
  {
    name: "Billboard",
    defaultIcon: "assets/blackbhill.svg",
    activeIcon: "assets/whitebhill.svg",
  },
  {
    name: "HDB Digital Panel",
    defaultIcon: "assets/blackpanel.svg",
    activeIcon: "assets/whitepanel.svg",
  },
];

const onlinePlatforms = [
  {
    name: "Social Media",
    defaultIcon: "assets/b-social.svg",
    activeIcon: "assets/w-social.svg",
  },
  {
    name: "Search Engine",
    defaultIcon: "assets/b-search.svg",
    activeIcon: "assets/w-search.svg",
  },
  {
    name: "Display Network",
    defaultIcon: "assets/b-net.svg",
    activeIcon: "assets/w-net.svg",
  },
  {
    name: "Email Marketing",
    defaultIcon: "assets/b-mail.svg",
    activeIcon: "assets/w-mail.svg",
  },
  {
    name: "Video Advertising",
    defaultIcon: "assets/b-video.svg",
    activeIcon: "assets/w-video.svg",
  },
  {
    name: "Influencer Marketing",
    defaultIcon: "assets/b-mar.svg",
    activeIcon: "assets/w-mar.svg",
  },
  {
    name: "Live Streaming",
    defaultIcon: "assets/b-live.svg",
    activeIcon: "assets/w-live.svg",
  },
];

const contentMap = {
  Bus: {
    title: "Bus",
    titleImg: "assets/blue-bus.svg",
    subtitle: { title1: "Advertising Options", title2: "Benefits" },
    description: "Explore our range of advertising options for Bus:",
    arr: ["media/bus1.png", "media/bus2.png", "media/bus3.png"],
    options: [
      {
        title: "Full Bus Wrap",
        desc: "Complete coverage of the bus exterior for maximum impact.",
      },
      {
        title: "Side Panel Advertising",
        desc: "Large format advertising on the sides of buses.",
      },
      {
        title: "Rear Panel Advertising",
        desc: "High visibility placement on the back of buses.",
      },
    ],
    benefits: [
      {
        title: "High Visibility",
        desc: "Reach thousands of commuters and pedestrians daily.",
      },
      {
        title: "Geographic Targeting",
        desc: "Select specific routes to target your audience.",
      },
      {
        title: "Cost-Effective",
        desc: "Lower cost per impression compared to other media.",
      },
    ],
  },
  Taxi: {
    title: "Taxi",
    titleImg: "assets/blue-car.svg",
    subtitle: { title1: "Taxi Advertising Options", title2: "Benefits" },
    description: "Promote your brand with taxi advertising:",
    arr: ["media/taxi1.png", "media/taxi2.png", "media/taxi3.png"],
    options: [
      {
        title: "Full Taxi Wrap",
        desc: "Complete coverage of the taxi exterior for maximum impact.",
      },
      {
        title: "Mega Cab With Roof Top",
        desc: "Roof-mounted illuminated displays on Mega Cabs for enhanced visibility.",
      },
      {
        title: "3D CAB",
        desc: "Comes fitted with 3D light box on its top with LED lights, giving added visibility even in the night.",
      },
    ],
    benefits: [
      {
        title: "Mobile Visibility",
        desc: "Reach audiences across different areas of Singapore.",
      },
      {
        title: "24/7 Exposure",
        desc: "Continuous advertising presence throughout the day and night.",
      },
      {
        title: "Targeted Routes",
        desc: "Focus on specific areas based on your target audience.",
      },
    ],
  },
  "MRT Stations": {
    title: "MRT Stations",
    titleImg: "assets/blue-train.svg",
    subtitle: {
      title1: "Rail Station Advertising Options",
      title2: "Benefits",
    },
    description: "Explore our range of advertising options for Rail Stations:",
    arr: ["media/train1.png", "media/train2.png", "media/train3.png"],
    options: [
      {
        title: "Digital Display Screens",
        desc: "High-definition screens throughout stations for dynamic content.",
      },
      {
        title: "Platform Panel Advertising",
        desc: "Large format static displays on station platforms.",
      },
      {
        title: "Escalator & Staircase Branding",
        desc: "Creative advertising along escalators and staircases.",
      },
    ],
    benefits: [
      {
        title: "High Foot Traffic",
        desc: "Reach millions of commuters passing through stations daily.",
      },
      {
        title: "Extended Dwell Time",
        desc: "Captive audience waiting for trains or in transit.",
      },
      {
        title: "Strategic Locations",
        desc: "Target specific stations based on demographic profiles.",
      },
    ],
  },
  "Bus Hub": {
    title: "Bus Hub",
    titleImg: "assets/blue-home.svg",
    subtitle: { title1: "Bus Hub Advertising Options", title2: "Benefits" },
    description: "Explore our range of advertising options for Bus Hubs:",
    arr: ["media/hub1.png", "media/hub2.png", "media/hub3.png"],
    options: [
      {
        title: "Large Format Displays",
        desc: "Prominent advertising panels in high-traffic areas of bus interchanges.",
      },
      {
        title: "Digital Kiosks",
        desc: "Interactive digital displays for engaging content delivery.",
      },
      {
        title: "Waiting Area Branding",
        desc: "Comprehensive branding of commuter waiting areas.",
      },
    ],
    benefits: [
      {
        title: "Captive Audience",
        desc: "Reach commuters during their waiting time at interchanges.",
      },
      {
        title: "High Dwell Time",
        desc: "Extended exposure as commuters wait for their buses.",
      },
      {
        title: "Neighborhood Targeting",
        desc: "Target specific communities through local bus interchanges.",
      },
    ],
  },
  Digital: {
    title: "Digital",
    titleImg: "assets/blue-box.svg",
    subtitle: { title1: "Digital Advertising Options", title2: "Benefits" },
    description: "Explore our range of advertising options for Digital:",
    arr: [
      "media/Digital1.png",
      "media/Digital2.png",
      "media/Digital3.png",
      "media/Digital4.png",
    ],
    options: [
      {
        title: "Digital Bilboards",
        desc: "High-impact LED displays in prime locations across Singapore.",
      },
      {
        title: "LED Advertising Backpacks",
        desc: "Mobile digital displays worn by brand ambassadors for maximum visibility in crowded areas.",
      },
      {
        title: "Interactive Kiosks",
        desc: "Touchscreen displays allowing for interactive consumer engagement.",
      },
      {
        title: "Retail Digital Signage",
        desc: "Digital displays in shopping malls and retail environments.",
      },
    ],
    benefits: [
      {
        title: "Dynamic Content",
        desc: "Update messaging in real-time based on time, weather, or events.",
      },
      {
        title: "Enhanced Engagement",
        desc: "Capture attention with motion, video, and interactive elements.",
      },
      {
        title: "Precise Targeting",
        desc: "Schedule different content based on audience demographics.",
      },
    ],
  },
  Billboard: {
    title: "Billboard",
    titleImg: "assets/blue-bhill.svg",
    subtitle: { title1: "Billboard Advertising Options", title2: "Benefits" },
    description: "Explore our range of Billboard advertising options:",
    arr: ["media/bill1.png", "media/bill2.png", "media/bill3.png"],
    options: [
      {
        title: "Highway Billboards",
        desc: "Large format displays along major highways and expressways.",
      },
      {
        title: "Urban Billboards",
        desc: "Strategic placements in high-traffic urban areas.",
      },
      {
        title: "Spectacular Billboards",
        desc: "Oversized, premium displays in landmark locations.",
      },
    ],
    benefits: [
      {
        title: "Maximum Impact",
        desc: "Commanding presence that can't be ignored or skipped.",
      },
      {
        title: "24/7 Visibility",
        desc: "Continuous exposure day and night with illuminated options.",
      },
      {
        title: "Brand Building",
        desc: "Establish and reinforce brand presence in the physical world.",
      },
    ],
  },
  "HDB Digital Panel": {
    title: "HDB Digital Panel",
    titleImg: "assets/blue-panel.svg",
    subtitle: { title1: "HDB Digital Display Options", title2: "Benefits" },
    description:
      "Leverage digital display panels in HDB estates to reach local communities with targeted messaging and promotions:",
    arr: ["media/panel1.png", "media/panel2.png", "media/panel3.png"],
    options: [
      {
        title: "Lift Lobby Displays",
        desc: "High-traffic digital screens strategically placed in lift lobbies of HDB blocks for maximum resident exposure throughout the day.",
      },
      {
        title: "Void Deck Panels",
        desc: "Digital displays in community gathering areas and void decks where residents frequently socialize and pass through daily.",
      },
      {
        title: "Neighborhood Hub Screens",
        desc: "Premium placement in neighborhood centers, markets, and community hubs where residents shop and gather for essential services.",
      },
    ],
    benefits: [
      {
        title: "Hyperlocal Targeting",
        desc: "Precisely target specific HDB estates, neighborhoods, and demographic clusters based on residential profiles and income levels.",
      },
      {
        title: "Community Engagement",
        desc: "Connect with residents in their daily environment, building trust and familiarity with your brand through consistent exposure.",
      },
      {
        title: "High Frequency",
        desc: "Generate multiple daily impressions as residents pass by the same displays during their regular routines, reinforcing your message.",
      },
    ],
  },
  "Social Media": {
    title: "Social Media Marketing ",
    titleImg: "assets/blue-social.svg",
    subtitle: { title1: "Our Social Media Services", title2: "Benefits" },
    description:
      "Leverage the power of social media platforms to connect with your audience and grow your brand:",
    arr: ["media/social1.png", "media/social2.png", "media/social3.png"],
    options: [
      {
        title: "Content Creation & Curation",
        desc: "Engaging posts, stories, and videos tailored to each platform.",
      },
      {
        title: "Paid Social Advertising",
        desc: "Targeted ads on Facebook, Instagram, LinkedIn, and more.",
      },
      {
        title: "Community Management",
        desc: "Engaging with your audience and building relationships.",
      },
    ],
    benefits: [
      {
        title: "Increased Brand Awareness",
        desc: "Expand your reach and visibility across platforms.",
      },
      {
        title: "Direct Customer Engagement",
        desc: "Build relationships with your audience in real-time.",
      },
      {
        title: "Detailed Analytics",
        desc: "Track performance and optimize your strategy.",
      },
    ],
  },
  "Search Engine": {
    title: "Search Engine Marketing",
    titleImg: "assets/blue-search.svg",
    subtitle: {
      title1: "Google Ads & SEO Services",
      title2: "Why Choose Our Search Marketing Services?",
    },
    description:
      "Maximize your visibility on search engines and drive qualified traffic to your website:",
    arr: ["media/search1.png", "media/search2.png", "media/search3.png"],
    options: [
      {
        title: "Google Ads",
        desc: "Strategic paid search campaigns that place your business at the top of search results.",
      },
      { title: "Keyword Research & Strategy", desc: "" },
      { title: "Ad Copy Creation", desc: "" },
      { title: "Bid Management", desc: "" },
      { title: "Performance Tracking", desc: "" },
      {
        title: "Search Engine Optimization",
        desc: "Organic strategies to improve your website's visibility in search results.",
      },
      { title: "On-Page Optimization", desc: "" },
      { title: "Content Strategy", desc: "" },
      { title: "Technical SEO", desc: "" },
      { title: "Link Building", desc: "" },
    ],
    benefits: [
      {
        title: "Precise Targeting",
        desc: "Reach users actively searching for your products or services.",
        icon: "assets/target.svg",
      },
      {
        title: "Measurable ROI",
        desc: "Track conversions and optimize for maximum return.",
        icon: "assets/Measurable ROI.svg",
      },
      {
        title: "Data-Driven",
        desc: "Strategies based on analytics and performance data.",
        icon: "assets/Datadriven.svg",
      },
    ],
  },
  "Display Network": {
    title: "Display Network Advertising",
    titleImg: "assets/blue-net.svg",
    subtitle: {
      title1: "Our Display Advertising Services",
      title2: "Networks We Work With",
    },
    description:
      "Reach your audience across millions of websites with visually engaging display ads:",
    arr: ["media/net1.png", "media/net2.png", "media/net3.png"],
    options: [
      {
        title: "Banner Ad Creation",
        desc: "Eye-catching designs in all standard sizes.",
      },
      {
        title: "Remarketing Campaigns",
        desc: "Re-engage visitors who have shown interest in your brand.",
      },
      {
        title: "Programmatic Advertising",
        desc: "Automated buying of display ad space for maximum efficiency.",
      },
    ],
    networks: [
      {
        title: "Google Display Network",
        img: "assets/google.svg",
        class: "google-display-network",
      },
      {
        title: "Facebook Audience Network",
        img: "assets/facebook.svg",
        class: "facebook-audience-network",
      },
      { title: "Amazon DSP", img: "assets/amazon.svg", class: "amazon-dsp" },
      {
        title: "Premium Publishers",
        img: "assets/worldweb.svg",
        class: "premium-publishers",
      },
    ],
  },
  "Email Marketing": {
    title: "Email Marketing",
    titleImg: "assets/blue-mail.svg",
    description:
      "Connect directly with your audience through personalized email campaigns:",
    arr: ["media/email1.png", "media/email2.png", "media/email3.png"],
    sections: [
      {
        heading: "Campaign Creation",
        svg: "assets/blue-mail.svg",
        description:
          "Strategic email campaigns designed to engage your audience and drive conversions.",
        items: [
          { title: "Newsletter Design", desc: "" },
          { title: "Promotional Emails", desc: "" },
          { title: "Automated Sequences", desc: "" },
        ],
      },
      {
        heading: "Audience Management",
        svg: "assets/blue-mail.svg",
        description:
          "Build and segment your email lists for targeted messaging and better results.",
        items: [
          { title: "List Building", desc: "" },
          { title: "Segmentation", desc: "" },
          { title: "Personalization", desc: "" },
        ],
      },
      {
        heading: "Performance Analysis",
        svg: "assets/blue-mail.svg",
        description:
          "Track and analyze campaign performance to continuously improve results.",
        items: [
          { title: "Open Rate Tracking", desc: "" },
          { title: "Click-Through Analysis", desc: "" },
          { title: "Conversion Reporting", desc: "" },
        ],
      },
    ],
  },
  "Video Advertising": {
    title: "Video Advertising",
    titleImg: "assets/blue-video.svg",
    description:
      "Engage your audience with compelling video content across multiple platforms:",
    arr: ["media/video1.png", "media/video2.png", "media/video3.png"],
    productionServices: [
      {
        title: "Commercial Production",
        desc: "High-quality video ads for TV and digital platforms.",
      },
      {
        title: "Social Media Videos",
        desc: "Short-form content optimized for social platforms.",
      },
      {
        title: "Explainer Videos",
        desc: "Clear, engaging explanations of your products or services.",
      },
      {
        title: "Testimonial Videos",
        desc: "Authentic customer stories that build trust.",
      },
    ],
    platforms: [
      { title: "YouTube", icon: "assets/google.svg" },
      { title: "Facebook/Insta", icon: "assets/facebook-insta.svg" },
      { title: "TikTok", icon: "assets/tiktok.svg" },
      { title: "LinkedIn", icon: "assets/linkedin.svg" },
      { title: "OTT/CTV", icon: "assets/ott-ctv.svg" },
      { title: "Display Networks", icon: "assets/display-networks.svg" },
    ],
  },
  "Influencer Marketing": {
    title: "Influencer Marketing",
    titleImg: "assets/blue-mar.svg",
    subtitle: { title1: "Influencer Marketing Services", title2: "Benefits" },
    description:
      "Partner with influencers to amplify your brand's reach and credibility:",
    arr: [
      "media/Influencer1.png",
      "media/Influencer2.png",
      "media/Influencer3.png",
    ],
    options: [
      {
        title: "Influencer Partnerships",
        desc: "Collaborate with influencers to promote your brand.",
      },
      {
        title: "Sponsored Content",
        desc: "Authentic content created by influencers for your brand.",
      },
      {
        title: "Campaign Management",
        desc: "End-to-end management of influencer campaigns.",
      },
    ],
    benefits: [
      {
        title: "Trusted Voices",
        desc: "Leverage influencers' credibility to build trust.",
      },
      {
        title: "Targeted Reach",
        desc: "Connect with niche audiences through relevant influencers.",
      },
      {
        title: "Amplified Engagement",
        desc: "Drive engagement through authentic content.",
      },
    ],
  },
  "Live Streaming": {
    title: "Live Streaming",
    titleImg: "assets/blue-live.svg",
    subtitle: { title1: "Live Streaming Services", title2: "Software We Work With" },
    description:
      "Engage your audience in real-time with live streaming campaigns:",
    arr: [
      "media/live1.png",
      "media/live2.png",
      "media/live3.png",
      "media/live4.png",
    ],
    options: [
      {
        title: "Live Event Streaming",
        desc: "Broadcast events to a global audience in real-time.",
      },
      {
        title: "Product Launches",
        desc: "Showcase new products through interactive live streams.",
      },
      {
        title: "Q&A Sessions",
        desc: "Engage directly with your audience through live Q&A.",
      },
    ],
    benefits: [
      {
        title: "Real-Time Engagement",
        desc: "Connect with your audience instantly.",
      },
      {
        title: "Global Reach",
        desc: "Reach audiences worldwide without geographic limitations.",
      },
      {
        title: "Interactive Experience",
        desc: "Foster direct interaction with viewers.",
      },
    ],
  },
};

function updatePlatformContent(name) {
    $("#removeThisDiv").remove();
  // Toggle LED content visibility
  const ledContent = document.getElementById("ledContent");
  if (ledContent) {
    ledContent.style.display = name === "Digital" ? "flex" : "none";
  }

  const content = contentMap[name];
  if (!content) return;

  document.querySelector(".platforms-content-left-title-img").src =
    content.titleImg;
  document.querySelector(".platforms-content-left-title").textContent =
    content.title;
  document.querySelector(".platforms-content-left-des").textContent =
    content.description;

  const imgBody = document.querySelector(".platforms-content-left-img-body");
  imgBody.innerHTML = "";
  content.arr.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = content.title;
    imgBody.appendChild(img);
  });

  const textBox = document.querySelector(".platforms-content-left-text-box");
  textBox.innerHTML = "";
  textBox.className = `platforms-content-left-text-box ${name === "Search Engine" ||
      name === "Display Network" ||
      name === "Email Marketing" ||
      name === "Video Advertising"
      ? "search-engine-text-box"
      : ""
    }`;

  const createSection = (title, items, includeDesc = false, iconSrc = null) => {
    const section = document.createElement("div");
    section.className = "platforms-content-left-text-box-1";
    if (name === "Search Engine" || name === "Display Network") {
      section.classList.add("search-engine-box");
    }

    const titleContainer = document.createElement("div");
    titleContainer.className = "section-title-container";
    titleContainer.style.display = "flex";
    titleContainer.style.alignItems = "center";
    titleContainer.style.gap = "14px";

    if (iconSrc) {
      const icon = document.createElement("img");
      icon.src = iconSrc;
      icon.alt = `${title} icon`;
      icon.className = "section-title-icon";
      titleContainer.appendChild(icon);
    }

    const sectionTitle = document.createElement("div");
    sectionTitle.className = "platforms-content-left-text-box-title";
    sectionTitle.textContent = title;
    titleContainer.appendChild(sectionTitle);

    section.appendChild(titleContainer);

    if (includeDesc && items[0].desc) {
      const desc = document.createElement("p");
      desc.className = "platforms-content-left-tick-text-2";
      desc.textContent = items[0].desc;
      section.appendChild(desc);
    }

    const itemsContainer = document.createElement("div");
    itemsContainer.className = "stacked-items-container";

    items.forEach((i, index) => {
      if (includeDesc && index === 0) return;
      const itemBox = document.createElement("div");
      itemBox.className = "platforms-content-left-tick-text-box";
      itemBox.innerHTML = `
        <div><img src="assets/Icon (1).svg" alt="Checkmark"></div>
        <div>
          <div class="platforms-content-left-tick-text-1">${i.title}</div>
          <div class="platforms-content-left-tick-text-2">${i.desc}</div>
        </div>
      `;
      itemsContainer.appendChild(itemBox);
    });

    if (itemsContainer.hasChildNodes()) {
      section.appendChild(itemsContainer);
    }

    return section;
  };

  const createNetworkBox = (network) => {
    const networkBox = document.createElement("div");
    networkBox.className = `network-box display-network-box ${network.class}`;
    networkBox.innerHTML = `
      <img src="${network.img}" alt="${network.title}" class="network-icon">
      <div class="network-title">${network.title}</div>
    `;
    return networkBox;
  };

  const createBenefitBox = (title, desc, iconSrc = null) => {
    const benefitBox = document.createElement("div");
    benefitBox.className = "benefit-box";
    benefitBox.innerHTML = `
      ${iconSrc
        ? `<div class="srk_icon_bg"><img src="${iconSrc}" alt="${title} icon" class="benefit-icon"></div>`
        : ""
      }
      <div class="platforms-content-left-text-box-title">${title}</div>
      <div class="platforms-content-left-tick-text-2">${desc}</div>
    `;
    return benefitBox;
  };

  const createEmailSectionBox = (section) => {
    const sectionBox = document.createElement("div");
    sectionBox.className = "email-section-box";
    sectionBox.innerHTML = `
      <div class="srk_icon_bg"><img src="${section.svg}" alt="${section.heading
      } icon" class="email-section-icon"></div>
      <div class="email-section-heading">${section.heading}</div>
      <p class="email-section-desc">${section.description}</p>
      <ul class="email-tick-list">
        ${section.items
        .map(
          (item) => `
          <li class="email-tick-item">
            <img src="assets/Icon (1).svg" alt="Checkmark">
            ${item.title}
          </li>
        `
        )
        .join("")}
      </ul>
    `;
    return sectionBox;
  };

  const createVideoProductionItem = (item) => {
    const itemBox = document.createElement("div");
    itemBox.className = "video-production-item";
    itemBox.innerHTML = `
      <img src="assets/Icon (1).svg" alt="Checkmark">
      <div>
        <div class="video-production-item-title">${item.title}</div>
        <div class="video-production-item-desc">${item.desc}</div>
      </div>
    `;
    return itemBox;
  };

  const createVideoPlatformBox = (platform) => {
    const platformBox = document.createElement("div");
    platformBox.className = `video-platform-box ${platform.title
      .toLowerCase()
      .replace(/\//g, "-")}`;
    platformBox.innerHTML = `
      <div class="video-platform-content">
        <img src="${platform.icon}" alt="${platform.title} icon" class="video-platform-left-icon">
        <p>${platform.title}</p>
      </div>
    `;
    return platformBox;
  };

  if (name === "Search Engine") {
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "search-engine-options-container";
    optionsContainer.style.display = "flex";
    optionsContainer.style.gap = "20px";
    optionsContainer.style.marginBottom = "20px";

    const googleAdsItems = content.options.slice(0, 5);
    const googleAdsSection = createSection(
      googleAdsItems[0].title,
      googleAdsItems,
      true,
      "assets/google.svg"
    );

    const seoItems = content.options.slice(5, 10);
    const seoSection = createSection(
      seoItems[0].title,
      seoItems,
      true,
      "assets/blue-search.svg"
    );

    optionsContainer.appendChild(googleAdsSection);
    optionsContainer.appendChild(seoSection);

    const benefitsSection = document.createElement("div");
    benefitsSection.className = "platforms-content-left-text-box-1";
    benefitsSection.classList.add("search-engine-box");
    const benefitsTitle = document.createElement("div");
    benefitsTitle.className =
      "platforms-content-left-text-box-title benefits-title";
    benefitsTitle.textContent = content.subtitle.title2;
    benefitsSection.appendChild(benefitsTitle);

    const benefitsContainer = document.createElement("div");
    benefitsContainer.className = "benefits-container";
    benefitsContainer.style.flexDirection = "row";

    content.benefits.forEach((benefit) => {
      const benefitBox = createBenefitBox(
        benefit.title,
        benefit.desc,
        benefit.icon
      );
      benefitsContainer.appendChild(benefitBox);
    });

    benefitsSection.appendChild(benefitsContainer);

    textBox.appendChild(optionsContainer);
    textBox.appendChild(benefitsSection);
  } else if (name === "Display Network") {
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "display-network-options-container";
    optionsContainer.style.display = "flex";
    optionsContainer.style.gap = "20px";
    optionsContainer.style.marginBottom = "20px";

    const servicesSection = document.createElement("div");
    servicesSection.className = "platforms-content-left-text-box-1";
    servicesSection.style.flex = "1";

    const servicesTitle = document.createElement("div");
    servicesTitle.className = "platforms-content-left-text-box-title";
    servicesTitle.textContent = content.subtitle.title1;
    servicesSection.appendChild(servicesTitle);

    const servicesItemsContainer = document.createElement("div");
    servicesItemsContainer.className = "stacked-items-container";
    servicesItemsContainer.style.marginTop = "10px";

    content.options.forEach((option) => {
      const itemBox = document.createElement("div");
      itemBox.className = "platforms-content-left-tick-text-box";
      itemBox.innerHTML = `
        <div><img src="assets/Icon (1).svg" alt="Checkmark"></div>
        <div>
          <div class="platforms-content-left-tick-text-1">${option.title}</div>
          <div class="platforms-content-left-tick-text-2">${option.desc}</div>
        </div>
      `;
      servicesItemsContainer.appendChild(itemBox);
    });

    servicesSection.appendChild(servicesItemsContainer);

    const networksSection = document.createElement("div");
    networksSection.className = "platforms-content-left-text-box-1";
    networksSection.style.flex = "1";

    const networksTitle = document.createElement("div");
    networksTitle.className = "platforms-content-left-text-box-title";
    networksTitle.textContent = content.subtitle.title2;
    networksSection.appendChild(networksTitle);

    const networksContainer = document.createElement("div");
    networksContainer.className = "networks-container";
    // networksContainer.style.display = "grid";
    // networksContainer.style.gridTemplateColumns =
    //   "repeat(auto-fit, minmax(200px, 1fr))";
    // networksContainer.style.gap = "10px";
    // networksContainer.style.marginTop = "10px";

    content.networks.forEach((network) => {
      const networkBox = createNetworkBox(network);
      networksContainer.appendChild(networkBox);
    });

    networksSection.appendChild(networksContainer);

    optionsContainer.appendChild(servicesSection);
    optionsContainer.appendChild(networksSection);

    textBox.appendChild(optionsContainer);
  } else if (name === "Email Marketing") {
    const headingsContainer = document.createElement("div");
    headingsContainer.className = "email-headings-container";
    headingsContainer.style.display = "flex";
    headingsContainer.style.gap = "20px";
    headingsContainer.style.marginBottom = "20px";
    headingsContainer.style.justifyContent = "center";

    content.sections.forEach((section) => {
      const sectionBox = createEmailSectionBox(section);
      headingsContainer.appendChild(sectionBox);
    });

    textBox.appendChild(headingsContainer);
  } else if (name === "Video Advertising") {
    const videoContent = document.createElement("div");
    videoContent.className = "video-advertising-content";

    // Left Side: Video Production Services
    const productionSection = document.createElement("div");
    productionSection.className = "video-production-services";

    const productionTitle = document.createElement("div");
    productionTitle.className = "video-production-title";
    productionTitle.textContent = "Video Production Services";
    productionSection.appendChild(productionTitle);

    content.productionServices.forEach((item) => {
      const productionItem = createVideoProductionItem(item);
      productionSection.appendChild(productionItem);
    });

    // Right Side: Video Advertising Platforms
    const platformsSection = document.createElement("div");
    platformsSection.className = "video-advertising-platforms";

    const platformsTitle = document.createElement("div");
    platformsTitle.className = "video-advertising-platforms-title";
    platformsTitle.textContent = "Video Advertising Platforms";
    platformsSection.appendChild(platformsTitle);

    const platformsGrid = document.createElement("div");
    platformsGrid.className = "video-platforms-grid";
    content.platforms.forEach((platform) => {
      const platformBox = createVideoPlatformBox(platform);
      platformsGrid.appendChild(platformBox);
    });

    platformsSection.appendChild(platformsGrid);

    videoContent.appendChild(productionSection);
    videoContent.appendChild(platformsSection);

    textBox.appendChild(videoContent);

  } else if(name === "Live Streaming"){
    const liveStreamContent = `  <div class="platforms-content-left-text-box ">
    <div class="platforms-content-left-text-box-1">
      <div class="section-title-container" style="display: flex; align-items: center; gap: 14px;">
        <div class="platforms-content-left-text-box-title">Live Streaming Services</div>
      </div>
      <div class="stacked-items-container">
        <div class="platforms-content-left-tick-text-box">
          <div><img src="assets/Icon (1).svg" alt="Checkmark"></div>
          <div>
            <div class="platforms-content-left-tick-text-1">Multi-Platform Broadcasting</div>
            <div class="platforms-content-left-tick-text-2">Simultaneously stream to YouTube, Facebook, Instagram, and other platforms to maximize your reach.</div>
          </div>
        </div>
        <div class="platforms-content-left-tick-text-box">
          <div><img src="assets/Icon (1).svg" alt="Checkmark"></div>
          <div>
            <div class="platforms-content-left-tick-text-1">Professional Production</div>
            <div class="platforms-content-left-tick-text-2">High-quality equipment, multiple camera setups, and expert production team for polished broadcasts.
            </div>
          </div>
        </div>
        <div class="platforms-content-left-tick-text-box">
          <div><img src="assets/Icon (1).svg" alt="Checkmark"></div>
          <div>
            <div class="platforms-content-left-tick-text-1">Interactive Features</div>
            <div class="platforms-content-left-tick-text-2">Real-time audience engagement with Q&A, polls, and interactive elements to boost participation.
            </div>
          </div>
        </div>
        <div class="platforms-content-left-tick-text-box">
          <div><img src="assets/Icon (1).svg" alt="Checkmark"></div>
          <div>
            <div class="platforms-content-left-tick-text-1">Wedding Video Streaming</div>
            <div class="platforms-content-left-tick-text-2">Share your special day with loved ones who can't attend in person with our dedicated wedding streaming service.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="platforms-content-left-text-box-1">
      <div class="section-title-container" style="display: flex; align-items: center; gap: 14px;">
        <div class="platforms-content-left-text-box-title">Software We Work With</div>
      </div>
      <div class="srk_software-section">
        <div class="srk_software-grid">
          <div class="srk_software-item">
            <div class="srk_software-icon">
              <img src="assets/steam_icon.png" alt="Steam">
            </div>
            <div class="srk_software-name">Steam</div>
          </div>
          <div class="srk_software-item">
            <div class="srk_software-icon">
              <img src="assets/streamlab_icon.png" alt="Streamlabs">
            </div>
            <div class="srk_software-name">Streamlabs</div>
          </div>
          <div class="srk_software-item">
            <div class="srk_software-icon">
              <img src="assets/wirecast_icon.png" alt="Wirecast">
            </div>
            <div class="srk_software-name">Wirecast</div>
          </div>
          <div class="srk_software-item">
            <div class="srk_software-icon">
              <img src="assets/vmix_icon.png" alt="vMix">
            </div>
            <div class="srk_software-name">vMix</div>
          </div>
          <div class="srk_software-item">
            <div class="srk_software-icon">
              <img src="assets/xsplit_icon.png" alt="XSplit">
            </div>
            <div class="srk_software-name">XSplit</div>
          </div>
          <div class="srk_software-item">
            <div class="srk_software-icon">
              <img src="assets/restream_icon.png" alt="Restream">
            </div>
            <div class="srk_software-name">Restream</div>
          </div>
        </div>
      </div>
    </div>
  </div>`
    $(".platforms-content-left-img-container").after(liveStreamContent)
  } else if (name == "Digital") {
    const optionsSection = createSection(
      content.subtitle.title1,
      content.options
    );
    const benefitsSection = createSection(
      content.subtitle.title2,
      content.benefits,
      content.led
    );
    textBox.appendChild(optionsSection);
    textBox.appendChild(benefitsSection);
  } else {
    const optionsSection = createSection(
      content.subtitle.title1,
      content.options
    );
    const benefitsSection = createSection(
      content.subtitle.title2,
      content.benefits
    );
    textBox.appendChild(optionsSection);
    textBox.appendChild(benefitsSection);
  }

  if(name === "Influencer Marketing"){
    // alert("inf")
    // $("#influmencerMarketingSection").removeClass("d-none");
    const influContent = `<div class="platforms-content-left-text-box-1 search-engine-box" id="removeThisDiv" style="margin-top: 40px;">
    <div class="platforms-content-left-text-box-title benefits-title">Our Influencer Marketing Approach</div>
    <div class="benefits-container" style="flex-direction: row;">
      <div class="benefit-box">
        <div class="srk_icon_bg"><img src="assets/Influencer_Discovery.png" alt="Influencer Discovery icon" class="benefit-icon"></div>
        <div class="platforms-content-left-text-box-title">Influencer Discovery</div>
        <div class="platforms-content-left-tick-text-2">Finding the perfect influencers who align with your brand values.
        </div>
      </div>
      <div class="benefit-box">
        <div class="srk_icon_bg"><img src="assets/Campaign_Planning.png" alt="Campaign Planning icon" class="benefit-icon">
        </div>
        <div class="platforms-content-left-text-box-title">Campaign Planning</div>
        <div class="platforms-content-left-tick-text-2">Developing strategic campaigns with clear objectives.</div>
      </div>
      <div class="benefit-box">
        <div class="srk_icon_bg"><img src="assets/Relationship_Management.png" alt="Relationship Management icon" class="benefit-icon"></div>
        <div class="platforms-content-left-text-box-title">Relationship Management</div>
        <div class="platforms-content-left-tick-text-2">Building and maintaining strong influencer partnerships.</div>
      </div>
       <div class="benefit-box">
        <div class="srk_icon_bg"><img src="assets/Performance_Tracking.png" alt="Performance Tracking icon" class="benefit-icon"></div>
        <div class="platforms-content-left-text-box-title">Performance Tracking</div>
        <div class="platforms-content-left-tick-text-2">Measuring campaign results and ROI.</div>
      </div>
    </div>
  </div>`
    $(".platforms-content-left-img-container").after(influContent);
    // $(".platforms-content-left-img-container").after($("#influmencerMarketingSection").html());
  }

  const quoteButton = document.createElement("button");
  quoteButton.className = "platforms-quote-button";
  quoteButton.textContent = "Get a Quote";
  quoteButton.style.marginTop = "30px";
  quoteButton.style.display = "block";
  quoteButton.onclick = () => {
    window.location.href = "#contact";
  };
  // textBox.appendChild(quoteButton);
}

function renderButtons(platformArray, defaultSelectedName) {
  const buttonBox = document.querySelector(".platforms-content-right-btn-box");
  buttonBox.innerHTML = "";
  platformArray.forEach((platform) => {
    const button = document.createElement("button");
    button.className = "platforms-content-right-btn";
    button.dataset.name = platform.name;
    const isActive = platform.name === defaultSelectedName;
    if (isActive) button.classList.add("active");
    button.innerHTML = `
      <img src="${isActive ? platform.activeIcon : platform.defaultIcon
      }" alt="${platform.name}" />
      ${platform.name}
    `;
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".platforms-content-right-btn")
        .forEach((btn) => {
          btn.classList.remove("active");
          const btnName = btn.dataset.name;
          const btnPlatform = platformArray.find((p) => p.name === btnName);
          btn.querySelector("img").src = btnPlatform.defaultIcon;
        });
      button.classList.add("active");
      button.querySelector("img").src = platform.activeIcon;
      updatePlatformContent(platform.name);
    });
    buttonBox.appendChild(button);
  });
  if (defaultSelectedName == "Social Media") {
    const element = document.querySelector('[data-name="Social Media"]');
    if (element) {
      element.click();
    }
  }
  if (defaultSelectedName == "Bus") {
    const element = document.querySelector('[data-name="Bus"]');
    if (element) {
      element.click();
    }
  }
}

const offlineBtn = document.getElementById("offlineBtn");
const onlineBtn = document.getElementById("onlineBtn");
const highlight = document.getElementById("toggleHighlight");

offlineBtn.addEventListener("click", () => {
  highlight.style.left = "5px";
  offlineBtn.classList.add("active");
  onlineBtn.classList.remove("active");
  renderButtons(platformButtons, "Bus");
});

onlineBtn.addEventListener("click", () => {
  highlight.style.left = "calc(48%)";
  onlineBtn.classList.add("active");
  offlineBtn.classList.remove("active");
  renderButtons(onlinePlatforms, "Social Media");
});

renderButtons(platformButtons, "Bus");
updatePlatformContent("Bus");

function scrollImages(direction) {
  const container = document.querySelector(".platforms-content-left-img-body");
  const scrollAmount = 1000;
  container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

// function scrollImages(direction) {
//   const container = document.querySelector(".platforms-content-left-img-body");
//   const image = container.querySelector("img");
//   if (!image) return;

//   const imageStyle = window.getComputedStyle(image);
//   const marginRight = parseInt(imageStyle.marginRight) || 0;
//   const marginLeft = parseInt(imageStyle.marginLeft) || 0;
//   const gap = marginLeft + marginRight;

//   const totalScroll = image.offsetWidth + gap;
//   container.scrollBy({ left: direction * totalScroll, behavior: "smooth" });
// }



document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

function bookConsultation() {
  window.location.href = "#contact";
}

// Enhanced form submission handler to prevent page re-render
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact-form-box");
  const submitButton = document.querySelector(".contact-form-box button[type='submit']");

  if (!contactForm) {
    console.error("Contact form with class 'contact-form-box' not found.");
    return;
  }

  if (!submitButton) {
    console.warn("Submit button not found in contact form. Ensure button has type='submit'.");
  }

  // Form submission handler
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Form submission intercepted.");

    // Get form input values
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const companyName = document.getElementById("company")?.value.trim();
    const subject = document.getElementById("subject")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    // Log form data for debuggin

    // Basic validation
    if (!name || !email || !subject || !message) {
      showFeedback("Please fill in all required fields (Name, Email, Subject, Message).", "error");

      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback("Please enter a valid email address.", "error");
      console.log("Validation failed: Invalid email format.");
      return;
    }

    // Prepare data for API
    const formData = {
      name,
      email,
      companyName,
      subject,
      message,
    };

    try {
      console.log("Sending API request to http://192.168.223.119:5005/api/Contact");
      const response = await fetch("http://192.168.223.119:5005/api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("API Response Status:", response.status);

      if (response.ok) {
        showFeedback("Your message has been sent successfully!", "success");
        contactForm.reset();

      } else {
        const errorData = await response.json().catch(() => ({}));
        showFeedback(`Failed to send message: ${errorData.message || "Unknown error"}`, "error");
        console.log("API Error Response:", errorData);
      }
    } catch (error) {
      showFeedback("An error occurred while sending your message. Please try again later.", "error");
      console.error("API Request Error:", error);
    }
  });

  // Additional submit button handler to catch direct clicks
  if (submitButton) {
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Submit button clicked.");
      contactForm.dispatchEvent(new Event("submit", { cancelable: true }));
    });
  }
});

// Function to show feedback messages
function showFeedback(message, type) {
  // Remove any existing feedback messages
  const existingFeedback = document.querySelector(".feedback-message");
  if (existingFeedback) {
    existingFeedback.remove();
  }

  // Create feedback element
  const feedback = document.createElement("div");
  feedback.className = `feedback-message ${type}`;
  feedback.textContent = message;
  feedback.style.padding = "10px";
  feedback.style.marginTop = "10px";
  feedback.style.borderRadius = "5px";
  feedback.style.color = "#fff";
  feedback.style.backgroundColor = type === "success" ? "#28a745" : "#dc3545";
  feedback.style.textAlign = "center";

  // Append feedback to the form
  const contactForm = document.querySelector(".contact-form-box");
  if (contactForm) {
    contactForm.appendChild(feedback);
  } else {
    document.body.appendChild(feedback);
  }

  // Remove feedback after 5 seconds
  setTimeout(() => {
    feedback.remove();
  }, 5000);
}

