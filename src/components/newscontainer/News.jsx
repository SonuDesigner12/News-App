import React, { useEffect, useState } from 'react'


const News = ({ category }) => {


    //fetct news
    const [news, setNews] = useState([])

    // const getNews = async () => {
    //     const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ce05532c3b7b451598d6b989858cd5f4`)
    //     const result = await response.json();
    //     setNews(result.articles);

    // }
    {/* update fecth data*/}
    const getNews = async () => {
        try {
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ce05532c3b7b451598d6b989858cd5f4`
          );
      
          if (response.status === 429) {
            console.warn("Rate limit exceeded. Retrying in 60 seconds...");
            setTimeout(getNews, 60000); // Retry after 60 seconds
            return;
          }
      
          const result = await response.json();
          setNews(result.articles);
        } catch (error) {
          console.error("Error fetching news:", error);
          // Handle other errors as needed
        }
      };
      
    useEffect(() => {
        getNews()
    }, [category]);

    // fetch news end here 

    // pagination logic
    const [currentPage, setCurrentPage] = useState(1)
    const [totalNewsShow, setTotalNewsShow] = useState(6)

    const last = currentPage * totalNewsShow;
    const first = last - totalNewsShow;
    const [activeBtn, setActiveBtn] = useState(1) ;
    
    // button counts
    const buttonCount = []
    const NewsPerPage = Math.ceil(news.length / totalNewsShow)
    for (let i = 1; i <= NewsPerPage; i++) {
        buttonCount.push(i)
    }
    // function
    function PageChange(i) {
        setCurrentPage(i)
        setActiveBtn(i)
    }
    // pagination logic ends here

    return (
        <> {/* design card where articles show*/}
            <div className=' md:px-20 px-6 mx-auto mt-8 grid xl:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    news.slice(first, last).map((items, index) => {
                        return (
                            <div className="card card-compact lg:w-96 md:w-80 w-96 mx-auto  shadow-sm shadow-white " key={index}>
                                <figure>
                                    <img
                                        className='hover:scale-105 duration-300'
                                        src={items.urlToImage ? items.urlToImage : 'https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg'}
                                        alt={items.title}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{items.title}</h2>
                                    <p>
                                        <a href={items.url} target='_blank'>
                                            {items.content}
                                        </a>
                                    </p>
                                    <div className="btn btn-outline btn-success btn-sm w-fit">
                                        <a
                                            href={items.url}
                                            target='_blank'
                                            className=' '
                                        >
                                            Read more-
                                        </a>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>

            {/*pagination */}

            <div className='flex gap-4 my-12 justify-center items-center'>
                {
                    buttonCount.map((button, id) => {
                        return ( 
                            <h1
                                className={`btn btn-outline btn-sm btn-primary ${button === activeBtn ? 'active' : ''}`}
                                key={id}
                                onClick={() => PageChange(button)}
                            >
                                {button}
                            </h1>
                        )
                    })
                }
            </div>



        </>
    )
}

export default News
