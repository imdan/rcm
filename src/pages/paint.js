import * as React from "react"
import { navigate } from "gatsby";
import * as indexStyles from "../styles/index.module.css"
import {Helmet} from "react-helmet"


const painPage = () => {

    const linkTo = (page) => {
        if (page === 'index') {
            navigate('/')
          } else {
            navigate(`/${page}/`);
      
          }
      }


    return (

        <>
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rock+3D&display=swap" rel="stylesheet" />
      </Helmet>

        <title>RCM</title>
      <h1 style={{textAlign: "center", fontFamily: "'Rock 3D', cursive", fontSize: '50px', marginBottom: '0', marginTop: '20px', color: '#00cbcc'}}>
        RCM
      </h1>

    <div className={indexStyles.navBar}>
      <h3 className={indexStyles.navLink} onClick={() => {linkTo('index')}}>music</h3>
      <h3 className={indexStyles.navLink} style={{opacity: '1'}} onClick={() => {linkTo('paint')}}>paint</h3>
      {/* <h3 className={indexStyles.navLink}>contact</h3> */}
    </div>

        <div style={{textAlign: 'center', color: 'white', fontFamily: "'Rock 3D',cursive", fontSize: '50px', marginTop:'65px' }}>nothing here</div>

        </>

    )
}

export default painPage;