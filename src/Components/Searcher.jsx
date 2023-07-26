import { useDispatch } from "react-redux";
import { setSearchPokemons } from "../Slices/dataSlice";
import Layout from "./Layout";

function Searcher() {
  const dispatch = useDispatch();

  const searchPokemons = (event) => {
    let query = event.target.value
    dispatch(setSearchPokemons(query));
    // console.log(query);
  }
  return (
    <Layout>
      <div className=" w-[50%] ">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-3 border border-green-500 rounded-lg w-full focus:outline-none"
          onChange={(event)=>searchPokemons(event)}
        />
      </div>
    </Layout>
  );
}

export default Searcher;
