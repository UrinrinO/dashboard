import React from 'react';
import SearchIcon from '@material-ui/icons/Search';


const Body = () => {
    return (
        <main>
        <div class="cards">
            <div class="card-single">
                <div class="top">
                    <div>
                        <p>Total account balance</p>
                    </div>
                    {/* <div><span class="las la-users"></span></div> */}
                    <select class="currency-selector" name="">
                        <option value="USD" selected="selected">USD</option>
                        <option value="NGN">NGN</option>
                        <option value="GHD">GHD</option>
                    </select>
                </div>
                <div class="bottom">
                    <h2>$ 5,332.18</h2>
                    <p><small>1USD = 381.97NGN</small></p>
                </div>
            </div>
            <div class="card-single">
                <div class="top">
                    <div>
                        <p>Funds on hold</p>
                    </div>                        
                </div>
                <div class="bottom">
                    <h2>$ 5,332.18</h2>
                </div>
            </div>
        </div>

        <div class="table-heading">
            <h4>Payout Table</h4>
            <div class="table-heading-right">
                <div class="search-wrapper">
                    <input type="search" placeholder="Search something..." />
                    <span>
                        <SearchIcon/>
                    </span>
                </div>

                {/* <div class="search-wrapper mid">
                    <input type="search" placeholder="March 2020" />
                    <span class="las la-search"></span>
                </div> */}

                <div class="btn-white">
                    April, 2014
                </div>
                <div class="btn">Payout</div>
            </div>
        </div>
        <div className="table-overflow">
            <table>
                <tr>
                    <th>Payout ID</th>
                    <th>Source</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>RHDBSJ1976</td>
                    <td>Lorem ipsum dolor, sit amet consectetur.</td>
                    <td>20th, July 2021</td>
                    <td>$1,200</td>
                </tr>
                <tr>
                    <td>RHDBSJ1976</td>
                    <td>Lorem ipsum dolor, sit amet consectetur.</td>
                    <td>20th, July 2021</td>
                    <td>$1,200</td>
                </tr>
                <tr>
                    <td>RHDBSJ1976</td>
                    <td>Lorem ipsum dolor, sit amet consectetur.</td>
                    <td>20th, July 2021</td>
                    <td>$1,200</td>
                </tr>
                <tr>
                    <td>RHDBSJ1976</td>
                    <td>Lorem ipsum dolor, sit amet consectetur.</td>
                    <td>20th, July 2021</td>
                    <td>$1,200</td>
                </tr>
                <tr>
                    <td>RHDBSJ1976</td>
                    <td>Lorem ipsum dolor, sit amet consectetur.</td>
                    <td>20th, July 2021</td>
                    <td>$1,200</td>
                </tr>
                
            </table>
        </div>
            
        <div class="more-wrapper">
            <p>See more</p>
        </div>
    </main>
    )
}

export default Body
