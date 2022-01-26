import { RouteComponentProps } from "@reach/router";

const InitialRecognition = (_props: RouteComponentProps) => (
  <>
    <div>
      <h3>Lease Recognition</h3>
    </div>
    <div>
      <h4>Lease Liability</h4>
      <p>
        On lease commencemnt, a lessee is required to measure and record a lease
        liability equal to the present value of the remaining lease payments,
        discounted using the rate implicit in the lease or the lessee's
        incremental borrowing rate.
      </p>
      <p>
        Lease payments used in measuring the lease liability are amounts due tot
        he lessor excluding any payments that a lessee makes before lease
        commencement.
      </p>
      <div>
        <p>
          Interest expense is recognized using the interest method
        </p>
      </div>
    </div>
    <div>
      <h4>Right of Use Asset</h4>
      <p>
        At the commencement date the cost of the right of use asset shall
        consist of all of the following
      </p>
      <ul>
        <li>The amount of the initial measurement of the lease liability.</li>
        <li>
          Any Lease payments made to the lessor at or before the commencement
          date, minus any lease incentives received.
          <ul>
            <li>
              Lease payments made prior to lease commencement should be recorded
              as prepaid rent. This prepaid amount should then be reclassified
              to the right of use asset on the lease commencement date.
            </li>
          </ul>
        </li>
        <li>
          Any initial direct costs incurred by the lessee.
          <ul>
            <li>
              Should be recorded as an increase in the lessee's right of use
              asset but should not be recorded as part of the lease liability.
            </li>
            <li>
              Incremental costs of a lease that would not have been incurred had
              the lease not been executed.
            </li>
            <table>
              <tr>
                <th>Included</th>
                <th>Excluded</th>
              </tr>
              <tr>
                <td>Commissions</td>
                <td>Employee Salaries</td>
              </tr>
              <tr>
                <td>Legal fees resulting from teh execution of the lease</td>
                <td>
                  Legal fees for services rendered before the execution of the
                  lease
                </td>
              </tr>
              <tr>
                <td>Lease document preparation costs</td>
                <td>Negotiating lease term and conditions</td>
              </tr>
              <tr>
                <td>Certain payments to existing tenants to move out</td>
                <td>Advertising</td>
              </tr>
              <tr>
                <td>
                  Consideration paid for a guarantee of a residual asset by an
                  unrelated third party
                </td>
                <td>Depreciation</td>
              </tr>
              <tr>
                <td></td>
                <td>Costs related to an idle asset</td>
              </tr>
            </table>
          </ul>
        </li>
      </ul>
      <div>
        <p>Asset is amortized using the straight line method over the shorter of the useful life of the asset or the lease term.</p>
      </div>
    </div>
    <div>
      <h4>Recording Lease</h4>
      <p>Initial recording of a lease is the same for a finance and operating leases. It's the subsequent recognition and measurements that differ.</p>
      <div>
        <ul>
          <li>Initial measurement of lease liability : $900,000</li>
          <li>
            Lease payments made to lessor before commencement date: $10,000
          </li>
          <li>Lease incentives received form lessor: $(50000)</li>
          <li>Initial direct costs: $1,000</li>
          <li>Initial measurement of right of use asset: $861,000</li>
        </ul>
        <table>
          <tr>
            <th>Account</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
          <tr>On Lease execution.</tr>
          <br />
          <tr>Record initial lease payment</tr>
          <tr>
            <td>Prepaid Rent</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>Cash</td>
            <td></td>
            <td>10,000</td>
          </tr>
          <br />
          <tr>Record receipt of lease incentive</tr>
          <tr>
            <td>Cash</td>
            <td>50,000</td>
            <td></td>
          </tr>
          <tr>
            <td>Lease Incentive</td>
            <td></td>
            <td>50,000</td>
          </tr>
          <br />
          <tr>On Lease commencement.</tr>
          <br />
          <tr>Record right of use asset and liability</tr>
          <tr>
            <td>Right of use asset</td>
            <td>900,000</td>
            <td></td>
          </tr>
          <tr>
            <td>Lease Liability</td>
            <td></td>
            <td>900,000</td>
          </tr>
          <br />
          <tr>Reclass lease incentive</tr>
          <tr>
            <td>Lease Incentive</td>
            <td>50,000</td>
            <td></td>
          </tr>
          <tr>
            <td>Right of use asset</td>
            <td></td>
            <td>50,000</td>
          </tr>
          <br />
          <tr>Reclass prepaid rent</tr>
          <tr>
            <td>Right of use asset</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>Prepaid Rent</td>
            <td></td>
            <td>10,000</td>
          </tr>
          <br />
          <tr>Record Initial Direct Costs</tr>
          <tr>
            <td>Right of use asset</td>
            <td>1,000</td>
          </tr>
          <tr>
            <td>Accrued expenses</td>
            <td></td>
            <td>1,000</td>
          </tr>
        </table>
      </div>
    </div>
  </>
);

export default InitialRecognition;
