function microverse (n) {
    var reachAdvertisement = 5;
    var likedPeople = 0;
    var array = [];
for ( let i = 0; i < n; i++ ) {
        reachAdvertisement = Math.floor(reachAdvertisement / 2);
        var likedPeople = reachAdvertisement * 3;
        reachAdvertisement = likedPeople;
        array.push(likedPeople);
        var result = array[i]
    }   
    return result;
}

console.log(microverse(3));