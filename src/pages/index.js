import React, {useState} from "react"
import { navigate } from "gatsby";
import 'react-h5-audio-player/lib/styles.css';
// import AudioPlayer from "react-h5-audio-player"
import * as indexStyles from "../styles/index.module.css"
import {Helmet} from "react-helmet"

// markup
const IndexPage = () => {

  const [currentTrack, setCurrentTrack] = useState(1);

const embedLinks = ["https://www.youtube.com/embed/8KoQyRFXLrc", "https://www.youtube.com/embed/L9MCR9dUBag", "https://www.youtube.com/embed/VV8i9fBzIXw", "https://www.youtube.com/embed/wbFCtycXVtw", "https://www.youtube.com/embed/SAov5WbndSg", "https://www.youtube.com/embed/MjrN1DNGwPI", "https://www.youtube.com/embed/EQlPl4x5obQ", "https://www.youtube.com/embed/EVjnoW6vv50", "https://www.youtube.com/embed/A8hr9UV9M80", "https://www.youtube.com/embed/ckyhopfeXBM"]

const switchTrack = (direction) => {
  
  // go up
  if (direction === "up") {
    let nextTrack = currentTrack < 10 ? currentTrack + 1 : 1
    setCurrentTrack(nextTrack)
  } else {
    let previousTrack = currentTrack > 1 ? currentTrack - 1 : 10;
    setCurrentTrack(previousTrack)
  }
}


  // const linkTo = (page) => {

  //   if (page === 'index') {
  //     navigate('/')
  //   } else {
  //     navigate(`/${page}/`);

  //   }
  // }

  return (
    <main>

      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rock+3D&display=swap" rel="stylesheet" />
      </Helmet>

      <title>BALANCE Yo</title>
      <h1 style={{textAlign: "center", fontFamily: "'Rock 3D', cursive", fontSize: '42px', marginBottom: '0', marginTop: '20px', color: '#037BA5', cursor: 'default'}}>
        RCM
      </h1>
      <p className={indexStyles.albumTitle}>BALANCE Yo</p>

      {/* <img src={`/static/balance.png`} alt="balance" style={{transform: 'rotate(5deg) translateX(-75%)',}} className={indexStyles.titleCards}/> */}
      {/* <img src={`/static/yo.png`} style={{transform: 'rotate(-12deg) translateY(18px) translateX(-38%)'}} alt="yo" className={indexStyles.titleCards}/> */}

    <div className={indexStyles.navBar}>
      {/* <h3 className={indexStyles.navLink} style={{opacity: '1'}} onClick={() => {linkTo('index')}}>music</h3> */}
      {/* <h3 className={indexStyles.navLink} onClick={() => {linkTo('paint')}}>paint</h3> */}
      {/* <h3 className={indexStyles.navLink}>contact</h3> */}
    </div>

    {/* <div className={indexStyles.nowPlaying}>

      <p>Don't Believe Me</p>

    </div> */}

<iframe className={indexStyles.vidPlayer}  src={embedLinks[currentTrack - 1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div className={indexStyles.vidControls}>

    <div onClick={() => {switchTrack('down')}} style={{display: 'inline-block'}}><p className={indexStyles.vidController} style={{fontFamily: "'Rock 3D', cursive"}} >{`<-`}</p></div>
    <p className={indexStyles.vidNumber} style={{fontFamily: "'Rock 3D', cursive"}}>{currentTrack}</p>
    <div onClick={() => {switchTrack('up')}} style={{display: 'inline-block'}}><p className={indexStyles.vidController} style={{fontFamily: "'Rock 3D', cursive"}}>{`->`}</p></div>


</div>

    {/* <AudioPlayer src="/static/Dont_Believe_Me.mp3" header="Don't Believe Me" customVolumeControls={[]} preload="metadata" customAdditionalControls={[]} className={indexStyles.player}/> */}


    {/* <div className={indexStyles.titleBar}>title<span className={indexStyles.playCount}>plays</span><span className={indexStyles.duration}>duration</span></div>
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
    </div> */}

    {/* <div className={indexStyles.footer}>
      <p style={{textAlign: 'center'}}>2022</p>
    </div> */}
      
    </main>
  )
}

export default IndexPage
