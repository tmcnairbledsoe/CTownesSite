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
						<h2 className="colorlib-heading">See some projects</h2>
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
								24"x32"
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_2.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}/></a>
						<div className="desc">
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24"x32"
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_3.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}/></a>
						<div className="desc">
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24"x32"
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
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24"x32"
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_5.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}/></a>
						<div className="desc">
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24"x32"
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_6.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}/></a>
						<div className="desc">
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24"x32"
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
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24"x32"
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_8.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}/></a>
						<div className="desc">
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24"x32"
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_9.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}/></a>
						<div className="desc">
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24"x32"
							</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_10.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 9 })}/></a>
						<div className="desc">
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24"x32"
							</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="art-entry">
						<a className="art-img"><img src="images/art_11.jpg" className="img-responsive" onClick={() => this.setState({ isOpen: true, photoIndex: 10 })}/></a>
						<div className="desc">
							<h3><a>Floating Planes</a></h3>
							<p>
								2013
								<br/>
								Oil on Canvas
								<br/>
								24"x32"
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
