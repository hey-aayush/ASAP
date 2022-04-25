import React,{useState, useEffect} from 'react'
import { Typography, Divider, Row, Col, Statistic } from 'antd';
import axios from 'axios'
import PortfolioCard from './PortfolioCard';

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
        <PortfolioCard/>
    </div>
  )
}

export default Portfolio