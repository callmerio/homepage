import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../grid-item";

const variants = {  //定义三个状态
  hidden: { opacity: 0, x: 20, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 20, y: 20 },
}

const Layout = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: "relative" }}
  >
    <>
      {title && (
        <Head>
          <title>{title} |- Zong JinHong</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </>
  </motion.article>
)


export default Layout
