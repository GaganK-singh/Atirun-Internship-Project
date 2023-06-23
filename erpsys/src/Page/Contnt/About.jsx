import React from "react";

export default function About() {
  return (
    <div id="about-content-page">
      <div>
        <h1 id="about-heading-h1"><u>About Us!</u></h1>
      </div>
      <div id="about-div">
        <div className="about-content-div">
          <h1 className="display-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            molestiae aspernatur quos, deleniti id blanditiis illo soluta nulla
            architecto laudantium dignissimos numquam tenetur cupiditate alias.
            Porro et commodi velit ipsam!
          </h1>
        </div>
      </div>
      <br />
      <div className="about-quote-div">
        <figure class="text-center">
          <blockquote class="blockquote">
            <p>Libraries store the energy that fuels the imagination.</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Sidney Sheldon{" "}
            <cite title="Source Title">
              {" "}
              (1917-2007. American writer and producer)
            </cite>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
