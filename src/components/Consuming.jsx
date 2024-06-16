import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

const Consuming = () => {
  const [selection, setSelection] = useState("1");
  //   const [post, setPost] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/posts/";

  const fetchPost = async () => {
    const res = await fetch(url + selection);

    if (!res.ok) {
      throw new Error("something went wrong");
    }

    const data = await res.json();

    return { id: data.id, title: data.title, body: data.body };
  };

  const query = useQuery({
    queryKey: ["post", selection],
    queryFn: () => fetchPost(),
  });

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
    query.refetch();
  };

  //   useEffect(() => {
  //     fetchPost(url + selection, controller.signal);

  //     return () => {
  //       controller.abort();
  //     };
  //   }, [selection]);

  return (
    <div className="container">
      <section>
        <h2>Selection</h2>
        <div className="row">
          <select
            id="selection"
            onChange={handleSelectionChange}
            className="col-md-12"
            value={selection}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </section>

      <br />

      <section>
        {query.isSuccess && (
          <>
            <div>ID: {query.data.id}</div>
            <div>Title: {query.data.title}</div>
            <div>Body: {query.data.body}</div>
          </>
        )}

        {query.isFetching && (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}

        {query.isError && <p>{query.error}</p>}
      </section>
    </div>
  );
};

export default Consuming;
