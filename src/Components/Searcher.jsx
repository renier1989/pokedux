import Layout from "./Layout";

function Searcher() {
  return (
    <Layout>
      <div className=" w-[50%] ">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-3 border border-green-500 rounded-lg w-full focus:outline-none"
        />
      </div>
    </Layout>
  );
}

export default Searcher;
