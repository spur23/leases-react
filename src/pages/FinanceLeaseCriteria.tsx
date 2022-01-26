import { RouteComponentProps } from "@reach/router";

const FinanceLeaseCriteria = (_props: RouteComponentProps) => (
  <>
    <div>
      <h4>
        ASC 842-10-25-2 -:{" "}
        <em>
          "A lessee shall classify a lease as a finance lease and a lessor shall
          classify a lease as a sales-type lease when the lease meets any of the
          following criteria at lease commencement:"
        </em>
      </h4>
    </div>
    <div>
      <ul>
        <li>
          Does the lease transfer ownership of the underlying asset to the
          lessee by the end of the lease term?
         </li>
        <li>
          Does the lease grant the lessee an option to purchase the underlying
          asset that the lessee is reasonably certain to exercise.
        </li>
        <li>
          Is the lease term for a major part of the remaining economic life of
          the underlying asset?
          <ul>
            <li>
              Consider a lease term to be for a major part if it is equal to or greater than 75% of the underlying asset's remaining economic life.
            </li>
            <li>
              Leases that commence at or near the end of the underlying asset's economic life are exempt from applying this particular lease classification criterion.
            </li>
          </ul>
        </li>
        <li>
          Is the present value of the sum of the lease payments and any residual
          value guaranteed by the lessee that is not otherwise included in the
          lease payments, substantially all of the fair value of the underlying
          asset?
        </li>
        <li>
          Is the underlying asset of such a specialized nature that it is
          expected to have no alternative use to the lessor at the end of the
          lease term?
        </li>
      </ul>
    </div>
    <div>
      <p>If yes is answered to any of the criteria above then the lease must be classified as a finance lease.</p>
    </div>
  </>
);

export default FinanceLeaseCriteria;
