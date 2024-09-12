function Index(){
  
  
  return (
    <>
      <div className="container">

        <div className="left-side">
          <div className="top-layer"></div>
          <div className="inside-left-border">
            <div className="inside-inside-left-background"></div>
          </div>
        </div>

        <div className="right-side">
          <div className="inside-right-border">
            <div className="inside-inside-right-background">
              <div className="search-bar">
                <input type="text" placeholder="Search Pokémon" />
              </div>
              <div className="button-grid">
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
              </div>
              <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="button-grid-white">
                <div className="white-button"></div>
                <div className="white-button"></div>
              </div>

              <div className="container-yellow-circle">
                <div className="yellow-circle"></div>
              </div>
              
              <div className="container-rectangles">
                <div className="rectangle-left"></div>
                <div className="rectangle-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index;