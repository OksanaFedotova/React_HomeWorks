import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout/Layout";
import { Fragment } from "react/jsx-runtime";
import { motion } from "motion/react";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#3a3a3a"
}

export default function Main({ setTextBanner, isLogin, textBanner}) {

  return (
    <Fragment>
      <Header setTextBanner={setTextBanner} isLogin={isLogin} />
      <Layout>
        <p>{textBanner}</p>
      <motion.div
                  style={box}
                  animate={{ rotate: 360, scale: 0.5}}                
                  transition={{duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1}}
                  
      />  
      </Layout>
      <Footer />
    </Fragment>
  )
}
