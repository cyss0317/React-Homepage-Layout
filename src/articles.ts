export interface ArticleType {
  title: string;
  header: string;
  href: string;
  photoPosition: string;
  photoUrl: string;
  photoAlt: string;
  description: string;
}

interface Articles {
  [key: string]: ArticleType;
}

export const articles: Articles = {
  About: {
    title: "About",
    header: "Your Path to Financial Freedom Starts Here",
    href: "#about",
    photoPosition: "right",
    photoUrl:
      "https://i0.wp.com/jonathanfinancial.com/wp-content/uploads/2021/01/consulting-companies-cover.jpg?fit=1024%2C538&ssl=1",
    photoAlt: "About picture",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, magni. Molestias quibusdam vitae a magnam aut, recusandae similique fuga ex dolorum soluta quas saepe vel cupiditate ratione harum aliquid architecto. Esse porro ad pariatur voluptates, minus aliquid dolorem fuga aut fugiat optio maiores aliquam officiis veniam illo libero explicabo, a in corporis suscipit. Aliquid eaque inventore amet soluta. Sit cumque, rerum officiis in corrupti, ducimus asperiores eaque eum facere veritatis error excepturi molestias aliquam modi quasi odit suscipit officia saepe. Itaque illo nobis, velit quos blanditiis quas similique fuga dolores corrupti labore facere impedit quibusdam molestiae totam esse ab culpa officia quasi asperiores pariatur, adipisci deserunt dicta? Minima delectus itaque, in nesciunt ipsum sint, enim dicta magnam eius non porro omnis nostrum modi consequuntur alias minus ratione eligendi neque, fugiat nisi nihil. Quidem placeat sunt assumenda explicabo ratione quis fugiat molestiae incidunt minus rerum impedit, beatae delectus, recusandae neque obcaecati.",
  },
  Services: {
    title: "Services",
    header: "Our Services",
    href: "#services",
    photoPosition: "left",
    photoUrl:
      "https://i0.wp.com/jonathanfinancial.com/wp-content/uploads/2021/01/crw_600h_300.jpg?fit=600%2C300&ssl=1",
    photoAlt: "Services picture",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, magni. Molestias quibusdam vitae a magnam aut, recusandae similique fuga ex dolorum soluta quas saepe vel cupiditate ratione harum aliquid architecto. Esse porro ad pariatur voluptates, minus aliquid dolorem fuga aut fugiat optio maiores aliquam officiis veniam illo libero explicabo, a in corporis suscipit. Aliquid eaque inventore amet soluta. Sit cumque, rerum officiis in corrupti, ducimus asperiores eaque eum facere veritatis error excepturi molestias aliquam modi quasi odit suscipit officia saepe. Itaque illo nobis, velit quos blanditiis quas similique fuga dolores corrupti labore facere impedit quibusdam molestiae totam esse ab culpa officia quasi asperiores pariatur, adipisci deserunt dicta? Minima delectus itaque, in nesciunt ipsum sint, enim dicta magnam eius non porro omnis nostrum modi consequuntur alias minus ratione eligendi neque, fugiat nisi nihil. Quidem placeat sunt assumenda explicabo ratione quis fugiat molestiae incidunt minus rerum impedit, beatae delectus, recusandae neque obcaecati.",
  },
  Contact: {
    title: "Contact",
    header: "What Our Clients Say",
    href: "#contact",
    photoPosition: "right",
    photoUrl:
      "https://i0.wp.com/jonathanfinancial.com/wp-content/uploads/2016/11/img_32547966.jpg?fit=833%2C440&ssl=1",
    photoAlt: "Contact picture",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, magni. Molestias quibusdam vitae a magnam aut, recusandae similique fuga ex dolorum soluta quas saepe vel cupiditate ratione harum aliquid architecto. Esse porro ad pariatur voluptates, minus aliquid dolorem fuga aut fugiat optio maiores aliquam officiis veniam illo libero explicabo, a in corporis suscipit. Aliquid eaque inventore amet soluta. Sit cumque, rerum officiis in corrupti, ducimus asperiores eaque eum facere veritatis error excepturi molestias aliquam modi quasi odit suscipit officia saepe. Itaque illo nobis, velit quos blanditiis quas similique fuga dolores corrupti labore facere impedit quibusdam molestiae totam esse ab culpa officia quasi asperiores pariatur, adipisci deserunt dicta? Minima delectus itaque, in nesciunt ipsum sint, enim dicta magnam eius non porro omnis nostrum modi consequuntur alias minus ratione eligendi neque, fugiat nisi nihil. Quidem placeat sunt assumenda explicabo ratione quis fugiat molestiae incidunt minus rerum impedit, beatae delectus, recusandae neque obcaecati.",
  },
  // Facebook: {
  //   title: <FaFacebook />,
  //   header: "Facebook",
  //   href: "https://www.facebook.com",
  //   photoPosition: "right",
  //   photoUrl: "https://via.placeholder.com/300",
  //   photoAlt: "placeholder",
  //   description: "Follow us on Facebook for the latest news and updates.",
  // },
  // Instagram: {
  //   title: <FaInstagram />,
  //   header: "Instagram",
  //   href: "https://www.instagram.com",
  //   photoPosition: "right",
  //   photoUrl: "https://via.placeholder.com/300",
  //   photoAlt: "placeholder",
  //   description: "Follow us on Instagram for the latest news and updates.",
  // },
  // Twitter: {
  //   title: <FaTwitter />,
  //   header: "Twitter",
  //   href: "https://www.twitter.com",
  //   photoPosition: "right",
  //   photoUrl: "https://via.placeholder.com/300",
  //   photoAlt: "placeholder",
  //   description: "Follow us on Twitter for the latest news and updates.",
  // },
};
