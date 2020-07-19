const allSongsArray = [
   {
      id: 1,
      songtitle: "Snelle Planga",
      artist: "Rapper Donnie",
      genre: "Hip Hop",
      rating: "5 stars",
   },
   {
      id: 2,
      songtitle: "Anton aus Tirol",
      artist: "Anton feat. DJ Ötzi",
      genre: "Apres Ski",
      rating: "2 stars",
   },
   {
      id: 3,
      songtitle: "White Limo",
      artist: "Foo Fighters",
      genre: "Hard Rock",
      rating: "5 stars",
   },
   {
      id: 4,
      songtitle: "Jij Krijgt Die Lach Niet Van Mijn Gezicht",
      artist: "John de Bever",
      genre: "Apres Ski",
      rating: "4 stars",
   },
];

const arrayMinusId2 = allSongsArray.filter(function (item) {
   return item.id !== 2;
});

console.log(allSongsArray);
console.log(arrayMinusId2);

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

