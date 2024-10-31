import { useState } from 'react'
import './App.css'

const App = () => {
 
  const [selectedContent, setSelectedContent] = useState(null);

  
  const content = {
    germanShepherd: {
      text: "The German Shepherd, also known in Britain as an Alsatian, is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899. It was originally bred as a herding dog, for herding sheep.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4ir7qxd2_RlqMp6l12zjeLI_EE3sO1ulMZYDrHrlN-x2SbHu",
    },
    dobermann: {
      text: "The Dobermann is a German breed of medium-large working dog of pinscher type. It was originally bred in Thuringia in about 1890 by Louis Dobermann, a tax collector. It has a long muzzle and – ideally – an even and graceful gait.",
      img: "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181054/202104doberman-pinscher-dog-breed.jpg",
    },
    riottweiler: {
      text: "The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs, because their main use was to herd livestock and pull carts laden with butchered meat to market",
      img: "https://cdn.britannica.com/69/234469-050-B883797B/Rottweiler-dog.jpg",
    },

    bullTerrier: {
       text: "The Bull Terrier is a breed of dog in the terrier family. There is also a miniature version of this breed which is officially known as the Miniature Bull Terrier. This breed originates in 19th century England. Bull Terriers are most recognised by their unique head features. ",
       img: "https://cdn.britannica.com/77/235277-050-E9162647/white-bull-terrier-dog.jpg",
    },

    americanBully: {
       text: "The American Bully is a modern breed of dog that was developed as a companion dog, and originally standardized and recognized as a breed in 2004 by the American Bully Kennel Club. Their published breed standard describes the dog as giving the impression of great strength for its size.",
       img: "https://breedatlas.net/wp-content/uploads/2024/07/American-Bully-728x410.jpg.webp",
    },

    boxer: {
      text: "The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs, because their main use was to herd livestock and pull carts laden with butchered meat to market",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSF83htJTdqNzf43ZNcKRokhhZtFDAi5ZXbmqIulv6-h_0awLV0",
   }
      
    
  };

  
  const toggleContent = (contentKey) => {
    setSelectedContent((prevContent) =>
      prevContent === contentKey ? null : contentKey
    );
  };

  const getBackgroundColor = () => {
    if (selectedContent === 'germanShepherd') return '#0f5e54'; 
    if (selectedContent === 'dobermann') return '#1d2b73'; 
    if (selectedContent === 'riottweiler') return '#4d1d73';
    if (selectedContent === 'bullTerrier') return '#691d73';
    if (selectedContent === 'americanBully') return '#1d7349';
    if (selectedContent === 'boxer') return '#73431d';; 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', color: '#c48652' }}>
      <h1>Dog breeds</h1>

     
      <button style={{ margin: '20px', color: '#0f5e54' }} onClick={() => toggleContent('germanShepherd')}>German Shepherd</button>
      <button style={{ margin: '20px', color: '#1d2b73' }} onClick={() => toggleContent('dobermann')}>Dobermann</button>
      <button style={{ margin: '20px', color: '#4d1d73' }} onClick={() => toggleContent('riottweiler')}>Rottweiler</button>
      <button style={{ margin: '20px', color: '#691d73' }} onClick={() => toggleContent('bullTerrier')}>Bull Terrier</button>
      <button style={{ margin: '20px', color: '#1d7349' }} onClick={() => toggleContent('americanBully')}>American Bully</button>
      <button style={{ margin: '20px', color: '#73431d' }} onClick={() => toggleContent('boxer')}>Boxer</button>

      
      {selectedContent && (
         <div style={{ marginTop: '20px', padding: '20px', backgroundColor: getBackgroundColor(), borderRadius: '10px' }}>
         <p>{content[selectedContent].text}</p>
         <img src={content[selectedContent].img} alt="Dog breed" style={{ maxWidth: '300px' }} />
       </div>
      )}
    </div>
  );
};

export default App;