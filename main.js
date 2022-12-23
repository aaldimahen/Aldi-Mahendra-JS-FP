function findMovies(favoriteGenre) {

  const movies = [
    {
      id: 1,
      name: "Avengers end game",
      genre: "Action",
      soldTicket: 149,
      capacity: 150,
    },
    {
      id: 2,
      name: "La la Land",
      genre: "Romance",
      soldTicket: 20,
      capacity: 75,
    },
    {
      id: 3,
      name: "Beauty and the Beast",
      genre: "Romance",
      soldTicket: 50,
      capacity: 50,
    },
    {
      id: 4,
      name: "Superman vs Batman",
      genre: "Action",
      soldTicket: 150,
      capacity: 250,
    },
    {
      id: 5,
      name: "Transformer",
      genre: "Action",
      soldTicket: 90,
      capacity: 90,
    },
    {
      id: 6,
      name: "5 feet apart",
      genre: "Romance",
      soldTicket: 25,
      capacity: 45,
    },
    {
      id: 7,
      name: "Hamilton",
      genre: "Musical",
      soldTicket: 295,
      capacity: 300,
    },
    {
      id: 8,
      name: "Dear Evan Hansen",
      genre: "Musical",
      soldTicket: 150,
      capacity: 200,
    },
    {
      id: 9,
      name: "Conjuring",
      genre: "Horror",
      soldTicket: 30,
      capacity: 100,
    },
    {
      id: 10,
      name: "Annabelle",
      genre: "Horror",
      soldTicket: 10,
      capacity: 30,
    },
    {
      id: 11,
      name: "Fast and Furios",
      genre: "Action",
      soldTicket: 25,
      capacity: 40,
    },
    {
      id: 12,
      name: "Romeo and Julet",
      genre: "Romance",
      soldTicket: 15,
      capacity: 15,
    },
    {
      id: 13,
      name: "Wicked",
      genre: "Musical",
      soldTicket: 75,
      capacity: 75,
    },
  ];

  const filterMovie = movies.filter((activity) => favoriteGenre.includes(activity.genre));

  return filterMovie;

};

function findTicketAvailability (movie, user) {

  const findTicket = [movie].map((activity) =>(activity.soldTicket !== activity.capacity) && (user.ticket + activity.soldTicket <= activity.capacity))[0];

  return findTicket;
}

function findRecommendation(user) {

  const recommendMovie = findMovies(user.favoriteGenre).filter((activity) =>(activity.soldTicket !== activity.capacity) && (user.ticket + activity.soldTicket <= activity.capacity));

  return recommendMovie;

}

const actionGenre = 100000;
const musicalGenre = 80000;
const romanceGenre = 40000;
const horrorgenre = 75000;

function generateRecommendation(user) {

    if (findRecommendation(user).length === 0) {
        return "Tidak ada film yang sesuai kriteria"
    } else {

      const generateMovie = findRecommendation(user).map((activity) =>({

        id: activity.id,
        name: activity.name,
        genre: activity.genre,
        totalPrice:
        activity.genre === "Action"
        ? actionGenre * user.ticket
        : activity.genre === "Musical"
        ? musicalGenre * user.ticket
        : activity.genre === "Romance"
        ? romanceGenre * user.ticket
        : activity.genre === "Horror"
        ? horrorgenre * user.ticket
        : "",
        
      }))

      return generateMovie;

    }
}

var user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}

var user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
}

var user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
}

console.log(generateRecommendation(user1))
console.log(generateRecommendation(user2))
console.log(generateRecommendation(user3))

module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation
}