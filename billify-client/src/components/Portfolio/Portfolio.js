import React,{useState, useEffect} from 'react'
import { Typography, Divider, Row, Col, Statistic } from 'antd';
// import PieDonut from '../../utils/PieDonut'
import axios from 'axios'

const { Title } = Typography;

function Portfolio() {

    const [portfolio, setPortfolio] = useState({ data: undefined, isFetching: true });

    const getPortfolio = () => {
        const portfolioRoute = process.env.REACT_APP_BACKEND + '/getOverallPortfolio';

        axios.get(portfolioRoute, { withCredentials: true }).then(res => {

            if (res['data']['portfolio']) {
                setPortfolio({
                    data: res.data.portfolio,
                    isFetching: false
                });
            }
        }).catch(error => {
            console.log(error);
            setPortfolio({
                data: undefined,
                isFetching: false
            });
        })
    }

    useEffect(() => {
        // getPortfolio();
    }, [])

    const product=['Lux','Baam','Toothpaste'];
    const quantity=[10,5,3];

  return (
    <div>
        {/* <Divider orientation="right" > */}
            Portfolio
            {/* <PieDonut Heading={'Ependiture'} products={product} quantity={quantity}/> */}
        {/* </Divider> */}
    </div>
  )
}

export default Portfolio