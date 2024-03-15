// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

interface myAlbum {
  artist: string;
  title: string;
  [key: string]: string | number;
}

function make_album(artist: string, title: string, track?: number): myAlbum {
  let album: myAlbum = { artist, title };
  if (track) {
    album["tracks"] = track;
  }
  return album;
}

// store function's output in a variable
const album1 = make_album("Mahnoor", "My First Album");
const album2 = make_album("Arman", "Never Loose your Hope");
const album3 = make_album("Eric", "Productive Habits", 3);

// display albums [artists, titles, tracks]
console.log(album1);
console.log(album2);
console.log(album3);
