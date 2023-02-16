import { GetStaticPaths, GetStaticProps } from "next";

export default function index() {
  return <div>index</div>;
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    // Passed to the page component as props
    props: { post: {} },
  };
};
