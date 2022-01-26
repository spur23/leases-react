import { RouteComponentProps } from "@reach/router";

const SubsequentRecognition = (_props: RouteComponentProps) => (
  <>
    <div>
      <h3>Finance Lease</h3>
      <p> Initial Recognition</p>
      <ul>
        <li>ROU Asset: $4,020.89</li>
        <li>Lease Liability: $4,020.89</li>
        <li>Lease payment of $1,250 annually</li>
        <li>Discount Rate: 6.50%</li>
        <li>Lease Term: 5 years</li>
        <li>Rent is not prepaid</li>
      </ul>
      <p>
        ROU Asset is amortized over the lease term because the economic life is
        greater than the lease term. Yearly amortization expense = $1,000
        ($5,000/5).
      </p>
      <table>
        <tr>
          <th>Year</th>
          <th>
            <p>Amortization &emsp;</p>
          </th>
          <th>ROU Asset</th>
        </tr>
        <tr>
          <td>Lease Commencement</td>
          <td></td>
          <td>$4,020.89</td>
        </tr>
        <tr>
          <td>Year 1</td>
          <td>$804.18</td>
          <td>$3,216.71</td>
        </tr>
        <tr>
          <td>Year 2</td>
          <td>$804.18</td>
          <td>$2,412.53</td>
        </tr>
        <tr>
          <td>Year 3</td>
          <td>$804.18</td>
          <td>$1,608.36</td>
        </tr>
        <tr>
          <td>Year 4</td>
          <td>$804.18</td>
          <td>$804.18</td>
        </tr>
        <tr>
          <td>Year 5</td>
          <td>$804.18</td>
          <td>$0</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$4,020.89</td>
        </tr>
      </table>
      <div>
        <p>
          Interest expense on the lease liability would be calculated using a
          rate of 6.50%, same rate used to initially measure the liability.
        </p>
        <table>
          <tr>
            <th>Year &emsp;</th>
            <th>Payment &emsp;</th>
            <th>Principal Paid &emsp;</th>
            <th>Interest Paid &emsp;</th>
            <th>Interest Expense &emsp;</th>
            <th>Liability &emsp;</th>
          </tr>
          <tr>
            <td>Lease Commencement</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>$4,020.89</td>
          </tr>
          <tr>
            <td>Year 1</td>
            <td></td>
            <td></td>
            <td></td>
            <td>261.36</td>
            <td>$4,282.25</td>
          </tr>
          <tr>
            <td>Year 2</td>
            <td>1,250</td>
            <td>988.64</td>
            <td>261.36</td>
            <td>278.35</td>
            <td>$3,310.89</td>
          </tr>
          <tr>
            <td>Year 3</td>
            <td>1,250</td>
            <td>971.65</td>
            <td>278.35</td>
            <td>215.19</td>
            <td>$2,275.78</td>
          </tr>
          <tr>
            <td>Year 4</td>
            <td>1,250</td>
            <td>1,034.81</td>
            <td>215.19</td>
            <td>147.93</td>
            <td>$1,173.71</td>
          </tr>
          <tr>
            <td>Year 5</td>
            <td>1,250</td>
            <td>1,102.07</td>
            <td>147.93</td>
            <td>76.29</td>
            <td>$0</td>
          </tr>
        </table>
      </div>
    </div>
    <div>
      <h3>Operating Lease</h3>
      <p>Initial Recognition</p>
      <ul>
        <li>ROU Asset: $28,190</li>
        <li>Lease Liability: $28,190</li>
        <li>Lease payment of $1,250 monthly</li>
        <li>Discount Rate: 4.00%</li>
        <li>Lease Term: 2 years</li>
      </ul>
      <p>
        Unlike a Finance lease the ROU Asset is not amortized on a straight line
        basis. We will need to calculate the interest expense on the liability
        in order to calculate the amortization on the asset.
      </p>
      <p>
        The interest calculated is not considered interest expense, there is no
        interest expense recorded in the income statement for operating leases.
      </p>
      <p>
        First calculate the straight line rent expense ($1,250 * 24)/24 =
        $1,250. In this case the straight line is equal to the monthly payments
        because there is not rent payment escalation during the lease term.
      </p>
      <p>Liability Table:</p>
      <table>
        <tr>
          <th>Year</th>
          <th>Payment &emsp;</th>
          <th>"Interest" &emsp;</th>
          <th>Liability</th>
        </tr>
        <tr>
          <td>Commencement</td>
          <td></td>
          <td></td>
          <td>$28,190</td>
        </tr>
        <tr>
          <td>Year 1</td>
          <td>$15,000</td>
          <td>$1,198.09</td>
          <td>$14,388</td>
        </tr>
        <tr>
          <td>Year 2</td>
          <td>$15,000</td>
          <td>$611.51</td>
          <td>$0</td>
        </tr>
      </table>
      <p>Asset Table:</p>
      <table>
        <tr>
          <th>Year &emsp;</th>
          <th>Straight Line Expense &emsp;</th>
          <th>Interest On Liability &emsp;</th>
          <th>Amortization &emsp;</th>
          <th>ROU Asset</th>
        </tr>
        <tr>
          <td>Commencement</td>
          <td></td>
          <td></td>
          <td></td>
          <td>$28,190</td>
        </tr>
        <tr>
          <td>Year 1</td>
          <td>$15,000</td>
          <td>$1,198.09</td>
          <td>$13,801.91</td>
          <td>$14,388.09</td>
        </tr>
        <tr>
          <td>Year 2</td>
          <td>$15,000</td>
          <td>$611.51</td>
          <td>$14,388.49</td>
          <td>($0.40)</td>
        </tr>
      </table>
    </div>
  </>
);

export default SubsequentRecognition;
