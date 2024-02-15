import { reactive } from "vue";

export const store = reactive({
  courses: [
    {
      id: 1,
      price: "Free",
      name: "Personal Finance: Financial Security Thinking & Principles",
      lesson: 2,
      imgpath: "course-02-480x298.jpg",
      students: 300,
    },
    {
      id: 2,
      price: "$40.00",
      name: "Learning to Write as a Professional Author",
      lesson: 20,
      imgpath: "course-02-480x298.jpg",
      students: 77,
    },
    {
      id: 3,
      price: "Free",
      name: "Customer-centric Info-Tech Strategies",
      lesson: 24,
      imgpath: "stock-full-hd-03-480x298.jpg",
      students: 957,
    },
    {
      id: 4,
      price: "$19.00",
      name: "Open Programming Courses for Everyone: Python",
      lesson: 17,
      imgpath: "stock-full-hd-04-480x298.jpg",
      students: 66,
    },
    {
      id: 5,
      price: "$26.00",
      name: "Academic Listening and Note-taking",
      lesson: 14,
      imgpath: "stock-full-hd-05-480x298.jpg",
      students: 68,
    },
    {
      id: 6,
      price: "$39.00",
      name: "Master jQuery in a Short Period of Time",
      lesson: 6,
      imgpath: "stock-full-hd-06-480x298.jpg",
      students: 51,
    },
  ],

  tutorings: [
    {
      id: 1,
      title: "Customize Preferences",
      text: "Learners are given the right to arrange and customize their study schedule and timetable based on preferences.",
      imgpath: "home-2-image-box-01.png",
      link: "Start here",
    },
    {
      id: 2,
      title: "Cloud Storage",
      text: "You can store online lessons via online cloud or download to your device and revise lessons on the way.",
      imgpath: "about-us-02-image-box-02.png",
      link: "Get Free Quote",
    },
    {
      id: 3,
      title: "Multimedia Channels",
      text: "We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.",
      imgpath: "home-2-image-box-03.png",
      link: "Start now",
    },
  ],

  cards: [
    {
      id: 1,
      title: "Ten Benefits Of Rentals That May Change Your Perspective",
      subtitle: "BUSINESS",
      value: 1790,
      imgpath: "home-personal-finance-blog-03-480x352.jpg",
      date: "Dec 28, 2020",
      views: "3,060",
    },
    {
      id: 2,
      title: "10 Things Successful Mompreneurs Do Different",
      subtitle: "BUSINESS",
      value: 1790,
      imgpath: "home-personal-finance-blog-02-480x352.jpg",
      date: "Dec 28, 2020",
      views: "2,684",
    },
  ],

  blogs: [
    {
      id: 1,
      title: "Successfully trained",
      value: 1790,
      subtitle: "ENROLLED LEARNERS",
    },
    {
      id: 2,
      title: "Proudly Received",
      value: 19,
      subtitle: "COUNTRYWIDE AWARDS",
    },
    {
      id: 3,
      title: "Firmly Established",
      value: 24,
      subtitle: "LOCAL BRANCHES",
    },
    {
      id: 4,
      title: "Getting Featured on",
      value: 1090,
      subtitle: "BLOG POSTS",
    },
  ],
  partners: [
    "client-logo-01.png",
    "client-logo-02.png",
    "client-logo-03.png",
    "client-logo-04.png",
    "client-logo-05.png",
    "client-logo-06.png",
  ],
});
