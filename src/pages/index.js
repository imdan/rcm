import React, {useState} from "react"
import { navigate } from "gatsby";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from "react-h5-audio-player"
import * as indexStyles from "../styles/index.module.css"
import {Helmet} from "react-helmet"

// markup
const IndexPage = () => {


  const linkTo = (page) => {

    if (page === 'index') {
      navigate('/')
    } else {
      navigate(`/${page}/`);

    }
  }

  return (
    <main>

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
      <h3 className={indexStyles.navLink} style={{opacity: '1'}} onClick={() => {linkTo('index')}}>music</h3>
      <h3 className={indexStyles.navLink} onClick={() => {linkTo('paint')}}>paint</h3>
      {/* <h3 className={indexStyles.navLink}>contact</h3> */}
    </div>

    {/* <div className={indexStyles.nowPlaying}>

      <p>Don't Believe Me</p>

    </div> */}

    <AudioPlayer src="/static/Dont_Believe_Me.mp3" header="Don't Believe Me" customVolumeControls={[]} preload="metadata" customAdditionalControls={[]} className={indexStyles.player}/>


    <div className={indexStyles.titleBar}>title<span className={indexStyles.playCount}>plays</span><span className={indexStyles.duration}>duration</span></div>
    <div className={indexStyles.playlistContainer}>
      
      <ul className={indexStyles.list}>
        <li className={indexStyles.song}  style={{backgroundColor: 'rgba(85, 85, 78, .5)'}}>
          Don't Believe Me <span className={indexStyles.playCount}>10</span><span className={indexStyles.duration}>3:42</span>
        </li>
        <li className={indexStyles.song}>
          Other Song <span className={indexStyles.playCount}>10</span><span className={indexStyles.duration}>3:42</span>
        </li>
        <li className={indexStyles.song}>
          Wine Grapes <span className={indexStyles.playCount}>20</span><span className={indexStyles.duration}>3:42</span>
        </li>
        <li className={indexStyles.song}>
          Holy Ghost Riding the Whip <span className={indexStyles.playCount}>120</span><span className={indexStyles.duration}>3:42</span>
        </li>
        <li className={indexStyles.song}>
          Something Corporate <span className={indexStyles.playCount}>110</span><span className={indexStyles.duration}>3:42</span>
        </li>
        <li className={indexStyles.song}>
          Good Lad Pour <span className={indexStyles.playCount}>30</span><span className={indexStyles.duration}>4:20</span>
        </li>
        <li className={indexStyles.song}>
          You Are Great <span className={indexStyles.playCount}>50</span><span className={indexStyles.duration}>3:42</span>
        </li>
        <li className={indexStyles.song}>
          Happy Birthday Harry <span className={indexStyles.playCount}>130</span><span className={indexStyles.duration}>3:42</span>
        </li>
        <li className={indexStyles.song}>
          Good Day Sir <span className={indexStyles.playCount}>10</span><span className={indexStyles.duration}>3:42</span>
        </li>
        <li className={indexStyles.song}>
          What's the Question? <span className={indexStyles.playCount}>10</span><span className={indexStyles.duration}>3:42</span>
        </li>

      </ul>
    </div>

    {/* <div className={indexStyles.footer}>
      <p style={{textAlign: 'center'}}>2022</p>
    </div> */}
      
    </main>
  )
}

export default IndexPage
