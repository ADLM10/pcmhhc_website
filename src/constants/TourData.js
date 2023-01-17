
const TourPhotos = [
    { Photo: require('../assets/Tour/Water Plant.webp') },
    { Photo: require('../assets/Tour/Water Plant1.webp') },
    { Photo: require('../assets/Tour/Water Plant2.webp') },
    { Photo: require('../assets/Tour/tour1.jpg') },
    { Photo: require('../assets/Tour/tour2.jpg') },
    { Photo: require('../assets/Tour/tour3.jpg') },
    { Photo: require('../assets/Tour/tour4.jpg') },
]


export const TourData = [
    {
        heading: "",
        description: <p style={{ fontSize: "1.5rem" }}>
            <ul>
                <li style={{ margin: "10px" }}>DEPARTMENTAL TOUR, CONDUCTED BY DEPARTMENT</li>

                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", width: "70vw", height: "100%" }}>
                    {
                        TourPhotos.map((item, index) => (

                            <img key={index} style={{ width: "400px", margin: "10px" }} src={item.Photo} alt="sports" />

                        ))
                    }
                </div>
                <li style={{ margin: "10px" }}>EDUCATIONAL TOUR, CONDUCTED BY INSTITUTION</li>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", width: "70vw", height: "100%" }}>
                    <img style={{ width: "400px", margin: "10px" }} src={require('../assets/Tour/Educational Tour.webp')} alt="educationaltour" />
                    <img style={{ width: "400px", margin: "10px" }} src={require('../assets/Tour/Educational Tour1.webp')} alt="educationaltour" />
                </div>
            </ul>
        </p>
    }
]