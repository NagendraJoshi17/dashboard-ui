import React, { useState } from 'react';
import '../dashboard.scss';
import homeIcon from '../icons/home.png';
import invoiceIcon from '../icons/invoice.png';
import clientsIcon from '../icons/clients.png';
import productsIcon from '../icons/products.png';
import chatIcon from '../icons/chat.png';
import settingsIcon from '../icons/settings.png';
import helpIcon from '../icons/question.png';
import logoutIcon from '../icons/logout.png';
import logoIcon from '../icons/hexagon.png';
import searchIcon from '../icons/search.png';
import bellIcon from '../icons/bell.png';
import ReactApexChart from 'react-apexcharts';
import orangeIcon from '../icons/orange.png';
import greenIcon from '../icons/green.png';
import buyerPicIcon from '../icons/buyerPic.png';
import increaseIcon from '../icons/increase.png';
import decreaseIcon from '../icons/decrease.png';
import greenFlagIcon from '../icons/greenFlag.png';
import heartIcon from '../icons/heart.png';
import { treeMap } from './Treemap';

const Dashboard = () => {

  const chartData = {
    options: {
      xaxis: {
        categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
      },
      yaxis: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return "$" + val;
          }
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
        }
      },
    },

    series: [
      {
        name: 'Monthly Revenue',
        data: [12000, 8000, 4000, 15000, 8000, 10000, 8000, 10000, 10000]
      }
    ]
  };

  const [visible, setVisible] = useState(true);
  const hamFunc = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className='main-box'>
        <div className={`left-panel ${visible ? '' : 'left-panel-1'}`}>
          <div className='menu-box'>
            <div className='logo'>
              {visible && (<><div style={{ marginLeft: '.7rem' }}><img src={logoIcon} alt="Logo Icon" style={{ height: '2rem', width: '2rem' }} /></div>
                <div><b>Invo</b></div></>)}
              <div className='ham-burger' onClick={hamFunc}><input type="checkbox" role="button" aria-label="Display the menu" class="menu" /></div>
            </div>
            {(visible && <div className='menu-item'>
              <div className='h-icon'>
                <div style={{ marginLeft: '.7rem' }}><img src={homeIcon} alt="Home Icon" style={{ height: '1.5rem', width: '1.5rem' }} /></div>
                <div>Home</div>
              </div>
              <div className='i-icon'>
                <div style={{ marginLeft: '.7rem' }}><img src={invoiceIcon} alt="Invoice Icon" style={{ height: '1.5rem', width: '1.5rem' }} /></div>
                <div>Invoices</div>
              </div>
              <div className='c-icon'>
                <div style={{ marginLeft: '.7rem' }}><img src={clientsIcon} alt="Clients Icon" style={{ height: '1.5rem', width: '1.5rem' }} /></div>
                <div>Clients</div>
              </div>
              <div className='p-icon'>
                <div style={{ marginLeft: '.7rem' }}><img src={productsIcon} alt="Products Icon" style={{ height: '1.5rem', width: '1.5rem' }} /></div>
                <div>Products</div>
              </div>
              <div className='m-icon'>
                <div style={{ marginLeft: '.7rem' }}><img src={chatIcon} alt="Messages Icon" style={{ height: '1.5rem', width: '1.5rem' }} /></div>
                <div>Messages</div>
                <div className='m-notification'>2</div>
              </div>
              <div className='s-icon'>
                <div style={{ marginLeft: '.7rem' }}><img src={settingsIcon} alt="Settings Icon" style={{ height: '1.5rem', width: '1.5rem' }} /></div>
                <div>Settings</div>
              </div>
              <div className='help-icon'>
                <div style={{ marginLeft: '.7rem' }}><img src={helpIcon} alt="Help Icon" style={{ height: '1.5rem', width: '1.5rem' }} /></div>
                <div>Help</div>
              </div>
            </div>)}
            {(visible && <button className='log-out'>
              <div style={{ marginLeft: '.7rem' }}><img src={logoutIcon} alt="Logout Icon" style={{ height: '1.5rem', width: '1.5rem' }} /></div>
              <div>Log Out</div>
            </button>)}
          </div>
        </div>
        <div className={`right-panel ${visible ? '' : 'right-panel-1'}`}>
          <div className='profile-section'>
            <div className='search'>
              <div style={{ marginLeft: '.7rem' }}><img src={searchIcon} alt="Search Icon" style={{ height: '1.5rem', width: '1.5rem' }} /></div>
              <div><input type="text" placeholder='Tap to search' /></div>
            </div>
            <div className='display-pic'>
              <div className='bell'>
                <div style={{ marginLeft: '.7rem' }}><img src={bellIcon} alt="Bell Icon" style={{ height: '1.5rem', width: '1.5rem' }} /></div>
              </div>
              <div className='dp-name'>
                <div className='d-p'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrRcnqE5HCc1musJ9rElzjiKGvu9o8Q_bxA&usqp=CAU" alt="" style={{ height: '80%', width: '100%', borderRadius: '50%' }} /></div>
                <div className='user-login-name'><b>David Spade</b></div>
              </div>
            </div>
          </div>
          <div className='amount-section'>
            <div className='one'>
              <div className='inner-one-amt'>
                <div className='ioa-amt'><img src={orangeIcon} alt="Orange Icon" style={{ height: '2rem', width: '2rem' }} /></div>
                <div>Total Revenue</div>
              </div>
              <div className='inner-two-amt'>
                <div className='ita-amt'><b>$ 216k</b></div>
                <div className='ita-percentage'><b>241%</b> <img src={increaseIcon} alt="Increase Icon" style={{ height: '1rem', width: '1rem' }} /></div>
              </div>
            </div>
            <div className='two'>
              <div className='inner-invoice-amt-one'>
                <div className='in-voice-amt-one'><img src={greenIcon} alt="Green Icon" style={{ height: '2rem', width: '2rem' }} /></div>
                <div>Invoices</div>
              </div>
              <div className='inner-invoice-amt-two'>
                <div className='in-voice-amt-two'><b>2,221</b></div>
                <div className='invoice-percentage'><b>121%</b> <img src={increaseIcon} alt="Increase Icon" style={{ height: '1rem', width: '1rem' }} /></div>
              </div>
            </div>
            <div className='three'>
              <div className='inner-clients-amt-one'>
                <div className='clie-nts-amt-one'><img src={buyerPicIcon} alt="Green Icon" style={{ height: '2rem', width: '2rem' }} /></div>
                <div>Clients</div>
              </div>
              <div className='inner-clients-amt-two'>
                <div className='clie-nts-amt-two'><b>1,423</b></div>
                <div className='clients-percentage'><b>81%</b> <img src={increaseIcon} alt="Increase Icon" style={{ height: '1rem', width: '1rem' }} /></div>
              </div>
            </div>
            <div className='four'>
              <div className='inner-loyalty-amt-one'>
                <div className='loyal-ty-amt-one'><img src={heartIcon} alt="Green Icon" style={{ height: '2rem', width: '2rem' }} /></div>
                <div>Loyalty</div>
              </div>
              <div className='inner-loyalty-amt-two'>
                <div className='loyal-ty-amt-two'><b>1,423</b></div>
                <div className='loyalty-percentage'><b>81%</b> <img src={decreaseIcon} alt="Increase Icon" style={{ height: '1rem', width: '1rem' }} /></div>
              </div>
            </div>
          </div>
          <div className='tree-map'>
            <div className='inner-treemap-div'>
              <ReactApexChart
                options={treeMap.options}
                series={treeMap.series}
                type="treemap"
                height={375}
              /></div>
          </div>
          <div className='graph-section'>
            <div className='g-one'>
              <div className='inner-g-one'>
                <div style={{ marginLeft: '.7rem', marginBottom: '.7rem' }}>Monthly Revenue</div>
                <div className='revenue'>$ 15,000</div>
                <div className='bar-graph'><ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="bar"
                  height={250}
                  width={680}
                /></div>
              </div>
            </div>
            <div className='g-two'>
              <div className='inner-g-two'>
                <div className='new'>New</div>
                <div className='g-two-text-one-one'>We have added new</div>
                <div className='g-two-text-one-two'>invoicing templates!</div>
                <div className='g-two-text-two-one'>New templates focused on</div>
                <div className='g-two-text-two-two'>helping you improve your</div>
                <div className='g-two-text-two-three'>business</div>
                <div className='download-btn'><button className='d-btn'><b>Download Now</b></button></div>
              </div>
            </div>
          </div>
          <div className='activity-invoice'>
            <div className='ai-one'>
              <div className='act-invoice-main'>
                <div className='act-main-heading'><b>Activities</b></div>
                <div className='act-main-pic-text'>
                  <div className='act-main-pic'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgfJLgYlYMHQF9jtFYZYTK50LnoipVMq93w&usqp=CAU" alt="" style={{ height: '3rem', width: '3rem', borderRadius: '50%' }} />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKeVawZqf6Q3PQt7ol89hrPLRC3BMSkqIlaQ&usqp=CAU" alt="" style={{ height: '2rem', width: '2rem', borderRadius: '50%' }} />
                  </div>
                  <div className='act-main-text'>
                    <div style={{ height: '50%' }}>
                      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '.5rem' }}><img src={greenFlagIcon} alt="Green Flag Icon" style={{ height: '1rem', width: '1rem' }} /> <p style={{ color: '#30cd09' }}>New Invoice</p></div>
                      <div><b>Francisco Gibbs</b> created</div>
                      <div style={{ marginBottom: '.5rem' }}>invoice PQ-4491C</div>
                      <div>Just Now</div>
                    </div>
                    <div>
                      <div><b>Invoice JL-3432B</b> reminder</div>
                      <div style={{ marginBottom: ".5rem" }}>was sent to <b>Chester Corp</b></div>
                      <div>Friday 12:26PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='ai-two'>
              <div className='recent-inv-main'>
                <div style={{ fontSize: '1.5rem', height: '15%', backgroundColor: '#f9fafe' }}><b>Recent Invoices</b></div>
                <div style={{ height: '85%', width: "100%", backgroundColor: '#f9fafe', display: 'flex', flexDirection: 'row' }}>
                  <div style={{ width: '20%', height: '100%', backgroundColor: '#f9fafe' }}>
                    <div style={{ height: '20%', borderTop: '1px solid black', borderBottom: '1px solid black', display: 'flex', alignItems: 'center' }}>No</div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>PQ-4491C</b></div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>IN-991LJ</b></div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>UV-2319A</b></div>
                  </div>
                  <div style={{ width: '20%', height: '100%', backgroundColor: '#f9fafe' }}>
                    <div style={{ height: '20%', borderTop: '1px solid black', borderBottom: '1px solid black', display: 'flex', alignItems: 'center' }}>Date Created</div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>3,July,2020</b></div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>21 May,2021</b></div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>14 Apr,2020</b></div>
                  </div>
                  <div style={{ width: '20%', height: '100%', backgroundColor: '#f9fafe' }}>
                    <div style={{ height: '20%', borderTop: '1px solid black', borderBottom: '1px solid black', display: 'flex', alignItems: 'center' }}>Client</div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>Daniel Padila</b></div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>Christiana Jacobs</b></div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>Elijabeth Bailey</b></div>
                  </div>
                  <div style={{ width: '20%', height: '100%', backgroundColor: '#f9fafe' }}>
                    <div style={{ height: '20%', borderTop: '1px solid black', borderBottom: '1px solid black', display: 'flex', alignItems: 'center' }}>Amount</div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>$ 2,450</b></div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>$ 14,810</b></div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>$ 4,500</b></div>
                  </div>
                  <div style={{ width: '20%', height: '100%', backgroundColor: '#f9fafe' }}>
                    <div style={{ height: '20%', borderTop: '1px solid black', borderBottom: '1px solid black', display: 'flex', alignItems: 'center' }}>Status</div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>Paid</b></div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>Overdue</b></div>
                    <div style={{ height: '20%', display: 'flex', alignItems: 'center' }}><b>Paid</b></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Dashboard;
