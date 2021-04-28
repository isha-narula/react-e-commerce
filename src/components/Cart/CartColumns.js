import React from "react";


export default function CartColumns ()
{
    return (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
              <div class="col-10 mx-auto col-lg-2">
                  <div className="p-textuppercase">
                      products
                  </div>
              </div>

              <div class="col-10 mx-auto col-lg-2">
                  <div className="p-textuppercase">
                      Name Of Product
                  </div>
              </div>


              <div class="col-10 mx-auto col-lg-2">
                  <div className="p-textuppercase">
                      Price
                  </div>
              </div>



              <div class="col-10 mx-auto col-lg-2">
                  <div className="p-textuppercase">
                      Quantity
                  </div>
              </div>



              <div class="col-10 mx-auto col-lg-2">
                  <div className="p-textuppercase">
                      Remove
                  </div>
              </div>



              <div class="col-10 mx-auto col-lg-2">
                  <div className="p-textuppercase">
                      Total
                  </div>
              </div>
          </div>
        </div>

    )
}