<template>
  <!-- TODO: make the .job-position use linear-grediant -->
  <!-- TODO: check what grid-auto-rows do -->
  <!-- TODO: continue refactoring -->
  <section id="section-resume" class="content-wrapper">
    <h1 class="resume-heading">Resume</h1>
    <div class="timeline"></div>
    <article class="article-job-item">
      <svg class="circle circle-event-1 " viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" />
      </svg>
      <div class="job-details">
        <span class="job-date"><b>March - September 2020</b></span>
        <hgroup>
          <h2 class="job-position">IT Programmer</h2>
          <h2 class="job-company">
            <i>Solid Business Machines Center, Inc.</i>
          </h2>
        </hgroup>
        <p class="job-subtitle">
          Developer for module base content management system
        </p>
      </div>
      <ul class="job-summary">
        <li>
          Develop Quatation Reciept Module that will easily print in organize
          reciept format
        </li>
        <li>
          Develop Quatation Module that can add new product for Quatation
        </li>
      </ul>
    </article>
    <article class="article-job-item">
      <svg class="circle circle-event-2 " viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" />
      </svg>
      <div class="job-details">
        <span class="job-date"><b>January – December 2018</b></span>
        <hgroup>
          <h2 class="job-position">Programmer</h2>
          <h2 class="job-company"><i>Telford Svc Phils., Inc.</i></h2>
        </hgroup>
        <p class="job-subtitle">
          Sole developer for maintaining in-house system
        </p>
      </div>
      <ul class="job-summary">
        <li>
          Eliminating the bugs that outputted false value base on the standard
          Humidity and Temperature in a specific area
        </li>
        <li>
          Maintain the Document Controller System by fixing the bugs that
          preventing the user for adding new Document
        </li>
        <li>
          Support and assist particular departments regarding on any IT related
          issues including Computer Troubleshooting,
        </li>
      </ul>
    </article>
    <article class="article-job-item">
      <svg class="circle circle-event-3" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" />
      </svg>
      <div class="job-details">
        <span class="job-date"><b>May – September 2017</b></span>
        <hgroup>
          <h2 class="job-position">Web Developer</h2>
          <h2 class="job-company"><i>Widget City Co.</i></h2>
        </hgroup>
        <p class="job-subtitle">
          Sole developer for maintaining the e-commerce website
        </p>
      </div>
      <ul class="job-summary">
        <li>
          Maintain the website, add new product, update the price and other
          information of the specific product.
        </li>
        <li>
          Integration of Google Analytics and Facebook Pixel for data comparison
          and correlation.
        </li>
        <li>
          Sole Developed the Payment Module Dragon Pay for the new website as
          one of the payment options for the customer checkout process.
        </li>
      </ul>
    </article>
  </section>
</template>
<script>
export default {
  name: 'resume',
};
</script>
<style lang="scss">
#section-resume {
  display: grid;
  grid-template-columns: minmax(290px, auto);
  grid-template-rows: repeat(auto-fill, max-content);
  gap: 20px 0;
  position: relative;
}

.resume-heading {
  grid-column: 1/2;
  color: $color-primary;
  font-size: 3.4rem;
  text-align: center;
}

.timeline {
  display: inline-block;
  position: absolute;
  border: 1px solid #848892;
  border-radius: 5px;
  background-color: #848892;
  width: 5px;
  height: 90%;
  top: 136px;
  left: -2px;
  transform-origin: bottom;
  transform: scaleY(0);
}

#section-resume.active .timeline {
  animation: resume-timeline-transition 1.5s cubic-bezier(0.08, 0.82, 0.17, 1)
    0.4s forwards;
}

svg circle {
  fill: #fff;
  stroke: #848892;
  stroke-width: 12px;
}

.circle {
  position: relative;
  top: 55px;
  left: -15px;
  width: 30px;
  height: 30px;
  opacity: 0;
}

#section-resume.active {
  @for $i from 1 through 3 {
    svg.circle-event-#{$i} {
      animation: resume-transition 0.8s ease-in ($i * 0.3) + 1.2s forwards;
    }
  }
}

