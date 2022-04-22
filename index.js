slide();
var slideMovie = [
    "https://assets.thehansindia.com/h-upload/2021/12/09/1126712-kgf.webp",
"https://i.ytimg.com/vi/Q1NKMPhP8PY/maxresdefault.jpg",
"https://i.ytimg.com/vi/k-POG1-Cp1k/maxresdefault.jpg",
"https://i.ytimg.com/vi/tQ0mzXRk-oM/maxresdefault.jpg",
"https://images.thedirect.com/media/article_full/thor-4-natalie-portman-poster.jpg",


];

var start = 0;

function slide() {
  setInterval(slideShow, 2000);
}

function slideShow() {
  start = start % 5;
  

  document.querySelector("#slide>img").src = slideMovie[start];
  start++;
}




 
 var movies = [
     {
         name : "The Batman",
        img_url :"https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        release : "Release date : 10 May",
        rating: 6.5,

     },
     {
         name : "KGF",
        img_url :"https://wallpapercave.com/wp/wp4019377.jpg",
        release : "Release date : 14 April",
        rating: 9.6,

     },
     {
         name : "Spider-Man: No Way Home",
        img_url :"https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
        release : "Release date : 15 january",
        rating: 9.2,

     },
     {
         name : "The Adam Project",
        img_url :"https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
        release : "Release date : 15 March",
        rating: 7.5,

     },
     {
         name : "RRR",
        img_url :"https://pbs.twimg.com/media/FOw6RHHaQAEJopz?format=jpg&name=4096x4096",
        release : "Release date : 25 March",
        rating: 9.8,

     },
     {
         name : "Puspha",
        img_url :"https://cdn.bollywoodmdb.com/movies/largethumb/2021/pushpa/pushpa-poster-4.jpg",
        release : "Release date : 10 January",
        rating: 9.0,

     },
     {
         name : "Avangers Endgame",
        img_url :"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg",
        release : "Release date : 26 April",
        rating: 8.3,

     },
     {
         name : "Thor Ragernock",
        img_url :"https://cdnb.artstation.com/p/assets/images/images/012/836/361/large/anil-panchal-thor-poster.jpg?1536762155",
        release : "Release date : 20 June",
        rating: 8.5,

     },
     {
         name : "Thor LoverThunder",
        img_url :"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6508d53d-9f08-4740-a8a1-d26e4506f78a/detgxvb-c65e1543-1f7d-4072-8925-9d991960f581.jpg/v1/fill/w_1280,h_1811,q_75,strp/thor__love_and_thunder_poster_by_marvelmango_detgxvb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzY1MDhkNTNkLTlmMDgtNDc0MC1hOGExLWQyNmU0NTA2Zjc4YVwvZGV0Z3h2Yi1jNjVlMTU0My0xZjdkLTQwNzItODkyNS05ZDk5MTk2MGY1ODEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8l7wXkERLvEz-5310Oql7zuu71wWMfz8W47wTYUow5I",
        release : "Release date : 8 July",
        rating:9.4 ,

     },
     
 ]
 
 



 localStorage.setItem('movies',JSON.stringify(movies));

 
 function displayData(movies){
     document.querySelector('#movies').value = ''
     movies.forEach(function(movies){
        var box = document.createElement('div')
     box.setAttribute('box','class')

     
     var img = document.createElement('img')
     img.src = movies.img_url

     var name = document.createElement('h2')
     name.innerText = movies.name

     var release = document.createElement('h4')
     release.innerText = movies.release

     var rating = document.createElement('h4')
     rating.innerText  = movies.rating
     
     box.append(img,name,release,rating)
     document.querySelector('#movies').append(box)
    
     });
     
 }
 
    displayData(movies);
  

  document.querySelector("#sort").addEventListener("change",sortByRating);

function sortByRating(){
    event.preventDefault();
    var newData=[...movies];
    var sort=document.querySelector("#sort").value;

    if(sort=="high")
    {
        newData.sort((a,b)=>(a.rating-b.rating));
    }
    else if(sort=="low")
    {
        newData.sort((a,b)=>(b.rating-a.rating));
    }
    // console.log(newData)
    document.querySelector("#movies").innerHTML="";
    displayData(newData)
}