import React from "react";
import "./Videos.css";
import VideoCard from "./VideoCard";

function Videos() {
  return (
    <div className="videos">
      <h2 className="videos__heading">Recommended</h2>
      <div className="videos__cards">
        <VideoCard
          title="Taapsee Pannu And Vikrant Massey Take The Lie Detector Test | Haseen Dillruba | Netflix India"
          image="https://i.ytimg.com/vi/H93uyyFVAqU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmo27a8KCsrUftg0MKSW5QTQ8b_w"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTmHlRY207ZAz3hIq9ayPyCoi4adxbZqbpbcEz5=s68-c-k-c0x00ffffff-no-rj"
          channel="Netflix India"
          timestamp="3 hours ago"
          views="89K"
        />
        <VideoCard
          title="KSI Tries INDIAN Snacks!"
          image="https://i.ytimg.com/vi/wTyQY6mOxSI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBC4OTOlJEfU0SrCPeQ316uPrOSCg"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTKZwacdA5RnqHBlvP1WWlduy_w4jfXjFk5LXbe=s68-c-k-c0x00ffffff-no-rj"
          channel="Mo Syed"
          timestamp="1 week ago"
          views="2.5M views"
        />
        <VideoCard
          title="Lionel Messi - The GOAT - Official Movie"
          image="https://i.ytimg.com/vi/G4wTERfoPfA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_FYGowH9mP2_HulGP9NsqeVnXww"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLR5dj8SEc9iLNZ_8BYuGailJ0ZRtN3CaXJdUlpBFw=s68-c-k-c0x00ffffff-no-rj"
          channel="MagicalMessi"
          timestamp="1 year ago"
          views="23M"
        />

        <VideoCard
          title="Swimming Pool Stereotypes"
          image="https://i.ytimg.com/vi/MqePxS6iyvA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnR5LKN8nLEiXenynwVVtEo07QRg"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSw2IlUFHy6GUZw3OPu2FZ1i5H-YQTbPX92yRS3Ig=s68-c-k-c0x00ffffff-no-rj"
          channel="Dude Perfect"
          timestamp="10 months ago"
          views="48M views"
        />
        <VideoCard
          title="The Life Of Ram Full Video Song | Jaanu Video Songs | Sharwanand | Samantha | Govind Vasantha"
          image="https://i.ytimg.com/vi/2a34XyiZO14/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyHsha6i4BT4cCYXr_DyN8aSY1kA"
          channel="Aditya Music"
          views="116M views"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSHMga1V1dVDshPxE3QfcV9VU7I9QxY5G0o-yzPrg=s68-c-k-c0x00ffffff-no-rj"
          timestamp="1 year ago"
        />

        <VideoCard
          title="This Phone is Everything I've Wanted - Sony Xperia 1 III"
          image="https://i.ytimg.com/vi/9TLUMpUm8SQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMNDYkmbcmi_fK-7t3o7pg34a_Aw"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSbGLL5fOH4D-lYPry9TnHKa1jU44nkelowypsl=s68-c-k-c0x00ffffff-no-rj"
          channel="ShortCircuit"
          timestamp="701k views"
          views="4 days ago"
        />
        <VideoCard
          title="Creator Spotlight: Be YouNick"
          image="https://i.ytimg.com/vi/O7ivqLThgYs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIVQZmCk9S8VrVeJwuJi4rhf7RcA"
          channel="Be YouNick"
          views="382K views"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLS7NA5M4RmWYDmrRvaECk8kLgc3XLiFRrruZaU=s68-c-k-c0x00ffffff-no-rj"
          timestamp="8 hours ago"
        />
        <VideoCard
          title="Her Story | Marvel Studios’ Black Widow"
          image="https://i.ytimg.com/vi/G_OV4pPC5Jg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBj-GpyoYnRRAaU_S9vpPjBggEUeA"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSYVU0j5KAeEwuDpIkgO4LY3y-jHHwaaDMkMTdlDrA=s68-c-k-c0x00ffffff-no-rj"
          channel="Marvel Entertainment"
          timestamp="43 minutes ago"
          views="41K views"
        />
        <VideoCard
          title="Delhi Metro | Stand-Up Comedy by Aakash Gupta"
          image="https://i.ytimg.com/vi/Xc5n49aEhwc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpRX-hTnX_xoDaDAIoNI0dKrZzoA"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSvPEUzOL_qQkQQd17lcsvj3ikeb2iEj92MUBi91A=s68-c-k-c0x00ffffff-no-rj"
          channel="Aakash Gupta"
          timestamp="2 years ago"
          views="19M"
        />
        <VideoCard
          title="SIDEMEN FC VS YOUTUBE ALLSTARS 2018 (Goals & Highlights)"
          image="https://i.ytimg.com/vi/UTVpWVO4vZU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsf5lR8Fz_wGwwLI0RdWxpTD0Rdw"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSqViMyjHw5AiYTSTKnrmyCq-Bba5KS941AqfvpWw=s68-c-k-c0x00ffffff-no-rj"
          channel="Sidemen"
          timestamp="3 years ago"
          views="13M"
        />
        <VideoCard
          title="Forgot About Beats by Dre?"
          image="https://i.ytimg.com/vi/ILHEYblJ7uM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmaWPoDWNEVTu2AQmi87laq7rB9A"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLR-pT_JEsz_hcaA4Gjx8DHcqJ8mS42aTRqcVy6P7w=s68-c-k-c0x00ffffff-no-rj"
          channel="Marques Brownlee"
          timestamp="2 weeks ago"
          views="3.2M"
        />
        <VideoCard
          title="Every Lie Counted - The Family Man | Manoj Bajpayee, Priyamani, Sharib Hashmi, Neeraj Madhav"
          image="https://i.ytimg.com/vi/MvHaVp6wq0k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDi3CQqGCKDrwudKk9AapdC9kVNnA"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTzbmeTgC2T68o3TvU-4cfWSCfEvvHOAGcXICPbgA=s68-c-k-c0x00ffffff-no-rj"
          channel="Amazon Prime Video India"
          timestamp="10 months ago"
          views="3.1M views"
        />
        <VideoCard
          title="Where Are The ALIENS? - Complete Theory Explained ft. Abhijit Chavda | TRS Clips 933 by TRS Clips"
          image="https://i.ytimg.com/vi/fgn8OpDEyuk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYHJQLQJHA7IR8kTTRhd26X1NTNg"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRkwO_LnORpPwR_kiqlxwiX7vBjgrjI_sNPSfDM=s68-c-k-c0x00ffffff-no-rj"
          channel="TRS clips"
          timestamp="3 hours ago"
          views="1.6k"
        />
        <VideoCard
          title="TOOFAN KI WAJAH SE GHAR MAI PAANI AGAYA"
          image="https://i.ytimg.com/vi/omatN9nQyos/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5VA00MXutnne_e2RqNSxi3K4uug"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQURq2vCeHMxwnrPmV_A97YcLtYK5DNy-P6z62AKA=s68-c-k-c0x00ffffff-no-rj"
          channel="Mumbiker Nikhil"
          timestamp="1 month ago"
          views="1M"
        />
        <VideoCard
          title="Kya Mujhe Pyaar Hai guitar cover || Unplugged Guitar Cover || Woh lamhe ||  KK"
          image="https://i.ytimg.com/vi/9aTzI8IKA04/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCA0eNDIaj1S8XCALdYt2wBMfMSQA"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRJoYNDRANpOU2zvI55ED3Dzg2xBOndB1gD5JEUhQc=s68-c-k-c0x00ffffff-no-rj"
          channel="Sreekar Cherla"
          timestamp="1 year ago"
          views="951 views"
        />
        <VideoCard
          title="Taarak Mehta Ka Ooltah Chashmah - तारक मेहता - Episode 1943 - 24th May, 2016"
          image="https://i.ytimg.com/vi/PUS9AE3i6fg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAq7GpRefw7aTqA0ofgsay1MLBvbA"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTNi_1S5-OOV1js4GsuT7lC17X3OiSMpMb0woYnOaw=s68-c-k-c0x00ffffff-no-rj"
          channel="Sony SAB"
          timestamp="5 years ago"
          views="4.3M"
        />
        <VideoCard
          title="THE SUICIDE SQUAD – Official Trailer"
          image="https://i.ytimg.com/vi/jz1FrtMIh5c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGooIwVMwqr_pTdqNWUU1JaojEEQ"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTNiMOcZQj80v8rhBK5qSjNe0ZmUwg44Lz8gIwGetM=s68-c-k-c0x00ffffff-no-rj"
          channel="DC"
          timestamp="1 week ago"
          views="1.9M views"
        />
        <VideoCard
          title="CRISTIANO RONALDO  in 'The Switch' ft. Harry Kane, Anthony Martial & More"
          image="https://i.ytimg.com/vi/K2H7qqKjVVQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDA6ZFnveKUqlC3MI9Q6i-o8xZ9Dg"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRy1J-y5C3JxzHWOUcfUs9jJVw3qw9gHnr-mmqrhw=s68-c-k-c0x00ffffff-no-rj"
          channel="Fashion Channel"
          timestamp="5 years ago"
          views="65M views"
        />
        <VideoCard
          title="Indian and British Doctors React to US Medical Bills Ft. Kiran Morjaria"
          image="https://i.ytimg.com/vi/sL-cS9-wxpg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt3-drI4fbOqHQTyK-MOs_kTHbhA"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRlfwp_Z3bRApxmtQFTvb3dHNNx6yZsqwn8lnhl=s68-c-k-c0x00ffffff-no-rj"
          channel="Doctor A"
          timestamp="1 month"
          views="477K views"
        />
        <VideoCard
          title="Professional GUITARIST Pretends to be a BEGINNER to Guitar Lessons | PRANK #2"
          image="https://i.ytimg.com/vi/aAKDfDG5krU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcecu19dVyiv6q7QTfgIXD4NEYhQ"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRUZzWjRsyKXMcH_b1x8FCDSsaeGCY8umc5d-qs=s68-c-k-c0x00ffffff-no-rj"
          channel="AKSTAR ENG"
          timestamp="1 month ago"
          views="994K views"
        />
      </div>
    </div>
  );
}

export default Videos;
