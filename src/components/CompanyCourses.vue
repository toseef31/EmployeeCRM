<template>
  <div>
    <main id="main" data-aos="fade-in">
      <!-- ======= Courses Section ======= -->
      <section id="courses" class="courses" v-if="courses && courses.length > 0">
        <div class="container" data-aos="fade-up">
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
      
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" v-for="course in courses" :key="course.code">
              
              <div class="course-item">
                <img
                  :src="course.img"
                  class="img-fluid"
                  alt="..."
                />
                <div class="course-content">
                  <div
                    class="d-flex justify-content-between align-items-center mb-3"
                  >
                    <h4>{{ course.skill }}</h4>
                    <p class="price">${{ course.price }}</p>
                  </div>

                  <h3><a href="course-details.html">{{ course.title }}</a></h3>
                  <p>
                    {{ course.description }}
                  </p>
                  <div
                    class="trainer d-flex justify-content-between align-items-center"
                  >
                    <div class="trainer-profile d-flex align-items-center">
                      <img
                        src="/img/trainers/trainer-1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                      <span>{{ course.author }}</span>
                    </div>
                    <div class="trainer-rank d-flex align-items-center">
                      <i class="bx bx-user"></i>&nbsp;{{ course.enrollements }} &nbsp;&nbsp;
                      <i class="bx bx-heart"></i>&nbsp;{{ course.wishlist }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Course Item-->
          </div>
        </div>
      </section>
      <!-- End Courses Section -->
    </main>
    <!-- End #main -->
  </div>
</template>

<script>
export default {
  name: "CompanyCourses",
  data (){
    return {
      courses: [],
    }
  },

  mounted() {
    this.courses = [
        {
          "code": '1A231B9',
          "title": 'Complete Web Development 2024',
          "description": 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
          "img": '/img/course-1.jpg',
          "price": '45',
          "skill": 'programming',
          "author": 'Ammar',
          "enrollements": '115',
          "wishlist": '75'
        },
        {
          "code": '1B2CDB0',
          "title": 'Search Engine Optimization',
          "description": 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
          "img": '/img/course-1.jpg',
          "price": '35',
          "skill": 'marketting',
          "author": 'Ali',
          "enrollements": '48',
          "wishlist": '32'
        },
        {
          "code": '2C1e45O',
          "title": 'Copywriting',
          "description": 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
          "img": '/img/course-1.jpg',
          "price": '20',
          "skill": 'content',
          "author": 'Zeeshan',
          "enrollements": '33',
          "wishlist": '12'
        },
      ]
  },

  methods: {

  }
};
</script>


<style lang="scss" scoped>
</style>
