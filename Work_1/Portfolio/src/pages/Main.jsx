import { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import MainContextContainer from "../components/MainContextContainer/MainContextContainer";

export default function Main() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <Fragment>
      <Header />
      <Layout>
        <MainContextContainer />
        <Button
          label={"Связаться со мной"}
          disabled={false}
          onClick={() => setModalVisible((prev) => !prev)}
        />
        {isModalVisible && (
          <Modal handleClick={() => setModalVisible((prev) => !prev)} />
        )}
      </Layout>
      <Footer />
    </Fragment>
  );
}
