<template>
  <div class="row justify-content-around">
    <div class="col-md-12 proj">
      <h1>Project</h1>
    </div>
    <!-- TODO: font-family set to current -->
    <div class="col-md-6">
      <ul class="proj-list">
        <li class="d-flex align-items-center flex-column">
          <div class=" image">
            <!-- PROB: image-->
            <img class="img-fluid" src="../assets/test-proj.png" alt="">
          </div>
          <div class="text">
            <h2>Fridge Man</h2>
            <p>Fridge Man was built to make food inventory management a breeze. Fridge Man allows you to create and edit locations in which food will be stored. You can also...</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Project",
  components: {},
};
</script>
<style>
.proj h1 {
  padding: 5.5rem 0 3rem;
  text-align: center;
  font-size: 7.6rem;
  font-weight: bold;
  color: #00a89c;
}

.proj-list {
  list-style: none;
  padding-left: 0;
}

.proj-list li {
  /*height: 500px;
width: 450px;*/
  display: inline-block;
  padding: 0px 20px;
  border-radius: 0.5em;
  box-shadow: 0 0 20px rgba(0, 0, 0, .16);
}

.text {

  padding-bottom: 1.5rem;
  margin: auto;
}

.text h2 {
  font-size: 1.75em;
  font-weight: bold;
}

.text p {
  margin: 0;
  font-weight: normal;
  line-height: 1
}

.image {
  position: relative;
  bottom: 2em;
  border-radius: 0.5em;
  box-shadow: 0 0 20px rgba(0, 0, 0, .16);
  width: 98%;
}
</style>