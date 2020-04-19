function naiveSearch(str, check){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < check.length; j++){
           if(check[j] !== str[i+j]) break;
           if(j === check.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch('Merve seni seviyorum iyor', 'iyor'))

