const sportImages = [
    { Photo: require('../assets/Sports/outdoor01.jpg') },
    { Photo: require('../assets/Sports/outdoor02.jpg') },
    { Photo: require('../assets/Sports/outdoor03.jpg') },
    { Photo: require('../assets/Sports/indoor01.jpg') },
    { Photo: require('../assets/Sports/indoor02.jpg') },
    { Photo: require('../assets/Sports/annual_games.jpg') }
]

export const SportsData = [
    {
        heading:"",
        description:<p>
            There are arrangements for various indoor games in the Common Room like Table Tennis, Chess etc.<br />
            The College also has a private area for outdoor games like Badminton, Volleyball, Football, Cricket etc.<br />
            <br />
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",width:"70vw",height:"100%"}}>
            {
                sportImages.map((item, index) => (
                
                    <img key={index} style={{width:"400px",margin:"10px"}} src={item.Photo} alt="sports" />
                
                ))
            }
                </div>
            
        </p>
    }
]



