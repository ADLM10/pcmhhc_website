const sportImages = [
  { Photo: require("../assets/Sports/outdoor01.jpg") },
  { Photo: require("../assets/Sports/outdoor02.jpg") },
  { Photo: require("../assets/Sports/outdoor03.jpg") },
  { Photo: require("../assets/Sports/indoor01.jpg") },
  { Photo: require("../assets/Sports/indoor02.jpg") },
  { Photo: require("../assets/Sports/annual_games.jpg") },
];

export const SportsData = [
  {
    heading: "",
    description: (
      <p >
        <p style={{ textAlign: "center" }}>
        There are arrangements for various indoor games in the Common Room like
        Table Tennis, Chess etc.
        <br />
        The College also has a private area for outdoor games like Badminton,
        Volleyball, Football, Cricket etc.</p>
        <br />
        <br />
        <h3>Sports Committee Members :</h3>
        <li>Dr. Biswajit Bera - Convenor</li>
        <li>Mr. Uttam Kr. Saha</li>
        <li>Sk. Gous Alii</li>
        <li>Biprajit Baidya</li>
        <li>Saima Rahaman</li>
        <li>Raju Das</li>
        <li>Debangana Kundu</li>
        <li>Habbibullah Juwel</li>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "70vw",
            height: "100%",
          }}
        >
          {sportImages.map((item, index) => (
            <img
              key={index}
              style={{ width: "300px", margin: "10px" }}
              src={item.Photo}
              alt="sports"
            />
          ))}
        </div>
      </p>
    ),
  },
];
