import Head from "next/head";
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        {/* {console.log(products)} */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}


// SERVER SIDE RENDERING (LEVERAGING NEXT JS)

// BROWSER <----  SERVER <------> USER

// user sends request to the server which renders everything and then sends it
// to the browser instead of the whole browser loading it hence images loading=0

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  // now that we have data on the server we need to pass it to the browser
  return {
    props: {
      // products : products is same as the line below
      products,
    },
  };
}

