

const movie = {
    id: 2,
    name: 'Movie name',
    imgUrl: 'https://www.elpespunte.es/wp-content/uploads/2024/02/john-wick-5-keanu-reeves-John-Wick-Baba-Yaga-cinema-lionsgate-1024x576-1.jpeg.webp',
    score: 4.6,
    genre: 'Action',
    sinopsis: 'The core functionality of the MovieHub application will serve as a practical platform for tracking movies that users have watched. Each movie will feature essential details such as name, rating, and genre. Users will have the capability to perform CRUD (Create, Read, Update, Delete) operations on this movie list. '
}

export const movies = [ movie, movie, movie, movie, movie ]


export const genres = [
    {
      id: 1,
      name: 'Action',
      description: 'Films that have a lot of exciting scenes, usually with a lot of fighting, explosions, and fast-paced sequences.'
    },
    {
      id: 2,
      name: 'Comedy',
      description: 'Movies designed to make the audience laugh with humorous content, jokes, and satirical themes.'
    },
    {
      id: 3,
      name: 'Drama',
      description: 'Films that focus on realistic storytelling and character development, often dealing with emotional themes and interpersonal relationships.'
    },
    {
      id: 4,
      name: 'Horror',
      description: 'Movies intended to scare the audience, often featuring supernatural elements, monsters, or psychological thrills.'
    },
    {
      id: 5,
      name: 'Science Fiction',
      description: 'Films that explore futuristic concepts, advanced technology, space exploration, time travel, and extraterrestrial life.'
    },
    {
      id: 6,
      name: 'Fantasy',
      description: 'Movies that involve magical elements, mythical creatures, and fantastical worlds, often set in imaginary universes.'
    },
    {
      id: 7,
      name: 'Romance',
      description: 'Films that focus on romantic relationships and the emotional journeys of the characters involved in love stories.'
    },
    {
      id: 8,
      name: 'Thriller',
      description: 'Movies designed to keep the audience on the edge of their seats with suspense, tension, and excitement, often involving crime or espionage.'
    },
    {
      id: 9,
      name: 'Mystery',
      description: 'Films that revolve around solving a puzzle or uncovering secrets, often involving a detective or investigator.'
    },
    {
      id: 10,
      name: 'Documentary',
      description: 'Non-fiction films that document real events, people, and stories, often with an educational or informative focus.'
    },
    {
      id: 11,
      name: 'Animation',
      description: 'Movies created using animated techniques, often aimed at children but also enjoyed by adults, with varied storytelling styles.'
    },
    {
      id: 12,
      name: 'Adventure',
      description: 'Films that take the audience on an exciting journey, often involving quests, exploration, and new discoveries.'
    },
    {
      id: 13,
      name: 'Musical',
      description: 'Movies where characters express themselves through song and dance, often featuring elaborate musical numbers and performances.'
    },
    {
      id: 14,
      name: 'Western',
      description: 'Films set in the American West, typically during the late 19th century, focusing on cowboys, outlaws, and frontier life.'
    },
    {
      id: 15,
      name: 'Biography',
      description: 'Films that tell the life story of a real person, often highlighting their achievements, struggles, and impact on society.'
    }
  ];

export const user = {
   id: 1,
   name: 'user 1',
   email: 'example@example.com',
   password: 'password',
   movies: [1,2,4,5,6] 
}

export const users = [ user, user, user, user, user ]
  