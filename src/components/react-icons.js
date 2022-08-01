import React from 'react'
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti'
import {WiCloudyWindy, } from 'react-icons/wi'
import {FaConfluence} from 'react-icons/fa'

const Footer = () => {
    return(
    <footer>
        <h1>Welcome to the world of Icons</h1>
        <div>
            <TiSocialLinkedinCircular />
            <TiSocialGithubCircular />
            <TiSocialTwitterCircular />
            <WiCloudyWindy />
            <FaConfluence />
        </div>
        <div>
            <small> Copyright &copy; {new Date().getFullYear()} </small>
        </div>
    </footer>
 )
}
export default Footer;