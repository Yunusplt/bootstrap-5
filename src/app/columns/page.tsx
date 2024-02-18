import React from "react";
import "./style.scss";
import Image from "next/image";
import IMG from "@/assets/images/EkranBoyutlari.png";

const columns = () => {
  return (
    <main className=" text-center bg-success pb-3">
      <section className="row bg-info m-1 align-items-center">
        <div className="col bg-danger py-4">align-item-center</div>
        <div className="col bg-primary  py-4">align-item-center</div>
        <div className="col bg-warning py-4">align-item-center</div>
      </section>
      <section className="row bg-info m-1 align-items-end">
        <div className="col bg-danger py-4">align-item-end</div>
        <div className="col bg-primary  py-4">align-item-end</div>
        <div className="col bg-warning py-4">align-item-end</div>
      </section>
      <hr />
      <div className="row bg-info m-1">
        <div className="col bg-danger py-4 align-self-start">
          align-self-start
        </div>
        <div className="col bg-primary py-4 align-self-center">
          align-self-center
        </div>
        <div className="col bg-warning py-4 align-self-end">align-self-end</div>
      </div>
      <hr />
      <section className="row bg-info m-1 justify-content-start">
        <div className="col-4 bg-danger py-4">Justify-content-start</div>
        <div className="col-4 bg-danger py-4">Justify-content-start</div>
      </section>
      <section className="row bg-info m-1 justify-content-center">
        <div className="col-4 bg-danger py-4">Justify-content-center</div>
        <div className="col-4 bg-danger py-4">Justify-content-center</div>
      </section>
      <section className="row bg-info m-1 justify-content-end">
        <div className="col-4 bg-danger py-4">Justify-content-end</div>
        <div className="col-4 bg-danger py-4">Justify-content-end</div>
      </section>
      <section className="row bg-info m-1 justify-content-around">
        <div className="col-4 bg-danger py-4">Justify-content-around</div>
        <div className="col-4 bg-danger py-4">Justify-content-around</div>
      </section>
      <section className="row bg-info m-1 justify-content-between">
        <div className="col-4 bg-danger py-4">Justify-content-between</div>
        <div className="col-4 bg-danger py-4">Justify-content-between</div>
      </section>
      <section className="row bg-info m-1 justify-content-evenly">
        <div className="col-4 bg-danger py-4">Justify-content-evenly</div>
        <div className="col-4 bg-danger py-4">Justify-content-evenly</div>
      </section>

      <div className="container text-center">
        <div className="row">
          <div className="col-6 col-sm-3 bg-danger">.col-6 .col-sm-3</div>
          <div className="col-6 col-sm-3 bg-warning">.col-6 .col-sm-3</div>
          <div></div>
          {/* bos div amaci col-sm-3 oldugu zaman asagidakiler yanina gelmesin...*/}
          <div className="col-6 col-sm-3 bg-primary">.col-6 .col-sm-3</div>
          <div className="col-6 col-sm-3 bg-dark text-light">
            .col-6 .col-sm-3
          </div>
        </div>
      </div>
      <h3>ORDER</h3>
      <section className="row mt-4 bg-info justify-content-center">
        <div className="col bg-danger">First in Dom, no Order</div>
        <div className="col bg-primary order-3 order-xl-1">
          Second in Dom, order 3 but order 1 in xl
        </div>
        <div className="col bg-warning order-1 order-xl-3">
          Third in Dom, order 1 but order 3 in xl
        </div>
      </section>
      <h3>OFFSET</h3>
      <div className="row mt-4 bg-info justify-content-center">
        <div className="col-md-4 bg-danger">.col-md-4</div>
        <div className="col-md-4 offset-md-4 bg-warning">
          .col-md-4 .offset-md-4 offset aslinda marginLeft veriyor
        </div>
        <div className="col-md-6 offset-md-5 bg-warning">
          .col-md-6 .offset-md-3 1 offset esittir 1 column
        </div>
      </div>
      <h3>Margin ile bir divi diger divlerden uzaklastirma</h3>
      <div className="container text-center">
        <div className="row bg-info">
          <div className="col-md-4 bg-danger">.col-md-4</div>
          <div className="col-md-4 ms-auto bg-warning">.col-md-4 .ms-auto</div>
        </div>
        <div className="row bg-info">
          <div className="col-md-3 ms-md-auto bg-danger">
            .col-md-3 .ms-md-auto
          </div>
          <div className="col-md-3 ms-md-auto bg-warning">
            .col-md-3 .ms-md-auto
          </div>
        </div>
        <div className="row bg-info">
          <div className="col-auto me-auto bg-danger">.col-auto .me-auto</div>
          <div className="col-auto bg-warning">
            .col-auto (Col-auto ile cürmün kadar yer kapla)
          </div>
        </div>
      </div>
      <div className="col-9 bg-warning"> a col outside a row</div>

      <section className="container mt-4 bg-info">
        <div className="clearfix">
          <Image
            src={IMG}
            alt="deneme"
            width={500}
            height={250}
            className="col-md-6 float-md-end mb-3 ms-md-3"
          />

          <p>
            A paragraph of placeholder text. We're using it here to show the use
            of the clearfix class. We're adding quite a few meaningless phrases
            here to demonstrate how the columns interact here with the floated
            image.
          </p>

          <p>
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read.
          </p>

          <p>
            And yet, here you are, still persevering in reading this placeholder
            text, hoping for some more insights, or some hidden easter egg of
            content. A joke, perhaps. Unfortunately, there's none of that here.
          </p>
        </div>
      </section>
    </main>
  );
};

export default columns;
