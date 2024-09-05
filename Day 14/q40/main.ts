function make_album(artist: string, title: string, year?: number) {
    let album = { artist, title, year};
    if (year) {
        album['year'] = year;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 2018));