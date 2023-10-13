import postImg from '../assets/demo-post-image.jpg'

export const verifiedBlogData = [
    {
      id: 1,
      comments: [],
      blog_paragraphs: [
        {
          input_text: "This is the first paragraph of the blog.",
          image: "image1.jpg",
        },
        {
          input_text: "Here's the second paragraph with an image.",
          image: "image2.jpg",
        },
      ],
      title: "Sample Blog Post 1",
      main_image: postImg,
      author: "John Doe",
      category: "Technology",
      date_created: "2023-10-12",
      get_paragraph_intro: "In this blog, we'll discuss various topics related to technology.",
    },
    {
      id: 2,
      comments: [],
      blog_paragraphs: [
        {
          input_text: "Introduction to the topic of the blog.",
          image: "intro_image.jpg",
        },
        {
          input_text: "Now, let's delve deeper into the subject matter.",
          image: "deep_dive_image.jpg",
        },
      ],
      title: "Exploring a New Concept",
      main_image:postImg,
      author: "Jane Smith",
      category: "Science",
      date_created: "2023-10-11",
      get_paragraph_intro: "Join us on a journey to explore a fascinating concept.",
    },
    {
      id: 3,
      comments: [],
      blog_paragraphs: [
        {
          input_text: "The story begins here...",
          image: "story_start_image.jpg",
        },
        {
          input_text: "And it continues with unexpected twists.",
          image: "twists_image.jpg",
        },
      ],
      title: "A Thrilling Adventure",
      main_image:postImg,
      author: "Mark Johnson",
      category: "Adventure",
      date_created: "2023-10-10",
      get_paragraph_intro: "Buckle up for an exciting adventure with unexpected surprises.",
    },
    {
      id: 4,
      comments: [],
      blog_paragraphs: [
        {
          input_text: "Let's talk about a thought-provoking topic.",
          image: "thought_image.jpg",
        },
        {
          input_text: "Diving deep into the subject matter.",
          image: "deep_thought_image.jpg",
        },
      ],
      title: "Contemplations and Reflections",
      main_image: postImg,
      author: "Alice Carter",
      category: "Philosophy",
      date_created: "2023-10-09",
      get_paragraph_intro: "Explore philosophical musings and reflections in this blog.",
    },
    {
      id: 5,
      comments: [],
      blog_paragraphs: [
        {
          input_text: "Discover the beauty of nature.",
          image: "nature_beauty_image.jpg",
        },
        {
          input_text: "A journey through picturesque landscapes awaits.",
          image: "landscapes_image.jpg",
        },
      ],
      title: "Nature's Wonders",
      main_image:postImg,
      author: "Ella Williams",
      category: "Nature",
      date_created: "2023-10-08",
      get_paragraph_intro: "Immerse yourself in the wonders of the natural world."
    },
  ];
  

  