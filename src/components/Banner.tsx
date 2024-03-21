import styles from './Banner.module.css'
import Image from 'next/image';



export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={'/img/vaccine2.avif'} 
            alt ='cover'
            fill={true}
            objectFit='cover'
            className={styles.bannerImage}
            />
            <div className={styles.bannerText}>
                <h1 className='text-4xl'>Vaccine Service Center</h1>
                <h5 >We are pleased to announce that we are providing vaccination services to protect our community at our location. <br></br>Vaccination is an important step that everyone can take to protect themselves and others from serious infectious diseases. </h5>
            </div>
        </div>
    );
}