.article-job-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.article-job-item .job-details {
  transform: translateX(20px);
  opacity: 0;
}

@for $i from 1 through 3 {
  .article-job-item:nth-of-type(#{$i}) .job-details {
    animation: resume-job-details-transition 0.8s ease ($i * 0.2) + 2s forwards;
  }
}

.job-details {
  border-radius: 5px;
  box-shadow: 0px 2px 8px 0px rgba(36, 46, 76, 0.25);
  height: 137px;
  flex: 0 0 89%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 8px;
  background: #fff;
}

.job-details::before {
  content: '';
  position: absolute;
  top: 40%;
  left: 1px;
  border: 10px solid black;
  border-color: transparent transparent #fff #fff;
  transform-origin: 0 0;
  transform: rotate(45deg);
  filter: drop-shadow(-4px 3px 3px rgba(36, 46, 76, 0.25));
}

.job-date {
  font-size: 1rem;
  color: #848892;
}

.job-position {
  font-size: 1.2rem;
  color: $color-primary;
}

.job-company {
  font-size: 1rem;
  font-weight: 500;
}

.job-subtitle {
  font-size: 1rem;
}

.job-summary {
  padding: 20px 30px;
  width: 90%;
  margin-left: auto;
  position: relative;
}

.job-summary li {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  position: relative;
  border-radius: 20px;
  margin-top: 10px;
  box-shadow: 0px 2px 8px 0px rgba(36, 46, 76, 0.25);
  padding: 10px 10px;
  font-size: 1rem;
}

.job-summary li:before {
  content: '';
  position: absolute;
  top: 50%;
  left: -20px;
  margin-top: -6px;
  background: #848892;
  height: 12px;
  width: 12px;
  border-radius: 50%;
}

.article-job-item .job-summary > li {
  opacity: 0;
}

$counter: 2.8s;

@for $i from 1 through 3 {
  .article-job-item:nth-of-type(#{$i}) .job-summary {
    @for $j from 1 through 3 {
      :nth-child(#{$j}) {
        animation: resume-job-summary-transition
          1s
          cubic-bezier(0.22, 0.61, 0.36, 1)
          ($j * 0.3) +
          $counter
          forwards;
      }
    }
    $counter: $counter + 0.2;
  }
}

@media screen and (min-width: 576px) {
  .job-details {
    flex: 0 0 92%;
  }
}

@media screen and (min-width: 768px) {
  #section-resume {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content max-content;
  }

  .resume-heading {
    grid-column: 1/3;
    font-size: 6.2rem;
  }

  .timeline {
    height: 80%;
    top: 187px;
    left: 50%;
    margin-left: -2.5px;
  }

  .article-job-item:nth-of-type(1) {
    grid-column: 2/3;
  }

  .article-job-item:nth-of-type(2) {
    grid-row: 2/4;
    align-self: center;
  }

  .article-job-item:nth-of-type(2) .job-details {
    text-align: right;
    order: -1;
  }

  .article-job-item:nth-of-type(2) .circle {
    left: unset;
    right: -15px;
  }

  .article-job-item:nth-of-type(2) .job-details::before {
    content: '';
    position: absolute;
    top: 40%;
    right: -19px;
    left: unset;
    border: 10px solid black;
    border-color: #fff #fff transparent transparent;
    transform-origin: 0 0;
    transform: rotate(45deg);
    filter: drop-shadow(2px -2px 3px rgba(36, 46, 76, 0.25));
  }

  .article-job-item:nth-of-type(2) .job-summary {
    margin-left: unset;
    margin-right: auto;
  }

  .article-job-item:nth-of-type(even) .job-details {
    transform: translateX(-20px);
    opacity: 0;
  }

  .job-details {
    flex: 0 0 90%;
  }
}

@keyframes resume-job-summary-transition {
  to {
    opacity: 1;
  }
}

@keyframes resume-job-details-transition {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes resume-transition {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes resume-timeline-transition {
  to {
    transform: scaleY(1);
  }
}
</style>
