import React, { useEffect } from "react";
import { InfoCard, Layout } from "../components/indexComponents";
import { getAllBooks } from "../fetcher/indexFetcher";

function AllBookPage() {
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
    };
    fetchBooks();
  }, []);

  return (
    <Layout>
      <InfoCard />
    </Layout>
  );
}

export default AllBookPage;
