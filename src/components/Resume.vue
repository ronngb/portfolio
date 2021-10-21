<template>
  <!-- TODO: ready to fill with real data-->
  <!-- TODO: set it to mobile 1st-->
  <!-- TODO: decide if the 3rd row to be grid or not -->
  <!-- TODO: try if the task-list is better w/o border -->
  <!-- TODO: try to change the font-color of .position -->
  <!-- TODO: try to change the font-color of date-hired -->
  <!-- TODO: try to remove the box-shadow of task-list replace with bgcolor -->
  <section id="section-resume" class="content-wrapper">
    <h1 class="resume-heading">Resume</h1>
    <div class="col-left-job-items">
      <article class="article-job-item">
        <div class="job-details">
          <span class="job-date"><b>January – December 2018</b></span>
          <hgroup>
            <h2 class="job-position">Programmer</h2>
            <h2 class="job-company"><i>Telford Svc.</i></h2>
          </hgroup>
          <p class="job-subtitle">
            Sole developer for maintaining in-house system
          </p>
        </div>
        <svg class="circle circle-event-2 " viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" />
        </svg>
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
            Support and assist particular departments regarding on any IT
            related issues including Computer Troubleshooting,
          </li>
        </ul>
      </article>
    </div>
    <!-- REMIND: col-timeline is the middle line -->
    <div class="col-timeline"></div>
    <div class="col-job-items">
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
        <svg class="circle circle-event-2" viewBox="0 0 100 100">
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
            Integration of Google Analytics and Facebook Pixel for data
            comparison and correlation.
          </li>
          <li>
            Sole Developed the Payment Module Dragon Pay for the new website as
            one of the payment options for the customer checkout process.
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  name: 'resume',
};
</script>
<style lang="scss">
// REMIND:768px is next BP, the 576px is still unsure
#section-resume {
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(290px, 460px));
  grid-template-columns: min-content 1fr;
  // grid-template-columns: 1fr min-content 1fr;
  // grid-auto-rows: auto 500px;
  gap: 20px 0;
}

.resume-heading {
  grid-column: 1/4;
  color: $color-primary;
  font-size: 3.4rem;
  text-align: center;
}

.col-left-job-items {
  display: none;
}

// TODO:experiment on this try using bg color
.col-timeline {
  position: relative;
  border-left: 5px solid #848892;
  width: 100%;
  height: 100%;
}

.circle {
  position: relative;
  left: -18px;
  width: 30px;
  height: 30px;
}

svg.circle-event-1 {
  top: 55px;
}

svg.circle-event-2 {
  top: 55px;
}

svg circle {
  fill: #fff;
  stroke: #848892;
  stroke-width: 12px;
}

.article-job-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 35px;
}

.job-details {
  border-radius: 5px;
  box-shadow: 0px 2px 8px 0px rgba(36, 46, 76, 0.25);
  height: 137px;
  // width: 90%;
  // margin-left: auto;
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

@media screen and (min-width: 576px) {
  .job-details {
    flex: 0 0 92%;
  }
}

@media screen and (min-width: 768px) {
  #section-resume {
    grid-template-columns: 1fr min-content 1fr;
  }

  .col-left-job-items {
    display: block;
    align-self: center;
  }

  .col-left-job-items .job-details {
    text-align: right;
  }

  .col-left-job-items .job-details::before {
    display: none;
  }

  .col-left-job-items .job-details::after {
    content: '';
    position: absolute;
    top: 40%;
    right: -18px;
    left: unset;
    border: 10px solid black;
    // border-color: transparent transparent #fff #fff;
    border-color: #fff #fff transparent transparent;
    transform-origin: 0 0;
    transform: rotate(45deg);
    filter: drop-shadow(2px -2px 3px rgba(36, 46, 76, 0.25));
  }

  .col-left-job-items .circle {
    left: unset;
    right: -17px;
    z-index: 10;
  }

  .col-left-job-items .job-summary {
    margin-left: unset;
    margin-right: auto;
  }

  .col-timeline {
    grid-column: 2/3;
  }

  .job-details {
    flex: 0 0 90%;
  }
}

// @media screen and (max-width: 768px) {
//   #section-resume {
//     grid-template-columns: min-content 1fr;
//   }

//       .resume-heading {
//   grid-column: 1/4;
//   color: $color-primary;
//   font-size: 3.4rem;
//   text-align: center;
// }
//   .article-one {
//     padding-right: 0;
//   }

//   .test-date-h {
//     font-size: 0.9rem;
//     font-weight: 700;
//   }

//   .job-position {
//     font-size: 1.1rem;
//   }

//   .job-company {
//     font-size: 1.1rem;
//     font-weight: 500;
//   }

//   .job-subtitle {
//     font-size: 1.1rem;
//   }
// }
</style>
