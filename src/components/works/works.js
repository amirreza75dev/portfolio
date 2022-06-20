import './works.css'
const Works = () => {
    const works =[
        {
            id: 0,
            img: "/assets/site2.png",
            name: "react shopping cart",
            demo: "https://shopping-cart-vercel-iota.vercel.app/",
            github: "https://github.com/amirreza75dev/shopping-cart-vercel",
        },
        {
            id: 1,
            img: "/assets/site1.png",
            name: "react landing page with animations",
            demo: "https://site-4-ver2-kk0xfs9q0-amirreza75dev.vercel.app/",
            github: "https://github.com/amirreza75dev/site-4",
        },
        {
            id: 2,
            img: "/assets/site4.png",
            name: "react Banking agency website",
            demo: "https://agency-website-tawny.vercel.app/",
            github: "https://github.com/amirreza75dev/Agency-website",
        },






    ]
    return ( 
        <section className="works" id="works" data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" data-aos-mirror="true">
                <h5>My Recent Work</h5> 
                <h2>Portfolio</h2>

                <div className="works-main">

                    {
                        works.map((item)=>{
                            return(
                                <div className="works-item" key={item.id}>
                                    <img src={item.img} alt=""/>
                                    <h5>{item.name}</h5>

                                    <div className="works-btn">
                                        <button className="btn-one"><a href={item.github} target="_blank">Github</a></button>
                                        <button className="btn-two"><a href={item.demo} target="_blank">Live Demo</a></button>
                                    </div>


                                </div>



                            )
                        })


                    }

                    
                </div>

        </section>
     );
}
 
export default Works;