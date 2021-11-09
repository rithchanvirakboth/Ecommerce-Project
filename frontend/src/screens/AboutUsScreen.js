import React from 'react'
import facebook from '../Icon/facebook.svg'
import twitter from '../Icon/twitter.svg'
import pinterest from '../Icon/pinterest.svg'
import instagram from '../Icon/instagram.svg'
import pic from '../Icon/pics.jpeg'
import '../AboutUs.css'

function AboutUs() { 
    return (
        <>
            <div className="content">
                <div className="textBox">
                    <h2>12$ Onlineshop</h2>
                    <p>
                    is one of the fasting online platforms where you can purchasing your desired products with good quality with affordable price in Cambodia. <br /><br />

                    12$ onlineshop is one of website that develop under guidance from Institute of Technology of Cambodia. Our mission is to make sure that those who use our service is easier and have more convinient to buy the products with excitement and satisfied because of our quality product with reasonable price, fast service on delivery and secure with customers payments. Everyone can have money back if it's not satisfied and can place an order within 24/7. What are you waiting for? Let's go and shop right now with many good products waiting for you.
                    </p>
                    <a href='/'>Shop now</a>
                    </div>
                    <div className="imageBox">
                        <img src={pic} className="imageShopping" alt=""></img>
                    </div>
                </div>
                <div className="contact">
                    <div className="contact-infor">
                        <h2>Contact Us</h2>
                        <hr />
                        <p>Phone Number: 0XX-XXX-XXX</p>
                        <p>Location: Russia Federation, Phnom Penh Cambodia</p>
                        <p>Social Media: </p>
                            <ul className="sci">
                                <li><a href="https://www.facebook.com/"><img src={facebook} /></a> </li>
                                <li><a href="https://www.instagram.com/"><img src={instagram} /></a></li>
                                <li><a href="https://www.twitter.com/"><img src={twitter} /></a></li>
                                <li><a href="https://www.pinterest.com/"><img src={pinterest} /></a></li>
                            </ul> 
                    </div>
                </div>
        </>
    )
}

export default AboutUs
