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

export default function Main(props) {
  return (
    <Fragment>
      <Header setTextBanner={props.setTextBanner} isLogin={props.isLogin} />
      <Layout>
        <p>{props.textBanner}</p>
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
