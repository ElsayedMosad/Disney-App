/* eslint-disable no-unreachable */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchMovies = createAsyncThunk(
  "movieSlice/fetchMovies",
  async () => {
    // const res = await fetch(
    //   "https://firebasestorage.googleapis.com/v0/b/disney-plus-7b0db.appspot.com/o/disneyPlusMoviesData.json?alt=media&token=7c6b4823-3575-4d66-aeb9-ede50c198b8f"
    // );
    // const res = await fetch("https://fakestoreapi.com/products");

    const res = await fetch(
      "https://elsayedmosad.github.io/jsonApiMovies/disneyPlusMoviesData.json"
    );
    const data = await res.json();
    return data;
  }
);
const moviesSlice = createSlice({
  name: "movieSlice",
  initialState: {
    // recommend: null,
    // newDisney: null,
    // original: null,
    // trending: null,
  },
  reducers: {
    setMovies: (state, action) => {
      // state.recommend = action.payload.recommend;
      // state.newDisney = action.payload.newDisney;
      // state.original = action.payload.original;
      // state.trending = action.payload.trending;
    },
  },
  extraReducers: (bulider) => {
    // bulider.addCase(fetchProducts.rejected, (state, action) => {
    // });
    // bulider.addCase(fetchProducts.pending, (state, action) => {
    // });
    bulider.addCase(fetchMovies.fulfilled, (state, action) => {
      // console.log(action.payload);
      // action.payload.movies.map((movie) => {
      // return movie.type == "recommend";
      // switch (movie.type) {
      //   case "recommend":
      //     return (state.recommend = movie);
      //     break;
      //   case "new":
      //     return (state.newDisney = movie);
      //     break;
      //   case "original":
      //     return (state.original = movie);
      //     break;
      //   case "trending":
      //     return (state.trending = movie);
      //     break;
      // }
      // });
      // return {state.recommend }

      // action.payload.movies.map((doc) => {
      //   switch (doc.data().type) {
      //     case "recommend":
      //       recommends = [...recommends, { id: doc.id, ...doc.data() }];
      //       break;

      //     case "new":
      //       newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
      //       break;

      //     case "original":
      //       originals = [...originals, { id: doc.id, ...doc.data() }];
      //       break;

      //     case "trending":
      //       trending = [...trending, { id: doc.id, ...doc.data() }];
      //       break;
      //   }
      // });
      return action.payload.movies;
    });
  },
});

export default moviesSlice.reducer;
export const { setMovies } = moviesSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
