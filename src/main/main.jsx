import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Launches from "../components/launches/launches";

function Main() {
  return (
    <>
      <Header />
      <section className="p-4">
        <Launches />
      </section>
      <Footer />
    </>
  );
}

export default Main;