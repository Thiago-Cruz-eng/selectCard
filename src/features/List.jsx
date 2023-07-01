import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './List.css'

const List = () => {

    const navigate = useNavigate()
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(100);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const {data} = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        setCards(data.data);
        console.log(data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const back = () => {
        navigate(-1)
    }
  
    const renderCards = () => {
      if (currentCards.length === 0) {
        return <div>Loading...</div>;
      }
  
      return (
        <>
        <ul>
          {currentCards.map((card) => (
            <>
                <div className="container">
                    <div key={card.id}>{card.name} | {card.race}</div>
                    <p>O QUE CONSIGO FAZER COM ELE???</p>
                    <p>{card.desc}</p>
                    <img src={card.card_images[0].image_url_small} alt="" />
                </div>
              
            </>
          ))}
        </ul>
        </>
        
      );
    };
  
    const renderPagination = () => {
      const totalPages = Math.ceil(cards.length / cardsPerPage);
  
      if (totalPages === 0) {
        return null;
      }
  
      const pages = [];
  
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button key={i} onClick={() => handlePageChange(i)}>
            {i}
          </button>
        );
      }
  
      return <div>{pages}</div>;
    };
  
    return (
      <div>
        <button onClick={back}>VOLTAR</button>
        <h2>escolha o seu personagem e vai a luta!!</h2>
        {renderCards()}
        {renderPagination()}
      </div>
    );
}

export default List;