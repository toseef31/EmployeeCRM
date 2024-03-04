<template>
  <div>

        <section id="events" class="events">
      <div class="container">
        <div class="row">
          <div v-for="profile in profiles" :key="profile.id" class="col-md-6 d-flex align-items-stretch">
            <div class="card">
                <slot :item="profile"></slot>
                </div>
                </div>
                </div>
                </div>
                </section>

  </div>
</template>

<script>
export default {
    name: "CompanyProfile",
    data() {
        return {
            profiles: [
                {
                    "id": 0,
                    "partner": true,
                    "name": "Trycore technologies",
                    "partner_time": "20-01-2014"
                },
                {
                    "id": 1,
                    "partner": false,
                    "name": "LandLine technologies",
                    "partner_time": null
                }
            ]
        }
    }
};
</script>


<style scoped>
</style>