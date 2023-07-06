const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const movieJsonData = {
    "movies": [
        {
          "Title": "Avatar",
          "Rated": "PG-13",
          "Released": "18 Dec 2009",
        },
        {
          "Title": "I Am Legend",
          "Rated": "PG-13",
          "Released": "14 Dec 2007",
        },
        {
          "Title": "300",
          "Rated": "R",
          "Released": "09 Mar 2007",
        },
        {
          "Title": "The Avengers",
          "Rated": "PG-13",
          "Released": "04 May 2012",

        },
        {
          "Title": "The Wolf of Wall Street",
          "Rated": "R",
          "Released": "25 Dec 2013",
        },
        {
          "Title": "Interstellar",
          "Rated": "PG-13",
          "Released": "07 Nov 2014",
        },
        {
          "Title": "Game of Thrones",
          "Rated": "TV-MA",
          "Released": "17 Apr 2011",

        },
        {
          "Title": "Vikings",
          "Rated": "TV-14",
          "Released": "03 Mar 2013",
        },
        {
          "Title": "Gotham",
          "Rated": "TV-14",
          "Released": "01 Aug 2014",
        },
        {
          "Title": "Power",
          "Rated": "TV-MA",
          "Released": "N/A",
        },
        {
          "Title": "Narcos",
          "Rated": "TV-MA",
          "Released": "28 Aug 2015",
        },
        {
          "Title": "Breaking Bad",
          "Rated": "TV-14",
          "Released": "20 Jan 2008",
        },
        {
          "Title": "Doctor Strange",
          "Rated": "N/A",
          "Released": "04 Nov 2016",
        },
        {
          "Title": "Rogue One: A Star Wars Story",
          "Rated": "N/A",
          "Released": "16 Dec 2016",
        },
        {
          "Title": "Assassin's Creed",
          "Rated": "N/A",
          "Released": "21 Dec 2016",
        },
        {
          "Title": "Luke Cage",
          "Rated": "TV-MA",
          "Released": "30 Sep 2016",
        },
       {
          "Title": "Example movie - 2",
          "Rated": "N/A",
          "Released": "04 Nov 2020",
        },
        {
          "Title": "Example Movie",
          "Rated": "N/A",
          "Released": "16 Dec 2017",
        },
        {
          "Title": "Sample Movie 2 ",
          "Rated": "TV-MA",
          "Released": "21 Dec 2018",
        },
        {
          "Title": "Sample Movie",
          "Rated": "TV-MA",
          "Released": "30 Sep 2017",
        },
      ]
}

app.get('/api/data',(req,res)=>{
    res.json(movieJsonData.movies)
});

const port = 5000

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}.`)
})
