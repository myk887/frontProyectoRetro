import { useCallback,  useEffect,  useState } from 'react'
import './introductionPage.css';
import Banner1 from '../images/banners/Banner1.jpg'
import Banner2 from '../images/banners/Banner2.jpg'
import Banner3 from '../images/banners/Banner3.jpg'
import Banner4 from '../images/banners/Banner4.jpg'

function Banners () {

    const [banner, setBanner] = useState(1)

    const banners=[Banner1,Banner2,Banner3,Banner4]

    const handleNext = useCallback(() => setBanner(banner<4? banner+1:1),[setBanner,banner])

    useEffect(() => {
      const carousel = setInterval(() => {
        handleNext();
      }, 5000);

      return () => {
        clearInterval(carousel)
      }
    }, [handleNext])

    return (
      <div className="banners">
          <img className="banners-image" src={banners[banner-1]} alt="" />
      </div>
    )
  }

export default Banners
