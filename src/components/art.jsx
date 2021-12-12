import React, { Component } from 'react'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
	"images/art_1.jpg",
	"images/art_2.jpg",
	"images/art_3.jpg",
	"images/art_4.jpg",
	"images/art_5.jpg",
	"images/art_6.jpg",
	"images/art_7.jpg",
	"images/art_8.jpg",
	"images/art_9.jpg",
	"images/art_10.jpg",
	"images/art_11.jpg",
  ];

export default class Art extends Component {

	constructor(props) {
	  super(props);
  
	  this.state = {
		photoIndex: 0,
		isOpen: false
	  };
	}

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div>
        <section className="colorlib-art" data-section="art">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
						<span className="heading-meta">Art</span>
						<h2 className="colorlib-heading">geometric abstract paintings</h2>
						<span className="heading-meta">All prints are giclée, made using high quality archival ink and paper</span>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_1.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}/></a>
						<div className="desc">
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24" x 32"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $768
								<br/>
								Print 12"x16": &nbsp;&nbsp;&nbsp;&nbsp;$38.40
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_2.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}/></a>
						<div className="desc">
							<h3><a>Central Light Space</a></h3>
							<p>
								2020
								<br/>
								Acrylic on Canvas
								<br/>
								24" x 36"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $698
								<br/>
								Print 18"x12": &nbsp;&nbsp;&nbsp;&nbsp;$42.20
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_3.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}/></a>
						<div className="desc">
							<h3><a>Primary Ribbons</a></h3>
							<p>
								2021
								<br/>
								Acrylic on Canvas
								<br/>
								36" x 48"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1,385
								<br/>
								Print 18"x24": &nbsp;&nbsp;&nbsp;&nbsp;$86.40
								<br/>
								Print &nbsp;&nbsp;9"x12": &nbsp;&nbsp;&nbsp;&nbsp;$21.60
							</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_4.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}/></a>
						<div className="desc">
							<h3><a>Suspended Rays</a></h3>
							<p>
								2020
								<br/>
								Acrylic on Canvas
								<br/>
								22" x 28"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $498
								<br/>
								Print 14"x11": &nbsp;&nbsp;&nbsp;&nbsp;$30.80
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_5.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}/></a>
						<div className="desc">
							<h3><a>Complementary Corner</a></h3>
							<p>
								2020
								<br/>
								Acrylic on Canvas
								<br/>
								24" x 36"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $648
								<br/>
								Print 18"x12": &nbsp;&nbsp;&nbsp;&nbsp;$43.20
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_6.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}/></a>
						<div className="desc">
							<h3><a>Down and Outward</a></h3>
							<p>
								2020
								<br/>
								Acrylic on Canvas
								<br/>
								22" x 28"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $498
							</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_7.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}/></a>
						<div className="desc">
							<h3><a>Extrusion in Blue</a></h3>
							<p>
								2020
								<br/>
								Acrylic on Canvas
								<br/>
								24" x 36"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $698
								<br/>
								Print 18"x12": &nbsp;&nbsp;&nbsp;&nbsp;$43.20
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_8.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}/></a>
						<div className="desc">
							<h3><a>Big Void Tiny Cube</a></h3>
							<p>
								2021
								<br/>
								Acrylic on Canvas
								<br/>
								48" x 36"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1,385
								<br/>
								Print 24"x18": &nbsp;&nbsp;&nbsp;&nbsp;$86.40
								<br/>
								Print 12"x &nbsp;9": &nbsp;&nbsp;&nbsp;&nbsp;$21.60
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_9.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}/></a>
						<div className="desc">
							<h3><a>Polygonal Platform</a></h3>
							<p>
								2020
								<br/>
								Acrylic on Canvas
								<br/>
								24" x 36"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $698
								<br/>
								Print 18"x12": &nbsp;&nbsp;&nbsp;&nbsp;$43.20
							</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_10.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}/></a>
						<div className="desc">
							<h3><a>Floating Planes II</a></h3>
							<p>
								2021
								<br/>
								Acrylic on Canvas
								<br/>
								36" x 48"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1,385
								<br/>
								Print 18"x24": &nbsp;&nbsp;&nbsp;&nbsp;$86.40
								<br/>
								Print &nbsp;&nbsp;9"x12": &nbsp;&nbsp;&nbsp;&nbsp;$21.60
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_11.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 9 })}/></a>
						<div className="desc">
							<h3><a>Hexagonal Place</a></h3>
							<p>
								2021
								<br/>
								Acrylic on Canvas
								<br/>
								36" x 36"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1,036
								<br/>
								Print 18"x18": &nbsp;&nbsp;&nbsp;&nbsp;$64.80
								<br/>
								Print 12"x12": &nbsp;&nbsp;&nbsp;&nbsp;$28.80
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_12.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 10 })}/></a>
						<div className="desc">
							<h3><a>Hovering Solids</a></h3>
							<p>
								2021
								<br/>
								Acrylic on Canvas
								<br/>
								36" x 48"
								<br/>
								<br/>
								Original: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1,385
								<br/>
								Print 18"x24": &nbsp;&nbsp;&nbsp;&nbsp;$86.40
								<br/>
								Print &nbsp;&nbsp;9"x12": &nbsp;&nbsp;&nbsp;&nbsp;$21.60
							</p>
						</div>
					</div>
					</div>
				</div>
			</div>
			{isOpen && (
					<Lightbox
						mainSrc={images[photoIndex]}
						nextSrc={images[(photoIndex + 1) % images.length]}
						prevSrc={images[(photoIndex + images.length - 1) % images.length]}
						onCloseRequest={() => this.setState({ isOpen: false })}
						onMovePrevRequest={() =>
						this.setState({
							photoIndex: (photoIndex + images.length - 1) % images.length
						})
						}
						onMoveNextRequest={() =>
						this.setState({
							photoIndex: (photoIndex + 1) % images.length
						})
						}
					/>
				)}
		</section>
      </div>
    )
  }
}
