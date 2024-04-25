import instagram from '../../assets/social-media/instagram.png'
import twitter from '../../assets/social-media/twitter.png'
import facebook from '../../assets/social-media/facebook.png'
import youtube from '../../assets/social-media/youtube.png'

export default function SocialMediaButtons() {
    const socialMediaLinks = [{
        name: 'Instagram',
        imgURL: instagram,
        link: 'https://github.com/Valentino-La-Villa'
    }, {
        name: 'Twitter',
        imgURL: twitter,
        link: 'https://github.com/Valentino-La-Villa'
    }, {
        name: 'Facebook',
        imgURL: facebook,
        link: 'https://github.com/Valentino-La-Villa'
    }, {
        name: 'Youtube',
        imgURL: youtube,
        link: 'https://github.com/Valentino-La-Villa'
    }]

    const socialMediaButtons = socialMediaLinks.map(socialMedia => {
        return (
            <a key={socialMedia.name}
            className='col-3 col-md-2 socialMediaButton--custom' href={socialMedia.link} target='_blank' // Custom css property is used to implement scale up animation on hover
            >
                <img className='rounded-3 img-fluid' src={socialMedia.imgURL} alt="" />
            </a>
        )
    })
    return (
        <div className='d-flex flex-row gap-3 container-md justify-content-center px-3'>
            {socialMediaButtons}
        </div>
    )
}