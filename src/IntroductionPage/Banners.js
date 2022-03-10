import { useCallback,  useEffect,  useState } from 'react'
import './introductionPage.css';
import Banner1 from '../images/banners/Banner1.png'
import Banner2 from '../images/banners/Banner2.png'
import Banner3 from '../images/banners/Banner3.png'
import Banner4 from '../images/banners/Banner4.png'

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
          <img className="bannersImg" src={banners[banner-1]} alt="" />
      </div>
    )
  }

export default Banners
