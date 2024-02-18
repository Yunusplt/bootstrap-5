import React from "react";
import "./style.scss";

const grid = () => {
  return (
    <main>
      <section className="row">
        <div className="col bg-success">1</div>
        <div className="col bg-primary">2</div>
        <div className="col bg-info">3</div>
        <div className="col bg-warning">4</div>
        <div className="col bg-danger">5</div>
        <div className="col bg-dark">6</div>
        <div className="col bg-success">7</div>
        <div className="col bg-primary">8</div>
        <div className="col bg-info">9</div>
        <div className="col bg-warning">10</div>
        <div className="col bg-danger">11</div>
        <div className="col bg-dark">12</div>
      </section>
      <hr />
      <section className="row mt-2">
        <div className="col bg-success" id="size">
          1
        </div>
        <div className="col bg-primary" id="size">
          2
        </div>
        <div className="col bg-info" id="size">
          3
        </div>
        <div className="col bg-warning" id="size">
          4
        </div>
        <div className="col bg-danger" id="size">
          5
        </div>
        <div className="col bg-dark" id="size">
          6
        </div>
        <div className="col bg-success" id="size">
          7
        </div>
        <div className="col bg-primary" id="size">
          8
        </div>
        <div className="col bg-info" id="size">
          9
        </div>
        <div className="col bg-warning" id="size">
          10
        </div>
        <div className="col bg-danger" id="size">
          11
        </div>
        <div className="col bg-dark" id="size">
          12
        </div>
      </section>
      <hr />
      <section className="row mt-2 text-center justify-content-xl-center">
        <div className="col col-lg-2 bg-success py-4 align-items-center">1</div>
        <div className="col-md-auto bg-primary py-4 align-items-center">
          Col Auto ile cürmün kadar yer kapla
        </div>
        {/* col-md-auto yapinca. 768px ve uzerinde automatik davraniyor cürmü kadar yer kapliyor. ve md nin altina dusunce column özelliginin disina cikiyor. ve ortada bulundugu icin dolayli yoldan 1 ve ikide column ozelliginin disina cikiyor.*/}
        <div className="col col-lg-2 bg-info py-4 align-items-center">3</div>
      </section>
      <section className="row mt-2 text-center">
        <div className="col bg-success py-4 align-items-center">1</div>
        <div className="col-md-auto bg-primary py-4 align-items-center">
          Col Auto ile cürmün kadar yer kapla
        </div>
        <div className="col col-lg-2 bg-info py-4 align-items-center">3</div>
      </section>
      <hr />
      <section className="row mt-3">
        <strong className="col bg-success py-3">Block Element</strong>
        <strong className="col bg-info py-3">Block Element</strong>
        <strong className="col bg-warning py-3">Block Element</strong>
      </section>
      <section className="row mt-3">
        <strong className="bg-success py-3">
          Parant e row verip childlara col vermezsem, default col-12 olur. yani
          tüm satiri kaplar
        </strong>
        <strong className="bg-info py-3">Block Element</strong>
        <strong className="bg-warning py-3">Block Element</strong>
      </section>
      <hr />
      <section className="row row-cols-4">
        <div className="col bg-success">row-cols-4</div>
        <div className="col bg-primary">row-cols-4</div>
        <div className="col bg-info">row-cols-4</div>
        <div className="col bg-warning">row-cols-4</div>
        <div className="col bg-danger">row-cols-4</div>
        <div className="col bg-dark">row-cols-4</div>
        <div className="col bg-success">row-cols-4</div>
        <div className="col bg-primary">row-cols-4</div>
        <div className="col bg-info">row-cols-4</div>
        <div className="col bg-warning">row-cols-4</div>
        <div className="col bg-danger">row-cols-4</div>
        <div className="col bg-dark">row-cols-4</div>
      </section>
      <hr />
    </main>
  );
};

export default grid;
