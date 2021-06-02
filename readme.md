# We Love Movies

We Love Movies is a theoretical theater lookup website and this is the RESTful API backend for it I constructed using Knex and Express.
This is my capstone project for the Backend portion of the web development bootcamp offered by Thinkful. I practiced interacting with APIs and databases, this is one such fully fledged API which could serve data to websites in jsonapi spec.


## Endpoints

<details>
<summary> <code>GET /movies</code> </summary>
<br>
    returns movies in json format:

```json
{
  "data": [
    {
      "id": 1,
      "title": "Spirited Away",
      "runtime_in_minutes": 125,
      "rating": "PG",
      "description": "Chihiro ...",
      "image_url": "https://imdb-api.com/..."
    }
    // ...
  ]
} 
```

</details>

<details>
<summary> <code>GET /movies?is_showing=true</code> </summary>
<br>
  returns actively showing movies in json format:

```json
{
  "data": [
    {
      "id": 1,
      "title": "Spirited Away",
      "runtime_in_minutes": 125,
      "rating": "PG",
      "description": "Chihiro ...",
      "image_url": "https://imdb-api.com/...",
      "is_showing": "true"
    }
    // ...
  ]
} 
```

  </details>

<details>
<summary> <code>GET /movies/:movieId</code> </summary>
returns a specified movie in json format:

```json
{
  "data": {
    "id": 1,
    "title": "Spirited Away",
    "runtime_in_minutes": 125,
    "rating": "PG",
    "description": "Chihiro...",
    "image_url": "https://imdb-api.com/..."
  }
}
```

  </details>


## Src Details

- `/src/_errors`
  - Contains error handling logic.
- `/src/config`
  - Contains a sample logger to help trace issues that arise.
- `/src/db`
  - Migrations and seed data reside here, as well as the file which handles connection.
- `/src/movies` Resource
  - This contains the controller, router and service operations for the movies entity.
- `/src/reviews` Resource
  - This contains the controller, router and service operations for the reviews entity.
- `/src/movies_theaters` Resource
  - This contains the controller, router and service operations for the movies_theaters entity.
- `/src/theaters` Resource
  - This contains the controller, router and service operations for the theaters entity.
- `/src/utils/`
  - Some custom object formatting functions.

## More features within and to be added to this readme...
